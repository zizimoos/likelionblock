import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 300px;
  color: black;
  background-color: ${(props) => theme.LightTheme.colors.subBackgroundColor};
`;
const TableRow = styled.div`
  width: 950px;
  display: flex;
  flex-directiion: row;
  justify-contents: center;
  align-items: center;
  div {
    height: 40px;
    padding-left: 5px;
    display: flex;
    justify-contents: center;
    align-items: center;
    border-bottom: solid 0.5px;
  }
  div:first-child {
    flex: 0.5;
  }
  div:nth-child(2) {
    flex: 5;
  }
  div:nth-child(3) {
    flex: 18;
  }
`;
const CharacterTable = styled.div`
  display: flex;
  flex-direction: column;
  justifiy-contents: center;
  aling-items: center;
  ${TableRow}:first-child {
    border-top: solid 0.5px;
  }
`;
const Description = styled.div`
  margin: 10px;
`;

function Section_01() {
  return (
    <Container>
      <div>블록체인의 정의와 특징</div>
      <div>정의 (Definition)</div>
      <div>탈중앙 네트워크 시스템에서 작동하는 분산 원장 기술이다.</div>
      <div>특징 (Characteristics)</div>
      <CharacterTable>
        <TableRow>
          <div>1</div>
          <div>Anonymous</div>
          <div>
            Only public address and wallet address are used in transaction.
          </div>
        </TableRow>
        <TableRow>
          <div>2</div>
          <div>Traceability</div>
          <div>All the transaction includes address.</div>
        </TableRow>
        <TableRow>
          <div>3</div>
          <div>Trustless</div>
          <div>
            Trusted third party is not needed at Blockchain and peers don’t have
            to trust each other.
          </div>
        </TableRow>
        <TableRow>
          <div>4</div>
          <div>Distributed Ledger</div>
          <div>
            All the participants in the system have the information of
            transaction.
          </div>
        </TableRow>
        <TableRow>
          <div>5</div>
          <div>Decentralized</div>
          <div>
            Unlike traditional network system, there is not centralized party at
            Blockchain system
          </div>
        </TableRow>
        <TableRow>
          <div>6</div>
          <div>Consensus Algorithms</div>
          <div>
            Even if it is trustless , credibility of Data is still needed in
            this system.
          </div>
        </TableRow>
        <TableRow>
          <div>7</div>
          <div>Immutability</div>
          <div>
            Once information is involved in blockchain, it can’t be changed
          </div>
        </TableRow>
      </CharacterTable>
      <Description>
        Anonymous : 전화번호, 계좌번호는 조사가 가능하지만 누구의 것인지,
        블록체인의 주소는 소유한 본인이 밝히기 전에는 누구의 것인지 알수 없다.
        감자밭에 뭍어 두어도, 누군가 공사?를 하게되면 발견된다.
      </Description>
      <Description>
        Traceability : 주소라는 것이 있고, 다른 주소와 비트코인을 주고 받을 때
        사용된다. 비트코인 익스플로러에서 어느주소에서 어느주소로 얼마가
        이동되었는지 모두 기록 되어 있다. 또한 누구든지 이 정보를 확인 할 수
        있다.
      </Description>
      <Description>
        Trustless : 믿을 수 있는 혹은 어쩔수 없이 믿을 수 밖에 없는 제3자가
        필요없다. 제3자는 은행이 대표적이다. 하지만, 블록체인은 제3자가 없다.
        필요도 없다.
      </Description>
      <Description>
        Distributed Ledger : 전송의 기록들이(원장) 분산되어서 노드라고 불리는
        서버컴퓨터에 분산 저장 되어 있다. 모든 노드서버들은 항상? 똑같은
        원장들을 가지고 있도록 설계되어있다.
      </Description>
      <Description>
        Decentralized : 은행 혹은 웹2 시스템이 지배하고 있는 현시점은 정보들이
        하나의? 서버에 집중되어있다. 안전 조치들은 있겠지만 중앙서버에 문제가
        발생하면(해킹, 전쟁으로 폭격 등) 시스템의 정보들을 신뢰할 수 없는 상태가
        된다.
      </Description>
      <Description>
        Consensus Algorithm : 블록체인 시스템에서 결정해야 하는 문제들은 합의
        알고리즘으로 결정한다. 가장 합리적이고 옳은 판단이라 믿는 쪽으로 투표의
        형식을 빌어서 합의한다. 예로는 POS,POW,가장긴 블록을 인정하는 행위
        등이다.
      </Description>
      <Description>
        Immutability : 블록체인 시스템에 기록된 데이타는 변경이 불가능하다. 이
        말은 누군가 변경하면 시스템이 즉시 알아챌수 있고, 합의 알고리즘 등으로
        어느 데이타가 옳은 혹은 변경되지 않은 데이타인지 알아내고 결정할 수
        있다.
      </Description>
    </Container>
  );
}

export default Section_01;
