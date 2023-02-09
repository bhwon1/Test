import BoardWriterUI from "./BoardDetail.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from 'next/router';
import { FETCH_BOARD , DELETE_BOARDS, UPDATE_BOARDS} from "./BoardDetail.queries";




export default function BoardWriter (){

  const router = useRouter()

  const [deleteBoard] = useMutation(DELETE_BOARDS)
  const [updateBaord] = useMutation(UPDATE_BOARDS)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId }, // 가지고 오는 위치
  });

  const onClickMoveList = (e) =>{
    router.push(`/boards/[]/list`)
  }

  const onClickDeleteList = (e)=>{
    deleteBoard({
      variables : {
        boardId : String(e.target.id)
      }
    })
    alert("내용이 삭제 되었습니다.")
    router.push(`http://localhost:3000/boards/[]/list`)
  }

  const onClickMovetoEdit = (e) => {
    /* const result = updateBaord({
      variables : {
        updateBoardInput : {
          title : (router.query.title),
          contents : (router.query.contents),
        } ,
        password : (router.query.password),
        boardId : String(router.query.boardId),
      }
    }) */
    router.push(`/boards/${router.query.boardId}/edit`)
  }

  return(
    <>
      <BoardWriterUI
        data={data}
        onClickMoveList={onClickMoveList}
        onClickDeleteList={onClickDeleteList}
        onClickMovetoEdit={onClickMovetoEdit}
      />
    </>
  )
}