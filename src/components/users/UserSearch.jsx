import React, {useState, useContext} from 'react'
import GithubContext from '../context/github/GithubContext'
import {FaSearch} from 'react-icons/fa'
import { searchUsers } from '../context/github/GithubAction'
function UserSearch() {
    const [text,setText] = useState('')
    const {users,dispatch} = useContext(GithubContext)
    const searchText = (e)=>{
        return setText(e.target.value)
    }
    const searchSubmit = async (e)=>{
        e.preventDefault()
        if (text==='') {
            alert("enter user's name")
        }else{
            dispatch({type:"SET_LOADING"})
            const users = await searchUsers(text)
            dispatch({type:"GET_USERS",payload:users})
            setText('')
        }
    }

  return (
    <div className='search'>
        <div className="container">
            <form onSubmit={searchSubmit} className="search-form">
                <div className="search-input">
                    <input type="text" placeholder="Search" value={text} onChange={searchText} />
                    <button type='submit' className="search-btn">
                        <FaSearch />
                    </button>
                </div>
            </form>
            {users.length > 0 && (
            <div className="">
                <button className="search-clear" onClick={()=>dispatch({type:'CLEAR_USERS'})}>Clear</button>
            </div>
            )}
        </div>
    </div>
  )
}

export default UserSearch