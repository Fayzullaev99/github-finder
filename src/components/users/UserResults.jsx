import React,{useContext} from 'react'
import GithubContext from '../context/github/GithubContext'
import Loading from '../pages/Loading'
import UserItem from './UserItem'

function UserResults() {
    const {users,loading} =  useContext(GithubContext)
    // console.log(users);
    if (!loading) {
        return (
            <div className="users container">
                {users.map((user)=>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
          )
    }else{
        return <Loading />
    }
}

export default UserResults