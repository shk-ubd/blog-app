import React, { useState, useEffect } from 'react'
import { Container, Loader, PostCard } from '../Components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setLoading(false)
            }

        })
    }, [])

    return (
        <div className='w-full py-8'>
            <div><h1 className=' text-[2rem] md:text-[2.5rem] text-center font-semibold' >All Posts</h1></div>
            { loading ? <Container><div className='flex justify-center my-24' > <Loader/> </div></Container> :
                <Container>
                {
                    posts.length > 0 ?
                        <div className='flex flex-wrap flex-row'>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-2 w-full sm:w-1/3 xl:w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                        :
                        <div className='text-center font-bold my-24 text-xl' >Nothing to Show :(</div>
                }

            </Container>}

        </div>
    )
}

export default AllPosts