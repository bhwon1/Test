import {gql, useMutation} from "@apollo/client"
import { useRouter } from "next/router"
import {useState} from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String , $title: String , $contents:String){  #변수의 타입 적는법 
    createBoard(writer:$writer, title: $title, contents: $contents){          #실제 우리가 전달할 내용
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage(){
  const router = useRouter()

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    try{
      const result = await 나의함수({
        variables: {
          writer: writer,
          title: title,
          contents: contents
        }
      })
      console.log(result)
      alert(result.data.createBoard.message)
      console.log(result.data.createBoard.number)
      // router.push("/05-10-dynamic-routed-board-mutaion/" + result.data.createBoard.number)  // 매번 더학 귀찮음
      router.push(`/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`) // 위에 더하기와 같음 (템플릿 리터럴)
    
    } catch(error){
      // try에 있는 내용을 시도하다가 실패하면, 아랫주 모두 무시!!! 하고 catch가 실행됨 
      alert(error.message)

    }


  }

  const onChangeWriter =(e)=>{
    setWriter(e.target.value)
  }
  const onChangeTitle =(e)=>{
    setTitle( e.target.value)
  }
  const onChangeContents =(e)=>{
    setContents (e.target.value)
  }

  return(
    <>
      작성자 : <input type="text" onChange={onChangeWriter}/><br />
      제목 : <input type="text" onChange={onChangeTitle} /><br />
      내용 : <input type="text" onChange={onChangeContents}/><br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  )

}