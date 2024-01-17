import { MenuStyled } from "@/Components/Menu/styled.ts";
import NewChat from "@/Components/Menu/NewChat/NewChat.tsx";

const Menu = () => {
  return (
    <MenuStyled>
      <NewChat />
    </MenuStyled>
  );
};

export default Menu;
