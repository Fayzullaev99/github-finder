import React from 'react'
import UserRepo from './UserRepo'

function UserRepos({repos}) {
  return (
    <div className='repos container'>
        <h2 className="repos-title">Lastest Repositories</h2>
        {repos.map((repo,i)=>(
            <UserRepo key={repo.id} repo={repo} index={i+1} />
        ))}
    </div>
  )
}

export default UserRepos