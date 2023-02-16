export default function TypescriptUtilityPage(){
  interface IProfile {
    name : string
    age : number
    school : string
    hoddy? : string
  }

  // 1. Pick 타입 (기존에 있는것을 새로 조작)
  type aaa = Pick<IProfile, "name" | "age">

  // 2. Omit 타입 (기존에 있는것을 새로 제거)
  type bbb = Omit<IProfile, "school">

  // 3. Partial(부분) 타입  
  type ccc = Partial<IProfile>

  // 4. Required(필수) 타입 
  type ddd = Required<IProfile>

  // 5. Record 타입
  type eee = "철수" | "영희" | "훈이" // Unnion 타입
  let child : eee
  child = "영희"

  type fff = Record<eee, IProfile>


  // ========== (type vs interface) 차이 : 선언병합 =============
  interface IProfile {  // 이미 IProfile 있지만 또 만들수 있다.
    candy : number
  }

  let profile: Partial<IProfile> ={}
  profile.candy = 10
}