import { useRouter } from 'next/router'
import {useState} from 'react'
import { useMutation , gql} from "@apollo/client"
import ProductWriterUI from './Product.Writer.presenter'

const CREATE_PRODUCT = gql`
  mutation createProduct($seller : String , $createProductInput: CreateProductInput!){
    createProduct(seller: $seller , createProductInput: $createProductInput){
      _id
      number
      message
    }
  }
`

export default function ProductWriter (){

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
      <ProductWriterUI
        onChangeSeller={onChangeSeller}
        onChangeProduct={onChangeProduct}
        onChangeContents={onChangeContents}
        onChangePrice={onChangePrice}
        onClickSubmit={onClickSubmit}
      />
    </>
  )
}