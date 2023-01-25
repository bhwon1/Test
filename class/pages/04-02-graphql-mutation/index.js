import {gql, useMutation} from "@apollo/client"

const CREATE_BOARD = gql`
  mutation{
    createBoard(writer:"철수", title:"제목입니다!", contents:"내용입니다"){
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage(){
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () =>{
    const result = await 나의함수()
    alert(result.data.createBoard.message)
  }

  return(
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)</button>
    </>
  )

}