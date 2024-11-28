import{createContext,useContext } from "return"
export default function Context(){
    const userContext = createContext();
    function Fun1(){
        const user = " hello im boo";
        return(
            <userContext.Provider value={user}>
            <Fun2/>
            </userContext.Provider>
        )
    }
    function Fun2(){
        const user= useContext(userContext);
        return(
            <Fun3/>
        )
    }
    function Fun3(){
        const user= useContext(userContext);
        return(
            <h2>{'${user} im a actor'}</h2>
        )
    }
}