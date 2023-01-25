import {gql, useMutation} from "@apollo/client"
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
  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    // const writer = "qqq"  // 이 함수에 있으면 현재 스코프
    const result = await 나의함수({
      variables: { // variables 가 $ 가 되는것 이다(역할을 해줌).
        writer: writer,
        title: title,
        contents: contents
      }
    })
    alert(result.data.createBoard.message)
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
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)</button>
    </>
  )

}