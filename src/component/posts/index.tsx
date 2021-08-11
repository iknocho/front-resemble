import axios from "axios"
import { useEffect, useState } from "react"
import Post from "./post"

interface PostResponse {
  id: number
  title: string
  content: string
}
const Posts=()=>{
    
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
    return(
        <div>
        <table>
          <tbody>

            {posts ? posts.map(post => {
              return (
                  <Post id={post.id} title={post.title} content={post.content}></Post>
              )
            }) : <></>}

 
          </tbody>
        </table>
      </div>
    )
}
export default Posts;