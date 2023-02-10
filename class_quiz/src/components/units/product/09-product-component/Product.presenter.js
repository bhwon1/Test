export default function ProductUI(props){

  return(
    <>
      <h1>상품{props.isEdit ? "수정" : "등록"} </h1>
      판매자 : <input type="text" onChange={props.onChangeSeller} defaultValue={props.data?.fetchProduct.seller}/><br/>
      이름 : <input type="text" onChange={props.onChangeName} defaultValue={props.data?.fetchProduct.name}/><br/>
      디테일 : <input type="text" onChange={props.onChangeDetail} defaultValue={props.data?.fetchProduct.detail}/><br/>
      가격 : <input type="text" onChange={props.onChangePrice} defaultValue={props.data?.fetchProduct.price}/><br/>
      <button onClick={props.isEdit ?  props.onClickUpdate : props.onClickSubmit}>{props.isEdit ? "수정하기" : "등록하기"} </button>
    </>
  )
}