import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  onClickDelete: (e: MouseEvent<HTMLImageElement>) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
}
