import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./Product.mutation"
import ProductUI from "./Product.presenter"



export default function Product(props){
 
  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const router = useRouter()

  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)

  const onClickSubmit = async (e) => {
    try{
      // 1. 내용을 저장 및 보내기
      const result = await createProduct({
        variables : {
          seller,
          createProductInput : {
            name,
            detail,
            price : Number(price),
          },
        }
      })
      console.log(result)
      alert('등록')
      alert(result.data.createProduct._id)

      // 2. 페이지 이동 
      router.push(`/08/product/${result.data.createProduct._id}`)


    }
    catch(error){
      alert(error)
    }
    
    if(price !== Number("")){
      alert("가격에 숫자를 입력해주세요")
    }
  }

  const onClickUpdate = async (e) => {

      const result = await updateProduct({
        variables : {
          productId : String(router.query.productId),
          updateProductInput : {
            name,
            detail,
            price : Number(price),
          }
        }
      })

      console.log(result)
      alert('수정')
      alert(result.data.updateProduct.message)
      alert(router.query.productId)

      // 2. 페이지 이동 
      router.push(`/08/product/${router.query.productId}`)
    
  }

  const onChangeSeller =(e)=>{
    setSeller(e.target.value)
  }
  const onChangeName =(e)=>{
    setName(e.target.value)
  }
  
  const onChangeDetail =(e)=>{
    setDetail(e.target.value)
  }
  
  const onChangePrice =(e)=>{
    setPrice(e.target.value)
    
  }

  
  return(
    <>
        <ProductUI 
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        isEdit={props.isEdit}
      />
    </>
  )
}