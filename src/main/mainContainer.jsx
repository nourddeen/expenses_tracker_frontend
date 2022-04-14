import {useState,useEffect} from 'react'

const MainContainer = () =>{
    const [expenses , setExpenses]=useState([])
    const getExpenses = async ()=>{
        const expensesApi = await fetch('https://vast-meadow-87338.herokuapp.com/')
        const parsedExpenses = await expensesApi.json()
        console.log(parsedExpenses)
    }
    useEffect(()=>{getExpenses()},[])
    return(
        <h1>main container</h1>
    )
}
export default MainContainer