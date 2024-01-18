import { SubCategoriesContainer } from "@/Components/Menu/Categories/styled.ts";
import { SubCategoriesType } from "@/type.ts";

const SubCategories = (props: SubCategoriesType) => {
  return <SubCategoriesContainer>{props.title}</SubCategoriesContainer>;
};

export default SubCategories;
