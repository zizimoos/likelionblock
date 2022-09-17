import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-left: 300px;
  color: black;
  background-color: ${(props) => theme.LightTheme.colors.subBackgroundColor};
`;

function Content_01(props) {
  return (
    <Container>
      <div>블록체인의 정의와 특징</div>
      <div>정의 (Definition)</div>
      <div>탈중앙 네트워크 시스템에서 작동하는 분산 원장 기술이다.</div>
      <div>용어 설명 추가해 주세요</div>
    </Container>
  );
}

export default Content_01;
