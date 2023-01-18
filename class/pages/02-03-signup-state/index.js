import {useState} from 'react'

export default function SignUpStatePage(){
  const [email, setEmail] = useState("")  
  const [password, setPassword] = useState("")  
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")


  function onchangeEmail(event){
    console.log (event.target)  // 작동된 태그
    console.log (event.target.value)  // 작동된 태그에 입력된 값
    setEmail(event.target.value)
  
  }

  function onchangePassword(event){
    setPassword(event.target.value)
  }

  function onClickSignUp(e){
    console.log (email) // 포장확인하기 
    console.log (password) // 포장확인하기 

    // 검증하기 
    if(email.includes("@") === false ){
      //alert("이메일이 옳바르지 않습니다!! @가 없음")
      //document.getElementById("error").innerText = "이메일이 올바르지 않습니다. "
      setEmailError("이메일이 옳바르지 않습니다!! @가 없음")
      
    }
    if(password === ''){
      setPasswordError('비밀번호를 정확히 입력해 주세요.')
    }
    else{
      // 메시지 알림 이후, Backend 컴퓨터에 있는 API(함수) 요청하기 
      alert("회원가입을 축하합니다")
      
    }

      
  }

  return(
    <>
      이메일 : <input type="text" onChange={onchangeEmail}/>
      {/* <div id="error"></div> */}
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onchangePassword}/>
      <div>{passwordError}</div>
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  )
}