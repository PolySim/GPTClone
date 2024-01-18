import { API_KEY } from "@/const.ts";
import { CategoriesType } from "@/type.ts";

export const getCategoriesSortedByDate = async () => {
  const res = await fetch(`${API_KEY}/categories/getSortedDate`);
  if (res.status !== 200) throw new Error("Cannot fetch categories");
  const data = (await res.json()) as CategoriesType;
  if (!data) throw new Error("Cannot fetch categories");
  return data;
};
