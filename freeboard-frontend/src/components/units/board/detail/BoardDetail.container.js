import BoardWriterUI from "./BoardDetail.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from 'next/router';
import { FETCH_BOARD } from "./BoardDetail.queries";

const DELETE_BOARDS = gql`
  mutation deleteBoard($boardId : ID!){
    deleteBoard(boardId: $boardId)
  }
`


export default function BoardWriter (){

  const router = useRouter()

  const [deleteBoard] = useMutation(DELETE_BOARDS)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId }, // 가지고 오는 위치
    
  });

  const onClickMoveList = (e) =>{
    router.push(`/boards/[]/edit`)
  }

  const onClickDeleteList = (e)=>{
    deleteBoard({
      variables : {
        boardId : String(e.target.id)
      }
    })
    alert("내용이 삭제 되었습니다.")
    router.push(`http://localhost:3000/boards/[]/edit`)
  }

  return(
    <>
      <BoardWriterUI
        data={data}
        onClickMoveList={onClickMoveList}
        onClickDeleteList={onClickDeleteList}
      />
    </>
  )
}