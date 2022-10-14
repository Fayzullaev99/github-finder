import React from 'react'
import {FaClock, FaClone, FaCogs, FaDownload, FaEye, FaFileCode} from 'react-icons/fa'
function UserRepo({repo,index}) {
    const {
        html_url,
        language,
        watchers,
        size
    } = repo
  return (
    <div className='repo'>
        <h3 className="repo-index">{index}</h3>
        <div className="repo-box">
            <div className="repo-title">{repo.name}</div>
            <div className="repo-info">
                {language ? (
                    <p className="repo-text"><FaCogs /> {repo.language}</p>
                ):(
                    <p className="repo-text"><FaCogs /> unknown</p>
                )
                }
                <p className='repo-text'><FaEye /> {watchers}</p>
                <p className='repo-text'><FaFileCode /> size: {size}</p>
                <a href={html_url} className='repo-link' target="_blank"><FaDownload /> download</a>
            </div>
        </div>
    </div>
  )
}

export default UserRepo