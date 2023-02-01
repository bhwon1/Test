//백핸드에서 가져온 데이터라고 가정 (컴포넌트 위에 만든이유 : 컴포넌트 리랜더링 되도 다시 안만들어짐)

const FRUITS = [
  { number: 1, title : "레드향"},
  { number: 2, title : "샤인머스켓"},
  { number: 3, title : "산청딸기"},
  { number: 4, title : "사과"},
  { number: 5, title : "한라봉"},
  { number: 6, title : "천외향"},
  { number: 7, title : "과일세트"},
  { number: 8, title : "포도"},
  { number: 9, title : "청포도"},
  { number: 10, title : "파인애플"},
]

export default function MapFruitsPage(){
  
  //1. 가장 기본 예제 
  // const aaa = [<div>1. 레드향</div>, <div>2. 샤인머스켓</div>,<div>3. 산청딸기</div>]
  
  //2. 실무 백앤드 데이터 예제 (aaa랑 결과 똑같음)
  const bbb = [ { number: 1, title : "레드향"},{ number: 2, title : "샤인머스켓"}, { number: 3, title : "산청딸기"}].map((el)=><div>{el.number} {el.title}</div>)


  // 3. 
  const bbbccc = FRUITS.map( (el) => {return <div>{el.number} {el.title}</div>}) // 가장 기본 양식 형식
  const ccc = FRUITS.map( el => <div>{el.number} {el.title}</div>)
  return(
    <>
      {bbb}
      <br/>
      {bbbccc}
      <br/>
      {FRUITS.map( el => <div>{el.number} {el.title}</div>)}
    </>
  )
}