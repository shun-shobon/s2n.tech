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
