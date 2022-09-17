import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

import Content01 from "./Content_01";
import Content02 from "./Content_02";
import Content03 from "./Content_03";

import SubTab01 from "../components/SubTab_01";

import Section01 from "../components/content_01/Section_01";
import Section02 from "../components/content_01/Section_02";
import theme from "../theme";

// import Content from "../components/Content";
// import LeftDirectory from "../components/LeftDirectory";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Tabs = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  font-size: 20px;
  background-color: ${(props) => theme.LightTheme.colors.mainBackgroundColor};
`;
const Tab = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  background-color: white);
`;
const SubTab = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: 30px;
  div {
    margin-bottom: 10px;
  }
`;
const LinkContainer = styled.div``;

const Title = styled.h1`
  margin: 20px 0px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
`;

function Home(props) {
  const [fall01, setFall01] = useState(false);
  const [fall02, setFall02] = useState(false);
  const [fall03, setFall03] = useState(false);
  return (
    <Container>
      <Tabs>
        <Title>LIKELION BLOCKCHAIN SCHOOL</Title>
        <Tab>
          <LinkContainer onClick={() => setFall01(!fall01)}>
            <Link to={`/content-01`}>
              {fall01 ? <BiChevronDown /> : <BiChevronRight />}
              BLOCKCHAIN
            </Link>
          </LinkContainer>
          {fall01 ? <SubTab01 /> : <></>}
        </Tab>
        <Tab>
          <div onClick={() => setFall02(!fall02)}>
            <Link to={`/content-02`}>
              {fall02 ? <BiChevronDown /> : <BiChevronRight />}
              Solidity
            </Link>
          </div>
          {fall02 ? (
            <SubTab>
              <div>
                <Link to={`/content-01/section-01`}>Section01</Link>
              </div>
              <div>
                <Link to={`/content-01/section-02`}>Section02</Link>
              </div>
            </SubTab>
          ) : (
            <></>
          )}
        </Tab>

        <Tab>
          <div onClick={() => setFall03(!fall03)}>
            <Link to={`/content-03`}>
              {fall03 ? <BiChevronDown /> : <BiChevronRight />}
              Content_03
            </Link>
          </div>
          {fall03 ? (
            <SubTab>
              <div>
                <Link to={`/content-01/section-01`}>Section01</Link>
              </div>
              <div>
                <Link to={`/content-01/section-02`}>Section02</Link>
              </div>
            </SubTab>
          ) : (
            <></>
          )}
        </Tab>
      </Tabs>

      <Routes>
        <Route path="/" element={<Content01 />} />
        <Route path="/content-01" element={<Content01 />} />
        <Route path="/content-01/section-01" element={<Section01 />} />
        <Route path="/content-01/section-02" element={<Section02 />} />
        <Route path="/content-01/section-01" element={<Section01 />} />
        <Route path="/content-01/section-02" element={<Section02 />} />
        <Route path="/content-01/section-01" element={<Section01 />} />
        <Route path="/content-01/section-02" element={<Section02 />} />

        <Route path="/content-02" element={<Content02 />} />
        <Route path="/content-03" element={<Content03 />} />
      </Routes>
    </Container>
  );
}

export default Home;
