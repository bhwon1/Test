import {useState} from 'react'
import { useMutation, gql } from "@apollo/client"
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
  mutation createProduct($seller : String , $createProductInput: CreateProductInput!){
    createProduct(seller: $seller , createProductInput: $createProductInput){
      _id
      number
      message
    }
  }
`


export default function RouterPage(){
  const router = useRouter()

  const [createProduct] = useMutation(CREATE_PRODUCT)

  const [seller, setSeller] =useState("")
  const [product, setProduct] =useState("")
  const [contents, setContents] =useState("")
  const [price, setPrice] =useState("")

  const onClickSubmit = async ()=>{
    try{
      const result = await createProduct({
        variables : {
          seller : seller,
          createProductInput : {
            name: product,
            detail : contents,
            price : Number(price)
          }
        }
      })
      alert(result.data.createProduct.message)  
      alert(result.data.createProduct._id)
      alert(result)

      router.push(`/05/${result.data.createProduct._id}`)

    }catch(error){
      alert(error.message)
    }
    
  }

  const onChangeSeller =(e)=>{
    setSeller(e.target.value)
  }
  const onChangeProduct =(e)=>{
    setProduct(e.target.value)
  }
  const onChangeContents =(e)=>{
    setContents(e.target.value)
  }
  const onChangePrice =(e)=>{
    setPrice(e.target.value)
  }

  return(
    <>
      판매자 : <input type="text" onChange={onChangeSeller}/><br/>
      상품명 : <input type="text" onChange={onChangeProduct}/><br/>
      상품내용 : <input type="text" onChange={onChangeContents}/><br/>
      상품가격 : <input type="text" onChange={onChangePrice}/><br/>
      <button onClick={onClickSubmit}>상품등록 요청</button>
    </>
  )
}