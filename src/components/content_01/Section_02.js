import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import BlockStructure1 from "./BlockStructure1";
import BlockStructure2 from "./BlockStructure2";

const Container = styled.div`
  width: 100vw;
  height: 3000px;
  margin-left: 300px;
  color: black;
  background-color: ${(props) => theme.LightTheme.colors.subBackgroundColor};
`;
const GenesisBlock = styled.div``;
const Description = styled.div`
  margin: 10px;
`;

function Section_02(props) {
  return (
    <Container>
      <div>
        <div>GenesisBlock</div>
        <div>BlockStructure</div>
        <div>ChainStructure</div>
      </div>
      <GenesisBlock>
        <Description>
          Genesis Block : Genesis Block is the very first Block of certain
          Blockchain ecosystem, also known as Block 0
        </Description>
      </GenesisBlock>
      <BlockStructure1 />
      <BlockStructure2 />
    </Container>
  );
}

export default Section_02;
