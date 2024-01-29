import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../Components'
import { useSelector } from 'react-redux'
import notebookImage from "/notebook.jpeg"

function Home() {
    const [posts, setPosts] = useState([])
    const status = useSelector(state => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts().then(posts => {
            if (posts) setPosts(posts.documents)
        })
    }, [])

     {
        return (
            <div className="w-full py-8 my-4 text-center md:min-h-[90vh] ">
                <Container>
                    {/* <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl mt-10 font-bold hover:text-gray-500">
                                {status? "Nothing to Show" : "Login to Read Post"}
                            </h1>
                        </div>
                    </div> */}
                    <div className="flex flex-col md:flex-row my-14 items-center justify-between">

                        <div className='md:w-[40%] flex flex-col items-center md:items-start '>
                            <h1 className=' text-3xl md:text-[52px] lg:text-[72px] hero-heading md:text-left text-center' >Welcome to the <span className='gradient-text' >BlogApp!</span>  </h1>
                            <p className='md:text-left mt-6 text-center px-8 md:px-0'>Your hub for interesting reads, insights, and more. Start your journey into the world of our blog app. Happy reading!</p>
                        
                        </div>

                        <div className='md:w-[40%] mt-10 md:mt-0 flex justify-center'>
                            <div className='border-[5px] w-[80%] rounded-xl overflow-hidden border-white shadow-2xl shadow-white/30'>
                                <img src={notebookImage} alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    // return (
    //     <div className='w-full py-8  md:min-h-[50vh]'>
    //         <Container>
    //             <div className='flex flex-wrap'>
    //                 {posts.map((post) => (
    //                     <div key={post.$id} className='p-2 md:w-1/4 w-full'>
    //                         <PostCard {...post} />
    //                     </div>
    //                 ))}
    //             </div>
    //         </Container>
    //     </div>
    // )
}

export default Home