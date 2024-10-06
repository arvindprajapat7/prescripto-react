import { createContext, useContext } from "react";
import { doctors } from "../../public/assets";

const  AppContext = createContext()

export const AppContextProvider = ({children})=>{
    const currency = '$'
    const value = {
        doctors,
        currency
    }
    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}