import type { IQuery } from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  onClickMoveList: () => void;
  onClickDeleteList: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickMovetoEdit: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}
