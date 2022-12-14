import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_API_URL
const GITHUB_TOKEN = process.env.REACT_APP_API_TOKEN

const finder = axios.create({
    baseURL:GITHUB_URL,
    headers:{Authorization: `token ${GITHUB_TOKEN}`}
})

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
   const res = await finder.get(`/search/users?${params}`)
   return res.data.items
}

export const profileAndRepos = async (login)=>{
    const [user,repos] = await Promise.all([
        finder.get(`/users/${login}`),
        finder.get(`/users/${login}/repos`)
    ])
    return {user:user.data, repos:repos.data}
}