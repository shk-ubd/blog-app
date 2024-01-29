import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import {logout} from "../../store/authSlice"
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
    className="py-2 px-5 text-black button-custom rounded-xl shadow-lg duration-200 hover:drop-shadow-2xl hover:shadow-[#666666] hover:cursor-pointer"
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn