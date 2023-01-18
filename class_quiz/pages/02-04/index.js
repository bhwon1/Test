import {useState} from 'react'
import {IdCheck, PwCheck, Pw2Check} from '../../styles/emotion-02-04'

export default function SignIn(){
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")
  const [pw2, setPw2] = useState("")

  // 에러 확인 메시지창
  const [idError,setIdError] = useState("")
  const [pwError,setPwError] = useState("")
  const [pw2Error,setPw2Error] = useState("")

  function onChangeId (e){
    setId(e.target.value)
  }

  function onChangePw (e){
    setPw(e.target.value)
  }
  function onChangePw2 (e){
    setPw2(e.target.value)
  }

  function onClickSignIn(e){
    console.log(id);
    console.log(pw);
    console.log(pw2);

    if(id.includes("@") === false && id === ""){
      setIdError("이메일이 올바르지 않습니다")
      return false;
    }
    else if(pw === ""){
      setPwError("비밀번호를 작성해주세요")
      return false;
    }
    else if(pw !== pw2){
      setPw2Error("비밀번호를 확인해주세요")
      return false;
    }
    else {
      alert("가입을 축하드립니다")
    }


  }

  return(
    <>
    <div>회원가입</div>
    이메일: <input onChange={onChangeId} type='text'/><br/>
    <IdCheck>{idError}</IdCheck>
    비밀번호: <input onChange={onChangePw} type='password'/><br/>
    <PwCheck>{pwError}</PwCheck>
    비밀번호 확인: <input onChange={onChangePw2} type='password'/><br/>
    <Pw2Check>{pw2Error}</Pw2Check>
    <button onClick={onClickSignIn}>가입하기</button>
    </>
  )
}