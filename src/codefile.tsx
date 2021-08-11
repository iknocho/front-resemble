import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import setUpAxios from './api';
import Input from './component/input';
import Posts from './component/posts';
//json형식 만들어주는 듯?어떻게?
interface PostRequest {
  title: string;
  content: string;
}


//Property 'title' does not exist on type '[string, Dispatch<SetStateAction<string>>]'. 
function App() {
  
  
  // const [title, setTitle]=useState('');
  // const [content, setContent]=useState('');
  setUpAxios();

  //나중에 CORS관련 보기

  


  
//form 방식으로 바꾸면 바로바로 바뀌는 이유??
  return (
    <div className="App" style={{ margin: 30 }}>
      <select name="" id="">
        <option value="게시글등록">등록</option>
        <option value="게시글업데이트">업데이트</option>
        <option value="게시글등록">등록</option>  
      </select>
      <Input></Input> 
      <Posts></Posts>
     
      
      
    </div>
  );
}

export default App;
