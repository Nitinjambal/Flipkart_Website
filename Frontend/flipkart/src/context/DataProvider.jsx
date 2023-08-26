import { createContext, useState } from "react";


export const DataContext=createContext(null);


const DataProvider=({children})=>{
const [account,setAccount]=useState("");
const [auth,setAuth]=useState(false)
    return(
        <DataContext.Provider value={{account,setAccount,auth,setAuth}}>
           { children}
        </DataContext.Provider>
    )

}

export default DataProvider