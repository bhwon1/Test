import type { MouseEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARDS } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARDS);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) }, // 가지고 오는 위치
    }
  );

  const onClickMoveList = () => {
    void router.push(`/boards/[]/list`);
  };

  const onClickDeleteList = async (e: MouseEvent<HTMLButtonElement>) => {
    await deleteBoard({
      variables: {
        boardId: e.currentTarget.id,
      },
    });
    alert("내용이 삭제 되었습니다.");
    void router.push(`http://localhost:3000/boards/[]/list`);
  };

  const onClickMovetoEdit = () => {
    if (typeof router.query.boardId !== "string") {
      alert("올바르지 않은 게시글 아이디입니다.");
      return;
    }

    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <>
      {BoardDetailUI({
        onClickMoveList,
        onClickDeleteList,
        onClickMovetoEdit,
        data,
      })}
    </>
  );
}
