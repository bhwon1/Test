import { getDate } from "../../../../../src/components/commons/utils/utils";
import * as S from "../../boardcomment/list/BoardCommnetList.styled";
import type { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrap key={el._id}>
          <S.Seciton2>
            <S.CommentBox>
              <S.CommentProfile src="../freeboard_img/profile.png" />
              <S.NameBox>
                <S.CommentUserBox>
                  <S.CommentUser>{el.writer}</S.CommentUser>
                  <S.ListStar disabled defaultValue={2} />
                </S.CommentUserBox>
                <S.CommentContents>{el.contents}</S.CommentContents>
                <S.CommentDate>{getDate(el.createdAt)} 날짜</S.CommentDate>
              </S.NameBox>
              <S.CommentDeleteRemote>
                <S.Remove src="../freeboard_img/remove.png" />
                <S.Delete
                  id={el._id}
                  src="../freeboard_img/delete.png"
                  onClick={props.onClickDelete}
                />
              </S.CommentDeleteRemote>
            </S.CommentBox>
          </S.Seciton2>
        </S.Wrap>
      ))}
    </>
  );
}
