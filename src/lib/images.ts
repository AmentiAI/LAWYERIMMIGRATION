const wiki = (hashPath: string, filename: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/${hashPath}/${filename}`;

export const mysticImages = {
  hero: {
    src: wiki(
      "2/21",
      "Schooner_passing_through_open_Mystic_River_Bascule_Bridge.JPG"
    ),
    alt: "Schooner Argia passing through the Mystic River Bascule Bridge in Mystic, Connecticut",
    credit: "Juliancolton / Wikimedia Commons (Public Domain)",
  },
  marina: {
    src: wiki("a/a4", "Marina_in_the_Mystic_River,_Mystic,_CT.JPG"),
    alt: "Marina on the Mystic River in Mystic, Connecticut",
    credit: "Juliancolton / Wikimedia Commons (Public Domain)",
  },
  downtownRiver: {
    src: wiki("3/30", "Downtown_Mystic,_CT_Mystic_River.JPG"),
    alt: "Downtown Mystic, Connecticut along the Mystic River with the bascule bridge",
    credit: "Juliancolton / Wikimedia Commons (Public Domain)",
  },
  basculeBridge: {
    src: wiki("e/ea", "Mystic_River_Bascule_Bridge_(_2016_).jpg"),
    alt: "The historic Mystic River Bascule Bridge in Mystic, Connecticut",
    credit: "AK-Bino / Wikimedia Commons (CC BY-SA 4.0)",
  },
  downtownWinter: {
    src: wiki("2/20", "Downtown_Mystic,_CT_in_winter.JPG"),
    alt: "East Main Street in downtown Mystic, Connecticut",
    credit: "Juliancolton / Wikimedia Commons (Public Domain)",
  },
  railroadBridge: {
    src: wiki("a/a8", "Mystic_River_Railroad_Bridge.JPG"),
    alt: "Mystic River Railroad swing bridge in Mystic, Connecticut",
    credit: "Juliancolton / Wikimedia Commons (Public Domain)",
  },
  seaportSchooner: {
    src: wiki("3/38", "Brilliant_(schooner).jpg"),
    alt: "The schooner Brilliant at Mystic Seaport, Mystic, Connecticut",
    credit: "Rhvanwinkle / Wikimedia Commons (CC BY-SA 3.0)",
  },
} as const;

export type MysticImageKey = keyof typeof mysticImages;
