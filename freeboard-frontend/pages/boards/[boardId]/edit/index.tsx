import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") {
    alert("올바르지 않은 게시글 아이디입니다.");
    void router.push("/");
    return <></>;
  }

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  return (
    <>{BoardWrite({ isEdit: false, data: data })}</>
    // <BoardWrite isEdit={false} data={data}/>
  );
}
