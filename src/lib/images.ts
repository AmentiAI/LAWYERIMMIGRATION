export const legalImages = {
  courtroom: {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Courtroom%2C_United_States_Courthouse%2C_Davenport%2C_Iowa.jpg",
    alt: "United States federal courtroom",
    credit: "Carol M. Highsmith / Library of Congress (Public Domain)",
  },
  supremeCourt: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/94/Supreme_Court.jpg",
    alt: "Supreme Court of the United States building",
    credit: "USDA / Wikimedia Commons (Public Domain)",
  },
  capitol: {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/United_States_Capitol_-_west_side.JPG",
    alt: "United States Capitol building",
    credit: "Wikimedia Commons (Public Domain)",
  },
  lawBooks: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Law_Books_4.JPG",
    alt: "Law books and legal research materials",
    credit: "Wikimedia Commons (CC BY-SA)",
  },
  ladyJustice: {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Binghamton%2C_NY_-_Lady_Justice_atop_Broome_County_Courthouse_01.jpg",
    alt: "Lady Justice statue representing the legal profession",
    credit: "Wikimedia Commons (CC BY-SA)",
  },
  naturalization: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Meeting_Room_Faneuil_Hall_Naturalization_Ceremony_Oath.jpg",
    alt: "U.S. naturalization citizenship ceremony",
    credit: "Wikimedia Commons (Public Domain)",
  },
  immigrationAct: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/LBJ_and_HHH_at_Statue_of_Liberty_in_1965_%286531800005%29.jpg",
    alt: "Immigration reform signing at Statue of Liberty, 1965",
    credit: "U.S. National Archives / Wikimedia Commons (Public Domain)",
  },
} as const;

export type LegalImageKey = keyof typeof legalImages;
