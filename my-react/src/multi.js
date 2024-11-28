import {useState} from 'react';
export default function Multi(){
    function Fun1(){
        const user="hello im ram"
        return(
            <Fun2 user={user}/>
        )
    }
        function Fun2({user}){
            return (
                <Fun3 user={user}/>
            )
        }
        function Fun3({user}){
            return(
                <h2>{'${user} iam a actor'}</h2>
            )    
        return(
        <Fun1/>
        )

    }
}