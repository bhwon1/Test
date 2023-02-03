import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardListUI from "./BoaedList.presenter"
import { FECTH_BOARDS } from "./BoardList.queries"

export default function BoardList (props){

  const router = useRouter()

  const {data} = useQuery(FECTH_BOARDS)

  const onClickPage = (e)=>{
    try{
    }
    catch(error){
      alert(error.message)
    }
    router.push(`/boards/${e.target.id}`)
  }  

  const onClickMoveToBoardNew =()=>{
    router.push(`/boards/new`)
  }

  return(
    <>
      <BoardListUI
        data={data}
        onClickPage={onClickPage}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
      />
    
    </>
  )
}