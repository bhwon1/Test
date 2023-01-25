import {gql, useMutation} from "@apollo/client"

const CREATE_BOARD = gql`
  mutation createBoard($writer: String , $title: String , $contents:String){  
    createBoard(writer:$writer, title: $title, contents: $contents){        
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage(){
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: { // variables 가 $ 가 되는것 이다(역할을 해줌).
        writer: "훈이",
        title: "안녕하십니까",
        contents: "반갑스무니다"
      }
    })
    alert(result.data.createBoard.message)
  }

  return(
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)</button>
    </>
  )

}