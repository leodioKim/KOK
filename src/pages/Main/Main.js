import React from "react";
import styled from "styled-components";
import Content from "./Content";

const Main = () => {
  return (
    <MainWrapper>
      <TopWrapper>
        <LeftTopWrapper>
          <LikeOrView>
            <MostLike>최다 좋아요</MostLike>
            <MostView>최다 조회수</MostView>
          </LikeOrView>
          <Category>카테고리</Category>
        </LeftTopWrapper>
        <RighgtDot>점</RighgtDot>
      </TopWrapper>
      <ContentWrapper>
        <ContentDiv>
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </ContentDiv>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  /* @media screen {
    max-width: 1919px;
  }
  width: 1376px; */
`;

const TopWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LeftTopWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const LikeOrView = styled.div`
  display: flex;
  position: relative;
  width: 14rem;
`;

const MostLike = styled.div``;

const MostView = styled.div``;

const Category = styled.div``;

const RighgtDot = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
