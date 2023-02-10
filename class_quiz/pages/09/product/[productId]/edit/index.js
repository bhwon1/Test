import Product from "@/src/components/units/product/09-product-component/Product.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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

export default function ProductEditPage(){
  const router=useRouter()

  const {data} = useQuery(FETCH_PRODUCT,{
    variables : {
      productId : router.query.productId
    }
  })

  return(
    <>
      <Product isEdit={true} data={data}/>
    </>
  )
}