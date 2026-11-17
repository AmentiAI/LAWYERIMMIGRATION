import { NextResponse } from "next/server";
import { initDatabase } from "@/lib/schema";
import {
  clearFailedLogins,
  createAdminSession,
  isLoginRateLimited,
  recordFailedLogin,
  verifyAdminPassword,
} from "@/lib/auth";

let dbReady = false;

async function ensureDb() {
  if (!dbReady) {
    await initDatabase();
    dbReady = true;
  }
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isLoginRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Try again in 15 minutes." },
        { status: 429 }
      );
    }

    await ensureDb();
    const { password } = await request.json();

    if (!verifyAdminPassword(password)) {
      recordFailedLogin(ip);
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    clearFailedLogins(ip);
    await createAdminSession();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
