export type CategoriesContextType = {
  categories: CategoriesType | null;
  toggleCategories: (category: CategoryType, index: number) => void;
  initCategories: (categories: CategoriesType | null) => void;
};

export type DateChoice =
  | "Aujourd'hui"
  | "Hier"
  | "7 derniers jours"
  | "30 derniers jours";

export type CategoriesType = {
  title: DateChoice;
  categories: CategoryType[];
}[];

export type SubCategoriesType = {
  title: string;
  categories: CategoryType[];
};

export type CategoryType = {
  index: number;
  name: string;
  date: number;
};
