import {
  Circle,
  ButtonWriteSVG,
  NewChatStyled,
  TextApparitionHover,
} from "@/Components/Menu/styled.ts";
import OpenAISVG from "@/SVG/OpenAI.tsx";
import WriteSVG from "@/SVG/WriteSVG.tsx";
import { useState } from "react";

const NewChat = () => {
  const [isButtonHovering, setIsButtonHovering] = useState(false);

  return (
    <NewChatStyled>
      <Circle>
        <OpenAISVG width={18} height={18} />
      </Circle>
      <p>New chat</p>
      <ButtonWriteSVG
        onMouseEnter={() => setIsButtonHovering(true)}
        onMouseLeave={() => setIsButtonHovering(false)}
      >
        <WriteSVG width={18} height={18} />
      </ButtonWriteSVG>
      <TextApparitionHover $isHover={isButtonHovering}>
        <span />
        <p>Nouveau chat</p>
      </TextApparitionHover>
    </NewChatStyled>
  );
};

export default NewChat;
