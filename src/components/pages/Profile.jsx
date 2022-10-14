import React from 'react'
import {FaUserFriends,FaUsers,FaMapMarkerAlt,FaGlobe,FaEnvelope,FaTwitter,FaBriefcase,FaBuilding,FaUserShield,FaClock} from 'react-icons/fa'
import { useEffect,useContext } from 'react'
import { useParams} from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import Loading from "./Loading";
import UserRepos from './UserRepos'
import { profileAndRepos } from '../context/github/GithubAction'

function Profile() {
    const {profile,dispatch,loading,repos} = useContext(GithubContext)
    const params = useParams()
    useEffect(()=>{
      dispatch({type:"SET_LOADING"})
      const getProfileData = async ()=>{
        const profileData = await profileAndRepos(params.login)
        dispatch({type:'PROFILE_AND_REPOS',payload:profileData})
      }
      getProfileData()
    },[dispatch,params.login])
    const {avatar_url,bio,blog,company,created_at,email,followers,following,html_url,location,login,name,public_repos,twitter_username,type,updated_at,
    } = profile
    if (loading) {
      return <Loading />
    }
  return (
    <>
    <div className='profile container'>
        <div className="profile-head">
          <div className="profile-img">
            <img src={avatar_url} alt="profile" />
          </div>
          <h2 className="profile-name">{login}</h2>
          <p className="profile-location"><FaMapMarkerAlt /> {location}</p>
          <div className="profile-btn">
            <a href={html_url} className="profile-github" target="_blank">Github</a>
            <a href="https://proweb.uz/" className="profile-proweb" target="_blank">Proweb</a>
          </div>
          <p className="profile-bio">{bio}</p>
        </div>
        <div className="profile-body">
          <h3 className="profile-title">{name}</h3>
          <div className="profile-info">
            <p className="profile-status"><span><FaClock /> Created date: </span>{created_at}</p>
            <p className="profile-status"><span><FaClock /> Update time: </span>{updated_at}</p>
            {profile.company && (
              <p className="profile-status"><span><FaBuilding /> Company: </span>{company}</p>
            )}
            {profile.blog && (
              <p className="profile-status"><span><FaGlobe /> Website: </span><a href={blog} target="_blank" >{profile.blog}</a></p>
            )}
            {profile.email && (
              <p className="profile-status"><span><FaEnvelope /> Email: </span><a href={`mailto:${profile.email}`} target="_blank">{email}</a></p>
            )}
            {profile.twitter_username && (
              <p className="profile-status"><span><FaTwitter /> Twitter: </span><a href={`https://twitter.com/:${profile.twitter_username}`} target="_blank">{twitter_username}</a></p>
            )}
            {profile.type && (
              <p className="profile-status"><span><FaUserShield /> Status: </span>{type}</p>
            )}      
          </div>
        </div>
        <div className="profile-footer">
          <div className="profile-box">
            <FaUsers />
            <div>
              <p className='profile-num'>{followers}</p>
              <p className='profile-text'>User's followers</p>
            </div>
          </div>
          <div className="profile-box">
            <FaUserFriends />
            <div>
              <p className='profile-num'>{following}</p>
              <p className='profile-text'>User's following</p>
            </div>
          </div>
          <div className="profile-box">
            <FaBriefcase />
            <div>
            <p className='profile-num'>{public_repos}</p>
              <p className='profile-text'>User's repositories</p>
            </div>
          </div>
        </div>
    </div>
    <UserRepos repos={repos} />
    </>
  )
}

export default Profile