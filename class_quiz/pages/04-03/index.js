import {gql, useMutation} from '@apollo/client'

const CREATE_PRODUCT = gql`
mutation createProduct($seller: String, $createProductInput: CreateProductInput!){  #변수의 타입 적는법 
  createProduct(seller:$seller, createProductInput: $createProductInput){          #실제 우리가 전달할 내용
    _id
    number
    message
  }
}
`

export default function CreateProduct(){
  const [나의함수] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        seller: "워니",
        createProductInput :{
          name : "나는",
          detail : "정말좋은마우스",
          price : 3000
        }
      }
    })
    alert(result.data.createProduct.message)
  }

  return(
    <>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  )

}