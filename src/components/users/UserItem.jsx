import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({user:{login,avatar_url}}) {
  return (
        <div className="user">
            <div className="user__avatar">
                <div className="user__img">
                    <img src={avatar_url} alt="profile" />
                </div>
            </div>
            <div className="user__info">
                <h2 className="user__title">{login}</h2>
                <Link to={`/user/${login}`}>
                Visit Profile
                </Link>
            </div>
        </div>
  )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem