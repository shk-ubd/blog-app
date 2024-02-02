import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
   
  return (
    <div className='w-full py-8'>
        <div><h1 className=' text-[2rem] md:text-[2.5rem] text-center font-semibold' >All Posts</h1></div>
        <Container>
            {
                posts.length>0? 
                <div className='flex flex-wrap flex-row'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-full sm:w-1/3 xl:w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
                :
                <div className='text-center' >Nothing to Show</div>
            }
           
            </Container>
            
    </div>
  )
}

export default AllPosts