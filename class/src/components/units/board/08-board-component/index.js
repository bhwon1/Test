export default function BoardComponent(props){

  return(
    <>
      <h1>{props.isEdit ? "수정111" : "등록222"}페이지</h1>
      제목 : <input type='text'/><br/>
      내용 : <input type='text'/><br/>
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </>
  )
}