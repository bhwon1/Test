import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickPage: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew: () => void;
}
