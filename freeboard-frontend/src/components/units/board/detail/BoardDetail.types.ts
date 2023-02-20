import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from 'react'

export interface IBoardDetailUIProps {
  onClickMoveList : () => void
  onClickDeleteList : (e: MouseEvent<HTMLButtonElement>) => void
  onClickMovetoEdit : () => void
  data? : Pick<IQuery , "fetchBoard">
}