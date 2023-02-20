import { MouseEvent } from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from 'next/router';
import { FETCH_BOARD , DELETE_BOARDS, UPDATE_BOARDS} from "./BoardDetail.queries";
import BoardDetailUI from './BoardDetail.presenter';
import { IQuery, IQueryFetchBoardArgs } from '../../../../commons/types/generated/types';

export default function BoardDetail (){

  const router = useRouter()

  const [deleteBoard] = useMutation(DELETE_BOARDS)
  const [updateBaord] = useMutation(UPDATE_BOARDS)

  const { data } = useQuery<
    Pick<IQuery , "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) }, // 가지고 오는 위치
  });

  const onClickMoveList = () =>{
    router.push(`/boards/[]/list`)
  }

  const onClickDeleteList = (e: MouseEvent<HTMLButtonElement>)=>{
    deleteBoard({
      variables : {
        boardId : e.currentTarget.id
      }
    })
    alert("내용이 삭제 되었습니다.")
    router.push(`http://localhost:3000/boards/[]/list`)
  }

  const onClickMovetoEdit = async () => {
    router.push(`/boards/${router.query.boardId}/edit`)
  }

  return(
    <>
      {BoardDetailUI({
        onClickMoveList : onClickMoveList, 
        onClickDeleteList : onClickDeleteList, 
        onClickMovetoEdit : onClickMovetoEdit,
        data : data
      })}
    </>
  )
}