import { CategoriesContextType, CategoriesType, CategoryType } from "@/type.ts";
import { useState } from "react";

export const useCategories: () => CategoriesContextType = () => {
  const [categories, setCategories] = useState<CategoriesType | null>(null);

  const toggleCategories = (category: CategoryType, index: number) => {
    setCategories((curr) =>
      curr && curr[index].categories.some((c) => c.index === category.index)
        ? curr.map((c) => ({
            ...c,
            categories: c.categories.filter((c) => c.index !== category.index),
          }))
        : [
            { title: "Aujourd'hui", categories: [] },
            { title: "Hier", categories: [] },
            { title: "7 derniers jours", categories: [] },
            { title: "30 derniers jours", categories: [] },
          ],
    );
  };

  const initCategories: (categories: CategoriesType | null) => void = (
    categories,
  ) => {
    setCategories(categories);
  };

  return { categories, toggleCategories, initCategories };
};
