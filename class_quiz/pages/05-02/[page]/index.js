import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID){
    fetchProduct(productId:$productId ){
      _id
      seller
      name
      detail
      price
    }
  }
`


export default function RoutedPage(){
  const router = useRouter()
  console.log(router)
  console.log(router.query._id)
  console.log(router.query.seller)

    const {data} = useQuery(FETCH_PRODUCT,{
      variables : {
        productId : String(router.query._id)
      }
    })

    console.log("========================")
    console.log(data)
    console.log("========================")

  return(
    <>
    <div>{router.query.seller}페이지로 이동되었습니다.</div>
    <div>판매자 : {data ? data.fetchProduct.seller: "loading..."}</div> 
    <div>상품명 :  {data && data.fetchProduct.name}</div> 
    <div>상품내용 : {data && data.fetchProduct.detail}</div> 
    <div>상품가격 : {data && data.fetchProduct.price}</div>
    </>
  )
}