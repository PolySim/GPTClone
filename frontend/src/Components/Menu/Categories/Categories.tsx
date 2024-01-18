import { CategoriesContainer } from "@/Components/Menu/Categories/styled.ts";
import { useContext, useEffect } from "react";
import { CategoriesContext } from "@/Context.ts";
import SubCategories from "@/Components/Menu/Categories/SubCategories/SubCategories.tsx";
import { getCategoriesSortedByDate } from "@/API/GET/categoriesSortedDate.ts";

const Categories = () => {
  const { categories, initCategories } = useContext(CategoriesContext);

  useEffect(() => {
    const getCategories = async () => {
      const data = await getCategoriesSortedByDate();
      initCategories(data);
    };

    void getCategories();
  }, []);

  return (
    <CategoriesContainer>
      {categories &&
        categories.map(({ title, categories }) =>
          categories.length > 0 ? (
            <SubCategories key={title} title={title} categories={categories} />
          ) : null,
        )}
    </CategoriesContainer>
  );
};

export default Categories;
