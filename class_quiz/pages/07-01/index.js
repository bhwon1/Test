import { useState } from 'react'
import * as S from './Checkbox.styled'

export default function ChechBoxPage(){

  const dataList = [
    { number : 1 , contents: "1월달 시스템 점검 안내입니다." , date : "2020.01.19"},
    { number : 2 , contents: "2월달 시스템 점검 안내입니다." , date : "2020.02.19"},
    { number : 3 , contents: "3월달 시스템 점검 안내입니다." , date : "2020.03.19"},
    { number : 4 , contents: "4월달 시스템 점검 안내입니다." , date : "2020.04.19"},
    { number : 5 , contents: "5월달 시스템 점검 안내입니다." , date : "2020.05.19"},
    { number : 6 , contents: "6월달 시스템 점검 안내입니다." , date : "2020.06.19"},
  ]

  const [check, setCheck] = useState([])
  console.log(check)
  
  const onClickAll =()=>{
    if(check.length !== dataList.length){
      setCheck(dataList);
    }
    else {
      setCheck([]);
    }
  };

  const onClickItem =(el)=>{
    if(check.every( (cur)=> cur.number !== el.number)){
      setCheck([...check, el])
    }
    else {
      const result = check.filter((cur) => cur.number !== el.number);
      setCheck(result);
    }
  }

  const isChecked = (el) => {
    return check.some((cur) => cur.number === el.number);
  };

  return(
    <>
      <S.Row>
        <S.Column1>
          <S.CheckBotton 
          type='checkbox' 
          onChange={onClickAll}
          checked={check.length === dataList.length}
          />
        </S.Column1>
        <S.Column2>번호</S.Column2>
        <S.Column3>제목</S.Column3>
        <S.Column4>작성일</S.Column4>
      </S.Row>
      {dataList.map( (el,index) => 
        <S.Row2 key={index}>
          <S.Column1>
            <S.CheckBotton 
            type='checkbox' 
            onChange={() => onClickItem(el)}
            checked={isChecked(el)}
            />
          </S.Column1>
          <S.Column2>{el.number}</S.Column2>
          <S.Column5>{el.contents}</S.Column5>
          <S.Column4>{el.date}</S.Column4>
        </S.Row2>
      )}

    </>
  )
}