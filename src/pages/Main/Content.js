import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <CWrapper>
      <HeadImg>
        <HeadImage src="./images/sample.jpeg"></HeadImage>
      </HeadImg>
      <ContentTitleWrapper>
        <CTitle>
          <TitleText>[KOK]프로젝트 진짜 쉽다! 이거 뭐야!</TitleText>
        </CTitle>
        <CSubTitle>사실 뭐가 뭔지 모르겠어요</CSubTitle>
        <CSubInfo>2023년 2월 5일 / 13개의 댓글</CSubInfo>
      </ContentTitleWrapper>
      <UserOrLike>
        <User>
          <UserImg src="./images/sample.jpeg" />
          <UserId>By 김건우</UserId>
        </User>
        <Like>좋아요</Like>
      </UserOrLike>
    </CWrapper>
  );
};

export default Content;

const CWrapper = styled.div`
  width: 20rem;
  background: gray;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const HeadImg = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  /* position: relative; */
`;

const HeadImage = styled.img`
  /* position: absolute; */
  /* top: 0px;
  left: 0px; */
  width: 100%; //나중에 변경
  height: 100%;
  display: block;
  object-fit: cover;
`;

const ContentTitleWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const CTitle = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const TitleText = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CSubTitle = styled.div`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CSubInfo = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
`;

const UserOrLike = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
`;

const User = styled.div`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  margin-right: 0.5rem;
`;

const UserId = styled.span``;

const Like = styled.div`
  display: flex;
  align-items: center;
`;
