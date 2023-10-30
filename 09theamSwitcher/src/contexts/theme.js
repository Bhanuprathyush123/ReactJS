import { createContext, useContext } from 'react'

export const themeContex = createContext({
     themeMode: 'light',
     darkTheme:() =>{},
     lightTheme:() =>{},
})

export const ThemeProvider = themeContex.Provider

export default function useTheme() {
     return useContext(themeContex)
}