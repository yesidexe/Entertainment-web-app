import React, { ReactNode, useState } from 'react'

type Status = 'idle'|'loading'|'success'|'error'
type Props = {children: ReactNode;}

type AppContextValue = {
    setStatus:(status:Status)=>void
}

const AppContext = React.createContext<AppContextValue>({} as AppContextValue);

function AppProvider({children}:Props){
    const [status, setStatus] = useState<Status>('idle')

    

    return(
        <AppContext.Provider value={{
            setStatus,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext}