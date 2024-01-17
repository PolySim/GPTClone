export type CategoriesContextType = {
  categories: Category[];
  toggleCategories: (category: Category) => void;
};

export type Category = {
  index: number;
  name: string;
  date: Date;
};
