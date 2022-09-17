import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px;
`;

const BlockHeader = styled(Container)`
  width: 400px;
  margin: 10px;
  padding: 10px;
  align-items: flex-start;
  div {
    padding-left: 10px;
    padding-bottom: 4px;
  }
`;

const Description = styled.div`
  margin: 10px;
`;
const TransactioInfo = styled(BlockHeader)``;
const BlockHash = styled(BlockHeader)``;
const EctInfo = styled(BlockHeader)``;

function BlockStructure2(props) {
  return (
    <>
      <Container>
        <div> BLOCK#0 GenesisBlock</div>
        <BlockHash>
          <span>BlockHash: 0000 0000 0019 d668 9c08...</span>
        </BlockHash>
        <BlockHeader>
          <div>BlockHeader</div>
          <div>Version : 1</div>
          <div>Previous Hash : 0000 0000 0000 0000 ...</div>
          <div>Merkle Hash : 4a5e 1e4b aab8 9f3a ... </div>
          <div>Time : 2009 ...</div>
          <div>Bits : 486604799</div>
          <div>Nonce : 2083236893</div>
        </BlockHeader>
        <TransactioInfo>
          <div>거래정보</div>
          <div>Tx0.0 : 채굴자에게 50 BTC 보상</div>
        </TransactioInfo>
        <EctInfo>
          <div>기타정보</div>
        </EctInfo>
      </Container>
      <Description>
        BlockHash: BlockHeader의 모든 정보를 Hashing한 값
      </Description>
      <Description>
        Bits : targetHash 구할때 주어졌던 16진수 값 "0x1d00ffff" 앞의 "1d"와
        "d00ffff"를 나눠서 공식에 넣었던...그 값? 486604799의 16진수값은 =
        0x1d00ffff
      </Description>
    </>
  );
}

export default BlockStructure2;
