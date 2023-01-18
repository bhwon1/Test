import {useState} from 'react'

export default function Count(){

  function onClickCountUp(){
    const count = Number(document.getElementById("count").innerText) +1
    document.getElementById("count").innerText = count 
  }
  
  function onClickCountDown(){
    const count = Number(document.getElementById("count").innerText) -1
    document.getElementById("count").innerText = count 
  }

  const [count , setCount] = useState(2)

  function onClickCountUp2(){
    setCount(count + 2)
  }
  
  function onClickCountDown2(){
    setCount(count - 2)
  }

  return(
    <>
      <div id="count">0</div>
      <button onClick={onClickCountUp}>카운트올리기</button>
      <button onClick={onClickCountDown}>카운트내리기</button>


      <div >{count}</div>
      <button onClick={onClickCountUp2}>카운트배수올리기</button>
      <button onClick={onClickCountDown2}>카운트배수내리기</button>
    </>
  )
}