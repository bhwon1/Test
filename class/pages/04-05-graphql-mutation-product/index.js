import {gql, useMutation} from "@apollo/client"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){  #변수의 타입 적는법 
    createProduct(seller:$seller, createProductInput: $createProductInput){          #실제 우리가 전달할 내용
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage(){
  const [나의함수] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    // const writer = "qqq"  // 이 함수에 있으면 현재 스코프
    const result = await 나의함수({
      variables: { // variables 가 $ 가 되는것 이다(역할을 해줌).
        seller: "워니",
        createProductInput :{
          name : "마우스",
          detail : "정말좋은마우스",
          price : 3000
        }
      }
    })
    alert(result.data.createProduct.message)
  }



  return(
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기)</button>
    </>
  )

}