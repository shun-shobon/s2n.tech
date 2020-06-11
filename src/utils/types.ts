export type IconData = ["fas" | "far" | "fab", string];

export type SectionTitleData = {
  text: string;
  icon: IconData;
};

export type BadgeData = {
  href: string;
  text: string;
};

export type CardTitleData = {
  text: string;
  icon?: IconData;
};

export type CardContentData = {
  texts: string | string[];
};

export type CardImageData = {
  src: string;
  alt?: string;
  badges?: BadgeData[];
};

export type CardData = {
  title: CardTitleData;
  content: CardContentData;
  image?: CardImageData;
  direction: "left" | "right";
};

export type CardListData = {
  cards: Omit<CardData, "direction">[];
  firstDirection: "left" | "right";
};
