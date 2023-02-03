import BoardWriterUI from "./BoardDetail.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router';
import { FETCH_BOARD } from "./BoardDetail.queries";


export default function BoardWriter (){

  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId }, // 가지고 오는 위치
    
  });

  const onClickMoveList = (e) =>{
    router.push(`/boards/[]/edit`)
  }

  return(
    <>
      <BoardWriterUI
        data={data}
        onClickMoveList={onClickMoveList}
      />
    </>
  )
}