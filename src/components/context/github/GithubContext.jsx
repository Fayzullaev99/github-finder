import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({children}) =>{
    const initilState = {
      users:[],
      repos:[],
      profile:{},
      loading:false
    }
    const [state,dispatch] = useReducer(githubReducer,initilState)
    return <GithubContext.Provider
    value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext