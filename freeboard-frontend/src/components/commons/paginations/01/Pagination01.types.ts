import type { MouseEvent } from "react";
import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IPageProps {
  isActive?: boolean;
}

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPagination01UIProps {
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickMovePage: (e: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  lastPage: number;
  activedPage: number;
}
