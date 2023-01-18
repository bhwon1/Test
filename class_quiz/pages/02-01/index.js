import {useState} from 'react'

export default function Hello(){

  const [hello, setHello] = useState("안녕하세요2")
  
  function onClickHello(){
    const text = (document.getElementById("hello").innerText)
    document.getElementById("hello").innerText = "반갑습니다"

  }

  function onClickHello2(){
    setHello("반갑습니다2")
  }

  return(
    <>
      <button id="hello" onClick={onClickHello}>안녕하세요</button>
      <button id="hello2" onClick={onClickHello2}>{hello}</button>

    </>
  )
}