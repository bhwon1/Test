import type { MouseEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARDS,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import type {
  IMutation,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARDS);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [disLikeCount] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) }, // 가지고 오는 위치
    }
  );

  const onClickMoveList = () => {
    void router.push(`/boards`);
  };

  const onClickDeleteList = async (e: MouseEvent<HTMLButtonElement>) => {
    await deleteBoard({
      variables: {
        boardId: e.currentTarget.id,
      },
    });
    alert("내용이 삭제 되었습니다.");
    void router.push(`/boards`);
  };

  const onClickMovetoEdit = () => {
    if (typeof router.query.boardId !== "string") {
      alert("올바르지 않은 게시글 아이디입니다.");
      return;
    }

    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDislike = async () => {
    await disLikeCount({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  return (
    <>
      {BoardDetailUI({
        onClickMoveList,
        onClickDeleteList,
        onClickMovetoEdit,
        data,
        onClickLike,
        onClickDislike,
      })}
    </>
  );
}
