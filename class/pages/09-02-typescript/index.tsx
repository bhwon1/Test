export default function Qqq (){

  // 타입추론
  let aaa ="안녕하세요 "
  aaa = 3

  // 타입명시 
  let bbb : String = "반갑습니다."

  // 문자타입(선언과 할당 분리)
  let ccc : string
  ccc = "반가워요!!! "
  ccc= 3

  // 숫자타입
  let ddd: number = 10
  ddd = "철수"

  // 불린타입 
  let eee : boolean = true
  eee = false
  eee = "false"  // 가장 주의 해야할점 "문자열" 내용이 있으니까 true이다. So, true 로 작동함.

  // 배열타임 
  let fff : number[] = [1,2,3,4,5,"안녕하세요"]
  let ggg : string[] = ["철수", "영희", "훈이" , 5 ,6]
  let hhh = ["철수", "영희", "훈이", 10] // 타입을 추론해서 어떤 타입 사용하는지 알아보기 !!
  let hhhh : (string | number)[] = ["철수", "영희", "훈이", 10] 

  // 객체타입 
  interface IProfile {
    name : string
    age : number | string 
    school : string
  }

  const profile: IProfile = {
    name : "철수",
    age : 8, 
    school : "다람취 초등학교"
  }
  profile.age = "8살"

  // 함수타입 => 어디서든 호출 가능하므로, 타입추론 할수 없음 (반드시, 타입명시 필요)
  const add = (number1: number, number2:number, unit:string) : string => { // 타입 추론이 안되는 이유 : 어떤 함수의 값을 초기값으로 해야하는지 모르기 떄문에, So 반드시 명시가 필요함
    return number1 + number2 + unit //return것은 원래값을 지우고 내용을 넣어준다.
  }
  const result = add(1000,2000, "원") // <= const result = 3000원   이라고 들어감 // 결과의 리턴 타입도 예측가능!!! 

  // any타입 
  let qqq : any = "철수"  // 자바스크립트와 동일! 
  qqq = 123
  qqq = true
  qqq = "영희"




  return <div>123</div> // JSX => Javascript XML (HTML 아니고 자바스크립트이다.)  eXtensible Markup language <> 꺽세를 마크업 랭퀴지라고 함 ,
                        // 즉 나만의 div 라고 내가 만들어낸것이다. (개발자들이 div로 만들어서 사용하는사람들이 html 이라고 생각할수 있게 만든것이다.) html 아니라 xml 코드이다.

}