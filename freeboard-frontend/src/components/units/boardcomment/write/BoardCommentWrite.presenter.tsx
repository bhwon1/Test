import * as S from "../../boardcomment/write/BoardCommentWrite.styled";
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <>
      <S.Wrap>
        <S.Seciton2>
          <S.CommentWrap>
            <S.CommnetImg src="../freeboard_img/comment.png"></S.CommnetImg>
            <S.Comment>댓글</S.Comment>
          </S.CommentWrap>
          <S.CommentWriter
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          />
          <S.CommentPassword
            type="text"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <S.WriteStar allowHalf defaultValue={2.5} />
          <S.CommentTextAreaWrap>
            <S.CommnetBox
              onChange={props.onChangeContents}
              maxLength={100}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            ></S.CommnetBox>
            <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
            <S.CommentButton onClick={props.onClickCommentSubmit}>
              등록하기
            </S.CommentButton>
          </S.CommentTextAreaWrap>
        </S.Seciton2>
      </S.Wrap>
    </>
  );
}
