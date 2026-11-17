import { createHash, timingSafeEqual } from "node:crypto";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

function getSecret() {
  const secret = process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD;
  if (!secret) throw new Error("SESSION_SECRET or ADMIN_PASSWORD must be set");
  return new TextEncoder().encode(secret);
}

export async function createAdminSession() {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;

  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export function verifyAdminPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || typeof password !== "string") return false;
  // Hash both sides so the comparison is constant-time regardless of length.
  const given = createHash("sha256").update(password).digest();
  const expected = createHash("sha256").update(adminPassword).digest();
  return timingSafeEqual(given, expected);
}

const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILED_LOGINS = 5;
const failedLogins = new Map<string, { count: number; resetAt: number }>();

/**
 * Best-effort brute-force throttle: 5 failed attempts per IP per 15 minutes.
 * State is per serverless instance, so pair it with Vercel Firewall rate
 * limiting on /api/admin/login for a hard guarantee.
 */
export function isLoginRateLimited(ip: string): boolean {
  const entry = failedLogins.get(ip);
  if (!entry) return false;
  if (Date.now() > entry.resetAt) {
    failedLogins.delete(ip);
    return false;
  }
  return entry.count >= MAX_FAILED_LOGINS;
}

export function recordFailedLogin(ip: string) {
  const now = Date.now();
  const entry = failedLogins.get(ip);
  if (!entry || now > entry.resetAt) {
    failedLogins.set(ip, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
  } else {
    entry.count += 1;
  }
}

export function clearFailedLogins(ip: string) {
  failedLogins.delete(ip);
}
