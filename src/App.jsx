import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice'
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login(userData))
        else dispatch(logout())
      })
      .finally(() => { setLoading(false) })

  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between text-white bg-[#00040F] '>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[30%] h-[30%] -left-1/2 bottom-0 rounded-full blue__gradient" />
    </div>
  ) : null
}

export default App
