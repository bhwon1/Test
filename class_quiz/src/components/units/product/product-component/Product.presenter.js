export default function ProductUI(props){

  return(
    <>
      <h1>상품{props.isEdit ? "등록" : "수정"} </h1>
      판매자 : <input type="text" onChange={props.onChangeSeller}/><br/>
      이름 : <input type="text" onChange={props.onChangeName}/><br/>
      디테일 : <input type="text" onChange={props.onChangeDetail}/><br/>
      가격 : <input type="text" onChange={props.onChangePrice}/><br/>
      <button onClick={props.isEdit ?  props.onClickSubmit : props.onClickUpdate }>{props.isEdit ? "등록하기" : "수정하기"} </button>
    </>
  )
}