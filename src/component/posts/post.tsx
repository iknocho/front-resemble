//Props 란? 왜 post를 posts 하위폴더로 안드는지
interface Props{
    id:number
    title:string
    content:string
}

const Post=({id,title,content}:Props)=>{
    return(
        <tr>
                <th scope="row">ID:{id}</th>
                <th scope="row">Title:{title}</th>
                <th scope="row">Content:{content}</th>
              </tr>
    )
}

export default Post;