import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"


const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID){
    fetchProduct(productId:$productId){
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`

export default function ProductId (){
  const router = useRouter()

  //1. query로 가져오기 
  const {data} = useQuery(FETCH_PRODUCT,{
    variables : {
      productId : router.query.productId
    }
  })
  console.log(data?.fetchProduct)

  // edit 로 이동
  const onClickMoveToEdit = () =>{
    router.push(`/09/product/${data.fetchProduct._id}/edit`)
  }


  return(
    <>
      <h1>등록된 상품</h1>
      <div>판매자 : {data?.fetchProduct?.seller}</div>
      <div>이름 : {data?.fetchProduct?.name} </div>
      <div>디테일 : {data?.fetchProduct?.detail}</div>
      <div>가격 : {data?.fetchProduct?.price}</div>
      <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
    </>
  )
}