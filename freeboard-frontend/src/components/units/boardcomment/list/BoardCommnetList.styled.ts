import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrap = styled.div`
  width: 100%;
  width: 1200px;
  height: auto;
  margin: 50px auto;
  box-sizing: border-box;
`;

export const Seciton2 = styled.div`
  width: 100%;
`;

export const CommentBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 20px 0;
`;
export const CommentProfile = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;
`;
export const NameBox = styled.div`
  width: 50%;
`;
export const CommentUserBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export const CommentUser = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin: 0 10px 0 0;
  margin: 0;
  padding: 0;
`;
export const ProfileStarBlack = styled.img`
  :nth-child(2) {
    padding: 0 0 0 10px;
  }
`;
export const CommentDeleteRemote = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const Remove = styled.img`
  margin: 0 20px 0 0;
  cursor: pointer;
`;
export const Delete = styled.img`
  width: 16px;
  cursor: pointer;
`;

export const CommentContents = styled.div``;

export const CommentDate = styled.h2`
  font-size: 12px;
  font-weight: 400;
  flex-direction: column;
  margin: 20px 0 0 0;
  color: #bdbdbd;
`;

export const ListStar = styled(Rate)`
  margin: 0 0 0 20px;
`;
