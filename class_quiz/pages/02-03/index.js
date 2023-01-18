import {useState} from 'react'

export default function CheckNumber(){

  const [count, setCount] = useState('000000')

  function onClickCheckNumber(){
    const CheckNumber = Math.floor((Math.random(Number(document.getElementById("number").innerText))*900000+100000))
    document.getElementById("number").innerText = CheckNumber
  }

  function onClickCheckNumber2(){
    setCount(Math.floor(Math.random(Number(count))*900000+100000))
  }
  

  return(
    <>
      <div id="number">000000</div>
      <button onClick={onClickCheckNumber}>인증번호전송자바스크립트</button> 

      <div>{count}</div>
      <button onClick={onClickCheckNumber2}>인증번호전송리엑트</button> 
    </>
  )
}