import React, { ReactNode, useState } from 'react'

type Props = { children: ReactNode; }
type AppContextValue = {
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void,
    searchBy: string,
    setSearchBy: (searchBy: string) => void,
    actualGnre: string,
    setActualGnre: (actualGnre: string) => void,
}

const AppContext = React.createContext<AppContextValue>({} as AppContextValue);

function AppProvider({ children }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [searchBy, setSearchBy] = useState<string>('multi')
    const [actualGnre, setActualGnre] = useState<string>('')

    return (
        <AppContext.Provider value={{
            searchTerm,
            setSearchTerm,
            searchBy,
            setSearchBy,
            actualGnre,
            setActualGnre,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }