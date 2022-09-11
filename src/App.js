/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // onclick={}안에는 함수이름만 띡 넣어야한다.
  // let [a, c] = [1, 2] ==> a = 1, c = 2 (destructuring 문법) 
  let [logo,setLogo] = useState('ReactBlog'); //setLogo = state변경함수(재랜더링 가능하게함)== state가 변경되면 setLogo함수가 실행된다.
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);
  // map함수 : array 자료 갯수만큼 한수 안의 코드를 실행해줌
  //[1,2,3].map(function(a){
    //console.log(a); 1 -> 2 -> 3
  //});
  return (
    <div className="App">
      <div className="black-nav">
        <div>{logo}</div>
      </div>
      {/* <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다 순으로 정렬</button>
      <div className="list">
        <h4>{글제목[0]}<span onClick={()=> {따봉변경(따봉+1)} }> 좋아요👍</span> {따봉} </h4>
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
          }}>글수정</button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="modal">
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
      </div> */}
      { //3번 html 와꾸 만들어줌
        글제목.map(function(a,i){
          return (
          <div className="list" key={i}>
              <h4 onClick={()=>{
                modal==true ? setModal(false) : setModal(true)
                setTitle(i);
              }}>
              {글제목[i]}<span onClick={() => {
              let 따봉카피 = [...따봉];
              따봉카피[i] = 따봉카피[i] + 1;
              따봉변경(따봉카피);
            }}> 좋아요👍</span> {따봉[i]} </h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        // props 사용법 부모로부터 자식까지 state전송
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}></Modal> : null
      }
      <모달></모달>
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy = [...props.글제목];
          copy[0] = '여자 코트 추천';
          props.글제목변경(copy);
        }}>글수정</button>
    </div>
  );
}

function 모달(){
  return (
    <div>
      <h4>나는 천재다</h4>
      <p>나는 짱이다</p>
    </div>
  );
}
export default App;
