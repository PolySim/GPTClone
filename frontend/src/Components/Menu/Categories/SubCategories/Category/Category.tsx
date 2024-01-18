import {CategoryType} from "@/type.ts";
import {CategoryStyled} from "@/Components/Menu/Categories/styled.ts";

const Category = (props: CategoryType) => {
  return <CategoryStyled>{props.name}</CategoryStyled>;
};

export default Category;
