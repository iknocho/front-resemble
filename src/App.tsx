//함수형 컴포넌트 vs 클래스형 컴포넌트
//선언하기 쉽다
//메모리 자원을 덜 차지한다
//빌드 후 배포시 결과물의 크기가 작다
//Hooks를 통해 클래스 컴포넌트에서 지원하는 기능을 사용가능해졌다.
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


interface PostResponse {
  id: number
  title: string
  content: string
}

//Property 'title' does not exist on type '[string, Dispatch<SetStateAction<string>>]'. 
function App() {


  // const [title, setTitle]=useState('');
  // const [content, setContent]=useState('');

  axios.defaults.baseURL = 'http://localhost:8080/api/';
  axios.defaults.withCredentials = false;
  axios.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8',
  };
  //나중에 CORS관련 보기


  const [request, setRequest] = useState({ title: '', content: '' })

  const [posts, setPosts] = useState<PostResponse[]>()

  //사이트 시작하자마자 불러오는듯??? useEffect?
  useEffect(() => {
    async function getPosts() {
      const posts = await axios.get('post')
      setPosts(posts.data)
      console.log(posts.data)
    }
    getPosts()
  }, [])


  const wirtePost = async () => {
    const data = await axios.post<PostRequest>('post', request);
    console.log(data);
    // const data=await axios.post('post',{
    //   title:title,
    //   content:content
    // })
  };

  const hanldeChange = (data: any) => {

    const value = data.target.value;
    const id = data.target.id;
    console.log(data.target);

    setRequest({
      ...request,//...얕은복사, 깊은복사와 관련있는듯?
      [id]: value
    })

    // if(id==='title'){ 
    //   setTitle(value);
    // }else if(id==='content'){
    //   setContent(value);
    // } 
  }




  //form 방식으로 바꾸면 바로바로 바뀌는 이유??
  return (
    <div className="App" style={{ margin: 30 }}>
      <select name="" id="">
        <option value="게시글등록">등록</option>
        <option value="게시글업데이트">업데이트</option>
        <option value="게시글등록">등록</option>
      </select>
      <div>
            <form action="">
                <input id="title" value={request.title} onChange={hanldeChange}></input>
                <input id="content" value={request.content} onChange={hanldeChange}></input>
                <button onClick={wirtePost}>게시글등록</button>
            </form>
        </div>
      <div>
        <table>
          <tbody>
          
            {posts ? posts.map(post => {
              return (
                <tr>
                  <th scope="row">ID:{post.id}</th>
                  <th scope="row">Title:{post.title}</th>
                  <th scope="row">Content:{post.content}</th>
                </tr>
              )
            }) : <></>}
            
          </tbody>
        </table>
      </div>



    </div>
  );
}

export default App;
