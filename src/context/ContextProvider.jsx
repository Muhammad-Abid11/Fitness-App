import { useState, createContext } from "react";

export const Context = createContext("Default Values");

const ContextProvider = ({ children }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <Context.Provider value={{ fullName: "izan", email: "izan@gmail.com", password: "izan123@" }}>
                {children}
            </Context.Provider>
        </>
    )
}
export default ContextProvider;