import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodo, postTodo } from '../Redux/actions'

const TodoInput = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input){

            const payload = {
                title: input,
                status: false
            }

            dispatch(postTodo(payload)).then(()=>dispatch(getTodo())) ;

            setInput("")
        }

    }

    return (
        <form onSubmit={handleSubmit}>

            <input onChange={(e) => setInput(e.target.value)} value={input} />

            <input type="submit" />

        </form>
    )
}

export default TodoInput
