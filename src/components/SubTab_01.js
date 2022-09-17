import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubTab = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: 30px;
  div {
    margin-bottom: 10px;
  }
`;

function SubTab_01(props) {
  return (
    <>
      <SubTab>
        <div>
          <Link to={`/content-01/section-01`}>What is Blockchain?</Link>
        </div>
        <div>
          <Link to={`/content-01/section-02`}>Structure</Link>
        </div>
        <div>
          <Link to={`/content-01/section-02`}>Transaction</Link>
        </div>
        <div>
          <Link to={`/content-01/section-02`}>Mining</Link>
        </div>
        <div>
          <Link to={`/content-01/section-02`}>FAQ</Link>
        </div>
      </SubTab>
    </>
  );
}

export default SubTab_01;
