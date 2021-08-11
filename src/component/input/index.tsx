import axios from "axios";
import { useState } from "react";


interface PostRequest {
    title: string;
    content: string;
}


const Input = () => {


    const [request, setRequest] = useState({ title: '', content: '' })

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


    return (
        <div>
            <form action="">
                <input id="title" value={request.title} onChange={hanldeChange}></input>
                <input id="content" value={request.content} onChange={hanldeChange}></input>
                <button onClick={wirtePost}>게시글등록</button>
            </form>
        </div>
    )


}
export default Input;