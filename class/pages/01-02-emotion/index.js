import {Email, EmailInput} from '../../styles/emotion'

export default function EmotionPage(){

  //  자바스크립트 사용장소
  
  return (
    <>
      <div>
        <Email>이메일</Email>
        <EmailInput type="text"/>
        <button>클릭하시옵소서</button>
        <img src='/vercel.svg'/>
      </div>
    </>
  )
}