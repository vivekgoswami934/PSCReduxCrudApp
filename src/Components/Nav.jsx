import React from 'react'
import { useSelector } from 'react-redux'

const Nav = () => {


    const { reducer } = useSelector(store => store)

        const { todos } = reducer

        const completed = todos.filter(el => el.status === true)
        const notCompleted = todos.filter(el => el.status === false)

    return (
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginBottom: "20px" }}>
            <button style={{ backgroundColor: "gray", border: "none", padding: "10px 30px" }} >Total :-  {todos?.length}</button>
            <button style={{ backgroundColor: "#FFC72C", border: "none", padding: "10px 30px" }}>Completed :- {completed?.length}</button>
            <button style={{ backgroundColor: "#DE3163", border: "none", padding: "10px 20px" }}>Not Completed :- {notCompleted?.length}</button>
        </div>
    )
}

export default Nav


