import Container from "./Container"
import { React, createContext, useState } from "react"
const Context = createContext({
    onback: false,
    onBack: () => { }
})

const ContextProvider = ({ children }) => {
    const [isback, setisback] = useState()
    const onbackhandler = () => {
        return setisback(!isback)
    }
    return (
        <>
            <Context.Provider value={{ onback: isback,  }}>{children}</Context.Provider>
        </>
    )

}
export default ContextProvider