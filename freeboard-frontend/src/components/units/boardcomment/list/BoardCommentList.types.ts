import { ChangeEvent } from 'react'
import { IQuery } from '../../../../commons/types/generated/types'


export interface IBoardCommentListUIProps {
  onClickDelete : (e: ChangeEvent<HTMLImageElement>) => void
  data? : Pick<IQuery , "fetchBoardComments">
}
