import { useQuery, gql, useMutation} from "@apollo/client"
import styled from "@emotion/styled"
import { Fragment } from "react"

const  FETCH_BOARDS = gql`
  query fetchBoards{
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`

const DELETE_BOARDS = gql`
  mutation deleteBoard($number:Int){
    deleteBoard(number:$number){
      message
    }
  }
`


const Row = styled.label`
  display: flex;
  font-size: 20px;
`

const Column = styled.div`
  width: 25%;
`

export default function StaticRoutedPage(){
  const [deleteBoard] = useMutation(DELETE_BOARDS)
  const {data} = useQuery(FETCH_BOARDS)
  

  console.log(data?.fetchBoards)

  const onClickDelete = async (e)=> {
    await deleteBoard({
      variables : {
        number : Number(e.target.id)
      },
      refetchQueries: [{query: FETCH_BOARDS}]
    })
  }

  return(
    <>
      {data?.fetchBoards.map((el, index) => (
        // <Fragment  key={index}>
          <Row key={el.number}>  {/* 중복되지 않는걸로 주어야함. */}
            <Column><input type="checkbox"/></Column>
            <Column>{el.number}</Column>
            <Column>{el.title}</Column>
            <Column>{el.contents}</Column>
            <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>
          </Row>
          // </Fragment>
        ))}
    </>
  )
}