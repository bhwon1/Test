import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FECTH_BOARDS, FECTH_BOARDS_COUNT } from "./BoardList.queries";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FECTH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FECTH_BOARDS_COUNT);

  const onClickPage = (e: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${e.currentTarget.id}`);
  };

  const onClickMoveToBoardNew = () => {
    void router.push(`/boards/new`);
  };

  return (
    <>
      {BoardListUI({
        data,
        onClickPage,
        onClickMoveToBoardNew,
        refetch,
        count: dataBoardsCount?.fetchBoardsCount,
      })}
    </>
  );
}
