import { MenuStyled } from "@/Components/Menu/styled.ts";
import NewChat from "@/Components/Menu/NewChat/NewChat.tsx";
import Categories from "@/Components/Menu/Categories/Categories.tsx";

const Menu = () => {
  return (
    <MenuStyled>
      <NewChat />
      <Categories />
    </MenuStyled>
  );
};

export default Menu;
