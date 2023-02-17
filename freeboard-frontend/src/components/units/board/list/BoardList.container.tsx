import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FECTH_BOARDS } from "./BoardList.queries"
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"
import { MouseEvent } from 'react'

export default function BoardList (){

  const router = useRouter()

  const {data} = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FECTH_BOARDS)

  const onClickPage = (e: MouseEvent<HTMLDivElement> )=>{
    router.push(`/boards/${e.target.id}`)
  }  

  const onClickMoveToBoardNew =()=>{
    router.push(`/boards/new`)
  }

  return(
    <>
      {BoardListUI({
        data : data,
        onClickPage : onClickPage,
        onClickMoveToBoardNew : onClickMoveToBoardNew
      })}
    </>
  )
}