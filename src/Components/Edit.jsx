import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodo, updateTodo } from '../Redux/actions'

const Edit = ({ data, setHide }) => {

    const dispatch = useDispatch()

    const [input, setInput] = useState("")

    const inputRef = useRef()

    const postData = (e) => {
        e.preventDefault();

        const payload = { ...data, title: input }

        dispatch(updateTodo(payload)).then(() => dispatch(getTodo())).then(() => setHide(p => !p))

    }

    useEffect(() => {
        setInput(data.title)
        inputRef.current.focus()
    }, [])



    return (
        <form onSubmit={postData}>

            <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} />

        </form>
    )
}

export default Edit
