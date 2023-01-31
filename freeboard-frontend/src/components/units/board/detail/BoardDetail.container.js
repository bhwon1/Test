import BoardWriterUI from "./BoardDetail.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router';
import { FETCH_BOARD } from "./BoardDetail.queries";


export default function BoardWriter (){

  const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.page }, // 가지고 오는 위치
    
  });

  return(
    <>
      <BoardWriterUI
        data={data}
      />
    </>
  )
}