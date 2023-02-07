import { useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router"

const  FETCH_BOARD = gql`
  query fetchBoard($number:Int){
    fetchBoard(number:$number){
      writer
      title
      contents
    }
  }
`


export default function StaticRoutedPage(){
  const router = useRouter()
  console.log(router)
  console.log(router.query.number)

  const {data} = useQuery(FETCH_BOARD,{
    variables : {
      number: Number(router.query.number)
    }
  })
  console.log("========================")
  console.log(data)
  console.log("========================")

  const onClickMoveToEdit = () => {
    router.push(`/08-05-boards/${router.query.number}/edit`)
  }

  return(
    <>
    <div>{router.query.number}번 페이지 이동이 완료되었습니다. </div>
    <div>작성자: {data ? data.fetchBoard.writer : "로딩중입니다."}</div> {/* 3항연산자 */}
    <div>제목: {data && data.fetchBoard.title}</div> {/* 조건부 연산자 */}
    <div>내용: {data?.fetchBoard.contents}</div>  {/* 옵셔널 체이닝 */}
    <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
    </>
  )
}