import { createContext } from "react";
import { CategoriesContextType } from "@/type.ts";

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: null,
  toggleCategories: () => {},
  initCategories: () => {},
});
