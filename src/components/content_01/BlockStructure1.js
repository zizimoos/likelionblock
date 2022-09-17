import React from "react";
import styled from "styled-components";

const TableRow = styled.div`
  width: 900px;
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
    flex: 3;
  }
  div:nth-child(2) {
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
const CompareTableContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const CompareTable = styled(CharacterTable)`
  flex-direction: column;
  margin: 10px;
`;
const CompareTableRow = styled(TableRow)`
  width: 400px;
  div:first-child {
    flex: 3;
  }
  div:nth-child(2) {
    flex: 8;
  }
`;
const Description = styled.div`
  margin: 10px;
`;

function BlockchainStructure1(props) {
  return (
    <>
      <div>블록 #0</div>
      <CharacterTable>
        <TableRow>
          <div></div>
          <div>요약</div>
        </TableRow>
        <TableRow>
          <div>거래수</div>
          <div>1</div>
        </TableRow>
        <TableRow>
          <div>출력 합계</div>
          <div>50 BTC</div>
        </TableRow>
        <TableRow>
          <div>예상된 거래량</div>
          <div>0 BTC</div>
        </TableRow>
        <TableRow>
          <div>거래 수수료</div>
          <div>0 BTC</div>
        </TableRow>
        <TableRow>
          <div>높이</div>
          <div>0 (주요체인)</div>
        </TableRow>
        <TableRow>
          <div>타임 스탬프</div>
          <div>2009-01-03 18:15:05</div>
        </TableRow>
        <TableRow>
          <div>수신 시간</div>
          <div>2009-01-03 18:15:05</div>
        </TableRow>
        <TableRow>
          <div>릴레이된 곳</div>
          <div>unkonwn</div>
        </TableRow>
        <TableRow>
          <div>난이도</div>
          <div>1</div>
        </TableRow>
        <TableRow>
          <div>Bits</div>
          <div>486604799</div>
        </TableRow>
        <TableRow>
          <div>크기</div>
          <div>0.285kB</div>
        </TableRow>
        <TableRow>
          <div>무게</div>
          <div>0.896kWU</div>
        </TableRow>
        <TableRow>
          <div>번역</div>
          <div>1</div>
        </TableRow>
        <TableRow>
          <div>해쉬난수</div>
          <div>2083236893</div>
        </TableRow>
        <TableRow>
          <div>블록 보상</div>
          <div>50 BTC</div>
        </TableRow>
        <TableRow>
          <div></div>
          <div>해시</div>
        </TableRow>
        <TableRow>
          <div>해시</div>
          <div>
            0000 0000 0019 d668 9c08 5ae1 6583 1e93 4ff7 63ae 46a2 a6c1 72b3
            f1b6 0a8c e26f
          </div>
        </TableRow>
        <TableRow>
          <div>이전차단</div>
          <div>
            0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000
            0000 0000 0000
          </div>
        </TableRow>
        <TableRow>
          <div>다음 블록</div>
          <div>
            0000 0000 839a 8e68 86ab 5951 d76f 4114 7542 8afc 9094 7ee3 2016
            1bbf 18eb 6048
          </div>
        </TableRow>
        <TableRow>
          <div>머클루트</div>
          <div>
            4a5e 1e4b aab8 9f3a 3251 8a88 c31b c87f 618f 7667 3e2c c77a b212
            7b7a fded a33b
          </div>
        </TableRow>
      </CharacterTable>

      <Description>
        coinbase : 블록체인 시스템으로부터 채굴자에게 전송되는...
      </Description>
      <Description>
        거래수 : 최초의 블록은 거래내역이 없고, 채굴자에게 블록 채굴 보상에 대한
        거래만 있다.
      </Description>
      <Description>출력 합계 : 최초의 보상 50 BTC 이다.</Description>
      <Description>블록 보상 : 최초의 보상 50 BTC 이다</Description>
      <Description>
        예상된 거래양 : 최초이므로 블록에 포함될 거래 내역이 없으므로 거래량은 0
        BTC
      </Description>
      <Description>높이 : 최초의 블록이므로 번호도 #0, 높이도 0</Description>
      <Description>
        해쉬 : 최초 블록의 해쉬값은 있으나, 최초의 블록에 포함될 블록이 없으므로
        해쉬갑은 000...00
      </Description>
      <Description>
        다음 블록 : 제네시스 블록 바로 다음 블록 #1 의 해쉬값, #1에는 이전블록의
        해쉬값인 #0의 해쉬값이 담겨있다.
      </Description>

      <CompareTableContainer>
        <CompareTable>
          <CompareTableRow>
            <div></div>
            <div>블록 #0</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>거래수</div>
            <div>1</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>출력 합계</div>
            <div>50 BTC</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>예상된 거래량</div>
            <div>0 BTC</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>거래 수수료</div>
            <div>0 BTC</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>높이</div>
            <div>0 (주요체인)</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>타임 스탬프</div>
            <div>2009-01-03 18:15:05</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>난이도</div>
            <div>1</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>해쉬난수</div>
            <div>2083236893</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>블록 보상</div>
            <div>50 BTC</div>
          </CompareTableRow>
        </CompareTable>
        <CompareTable>
          <CompareTableRow>
            <div></div>
            <div>블록 ##539832</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>거래수</div>
            <div>2106</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>출력 합계</div>
            <div>5,235.7911477 BTC</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>예상된 거래량</div>
            <div>543.85239667 BTC</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>거래 수수료</div>
            <div>0.1561294 BTC</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>높이</div>
            <div>539832 (주요체인)</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>타임 스탬프</div>
            <div>2018-09-03 20:49:16</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>난이도</div>
            <div>6,727,225,469,722.53</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>해쉬난수</div>
            <div>2551954848</div>
          </CompareTableRow>
          <CompareTableRow>
            <div>블록 보상</div>
            <div>12.5 BTC</div>
          </CompareTableRow>
        </CompareTable>
      </CompareTableContainer>
      <Description>
        출력합계 & 거래량 : #539832 블록에 "출력합계"와 "예상된거래량"이
        의미하는 것은....무엇일가요 그리고, 어떤 관계성이 있나요?
      </Description>
    </>
  );
}

export default BlockchainStructure1;
