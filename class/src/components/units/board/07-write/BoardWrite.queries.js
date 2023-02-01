import {gql} from "@apollo/client"

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String , $title: String , $contents:String){  #변수의 타입 적는법 
    createBoard(writer:$writer, title: $title, contents: $contents){          #실제 우리가 전달할 내용
      _id
      number
      message
    }
  }
`