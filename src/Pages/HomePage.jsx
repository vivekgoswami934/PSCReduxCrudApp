import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Row from '../Components/Row'
import TodoInput from '../Components/TodoInput'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../Redux/actions'

const HomePage = () => {

    const dispatch = useDispatch()

    const { reducer } = useSelector(store => store)

    const { isLoading, isError, todos } = reducer

    useEffect(() => {
        dispatch(getTodo())
    }, [dispatch])

    return (
        <div style={homePageStyle}>
            <h4>CRUD APP</h4>

            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error...</h1>}

            <Nav />
            
         

            <TodoInput />

             
            {
                todos?.reverse().map((el, id) => {
                    return <Row data = {el} rowId={id} key={id} />
                })
            }



        </div>
    )
}

export default HomePage


const homePageStyle = { border: "4px solid black", width: "60%", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "auto" }