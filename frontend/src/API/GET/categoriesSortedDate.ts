import { API_KEY } from "@/const.ts";

export const getCategoriesSortedByDate = async () => {
  const res = await fetch(`${API_KEY}/categories/getSortedDate`);
  if (res.status !== 200) throw new Error("Cannot fetch categories");
  const data = await res.json();
  if (!data) throw new Error("Cannot fetch categories");
  return data;
};
