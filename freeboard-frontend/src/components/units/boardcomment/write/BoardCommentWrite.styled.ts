import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrap = styled.div`
  width: 100%;
  width: 1200px;
  height: auto;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Seciton2 = styled.div`
  width: 100%;
`;

export const CommentWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CommnetImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const Comment = styled.h2`
  font-size: 18px;
  font-weight: 700;
  padding: 0 0 0 10px;
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  padding: 0 10px;
  margin: 20px 20px 20px 0;
  ::placeholder {
    font-size: 16px;
  }
`;
export const CommentPassword = styled.input`
  width: 180px;
  height: 52px;
  padding: 0 10px;
  margin: 20px 20px 20px 0;
  ::placeholder {
    font-size: 16px;
  }
`;

export const StarBlack = styled.img`
  width: 20px;
  height: 20px;
`;
export const CommentTextAreaWrap = styled.div`
  width: 100%;
  position: relative;
`;

export const CommnetBox = styled.textarea`
  width: 100%;
  height: 160px;
  border: 1px solid #bdbdbd;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
  position: absolute;
  bottom: 8px;
  left: 10px;
`;

export const CommentButton = styled.button`
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 16px;
  margin: 0;
  height: 52px;
  position: absolute;
  bottom: 3px;
  right: 0;
  box-sizing: border-box;
  cursor: pointer;
`;

export const WriteStar = styled(Rate)``;
