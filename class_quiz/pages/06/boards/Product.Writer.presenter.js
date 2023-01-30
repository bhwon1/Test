export default function ProductWriterUI (props){

  return(
    <>
      판매자 : <input type="text" onChange={props.onChangeSeller}/><br/>
      상품명 : <input type="text" onChange={props.onChangeProduct}/><br/>
      상품내용 : <input type="text" onChange={props.onChangeContents}/><br/>
      상품가격 : <input type="text" onChange={props.onChangePrice}/><br/>
      <button onClick={props.onClickSubmit}>상품등록 요청</button>
    </>
  )
}