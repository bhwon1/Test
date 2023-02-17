import { IQuery } from "../../../../commons/types/generated/types"
import { ChangeEvent } from 'react'

export interface IBoardDetailUIProps {
  onClickMoveList : () => void
  onClickDeleteList : (e: ChangeEvent<HTMLInputElement>) => void
  onClickMovetoEdit : () => void
  data? : Pick<IQuery , "fetchBoard">
}