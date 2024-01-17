import { CategoriesContextType, Category } from "@/type.ts";
import { useState } from "react";

export const useCategories: () => CategoriesContextType = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const toggleCategories = (category: Category) => {
    setCategories((curr) =>
      curr.some((c) => c.index === category.index)
        ? curr.filter((c) => c.index !== category.index)
        : [...curr, category],
    );
  };

  return { categories, toggleCategories };
};
