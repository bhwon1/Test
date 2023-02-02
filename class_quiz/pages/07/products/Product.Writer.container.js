import { gql, useMutation, useQuery} from "@apollo/client"
import styled from "@emotion/styled"


// 보너스 1)
const classmates = [
  {name : "철수" , age : 10 , school : "토끼초" },
  {name : "매트" , age : 10 , school : "토끼초" },
  {name : "패트" , age : 10 , school : "토끼초" },
  {name : "영희" , age : 13 , school : "다람쥐초" },
  {name : "훈이" , age : 11 , school : "호랑이초" }
]

// 보너스 2)

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

const FETCH_PRODUCT = gql`
  query fetchProducts{
    fetchProducts{
      _id
      seller
      name
      detail
      price
    }
  }
`
const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId : ID){
    deleteProduct(productId: $productId){
      message
    }
  }
`

const Row = styled.label`
  display: flex;
  font-size: 20px;
`
const Column = styled.div`
  width: 20%;
`

export default function ProductWriter (props){
  console.log(FRUITS)
  const arr = FRUITS.filter( num => num.number % 2 == 0) // 짝
  const arr2 = FRUITS.filter( num => num.number % 2 == !0) // 홀
  console.log(arr)

  const result = classmates.filter( (value)  => value.school === "토끼초");
  const result2 = classmates.filter( (value)  => value.school === "다람쥐초");

  console.log(result)

  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const {data} = useQuery(FETCH_PRODUCT)

  console.log(data?.fetchProducts)

  const onClickDelete = async (e)=>{ // 버튼에 id 를 주어야지만 가능
    await deleteProduct({
      variables : {
        productId : String(e.target.id) 
      },
      refetchQueries: [{query: FETCH_PRODUCT}]
    })
  }

  return(
    <>
      {data?.fetchProducts.map( el => 
        <Row key={el._id}> {/* 백에서 제거할떄 설정한 기본값 */}
          <Column><input type="checkbox"/></Column>
          <Column>{el._id}</Column>
          <Column>{el.seller}</Column>
          <Column>{el.price}</Column>
          <Column>{el.name}</Column>
          <Column><button id={el._id} onClick={onClickDelete}>삭제</button></Column>
        </Row> 
      )}
      <br/>
      <br/>
      <br/>
      {classmates.map(el => 
        <Row>
          <Column>{el.name}</Column>
          <Column>{el.age}</Column>
          <Column>{el.school}</Column>
        </Row>
      )}
      <br/>
      <br/>
      <br/>
      <div>토끼초 뒤에 candy : 10 개 추가 </div>
      {result.map( el => 
        <div>{el.name + "candy : 10"} </div>
        )}
      <br/>
      <br/>
      <br/>
      <div>다람취초 이름 뒤에 '어린이' 붙이기 </div>
      {result2.map( el => 
        <div>{el.name + "어린이"} </div>
        )}
      <br/>
      <div>짝수만 보이기</div>
      {arr.map( el => 
        <Row>
          <Column>{el.number}</Column>  
          <Column>{el.title}</Column>  
        </Row>
      )}
      <br/>
      <div>홀수만 보이기</div>
      {arr2.map( el => 
        <Row>
          <Column>{el.number}</Column>  
          <Column>{el.title}</Column>  
        </Row>
      )}

    </>
  )
}