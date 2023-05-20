import axios from "axios"
import { DELETE_DATA_ERROR, DELETE_DATA_LOADING, DELETE_DATA_SUCCESS, EDIT_DATA_ERROR, EDIT_DATA_LOADING, EDIT_DATA_SUCCESS, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, POST_DATA_ERROR, POST_DATA_LOADING, POST_DATA_SUCCESS } from "./actionType"

const baseURL = "http://localhost:8080/todos"


export const getTodo = () => async (dispatch) => {

    try {
        dispatch({ type: GET_DATA_LOADING })

        const res = await axios.get(baseURL)

        dispatch({ type: GET_DATA_SUCCESS, payload: res.data })

    } catch (err) {

        dispatch({ type: GET_DATA_ERROR })

    }
}

export const postTodo = (data) => async (dispatch) => {

    console.log(data)

    try {

        dispatch({ type: POST_DATA_LOADING })

        await axios.post(baseURL, data)

        dispatch({ type: POST_DATA_SUCCESS})

    } catch (err) {

        dispatch({ type: POST_DATA_ERROR })

    }


}


export const updateTodo = (data) => async (dispatch) => {

    const { id } = data;

    console.log(data)

    try {
        dispatch({ type: EDIT_DATA_LOADING })

        await axios.put(`${baseURL}/${id}`, data)

        dispatch({ type: EDIT_DATA_SUCCESS })

    } catch (err) {
        dispatch({ type: EDIT_DATA_ERROR })

    }

}


export const statusTodo = (data) => async (dispatch) => {

    const { id , status } = data;

    console.log(id,status)

    try {
        dispatch({ type: EDIT_DATA_LOADING })

        await axios.patch(`${baseURL}/${id}`, { status: !status })

        dispatch({ type: EDIT_DATA_SUCCESS })

    } catch (err) {
        dispatch({ type: EDIT_DATA_ERROR })

    }

}

export const deleteTodo = (id) => async (dispatch) => {

    try {

        dispatch({ type: DELETE_DATA_LOADING })

        await axios.delete(`${baseURL}/${id}`)

        dispatch({ type: DELETE_DATA_SUCCESS })

    } catch (err) {

        dispatch({ type: DELETE_DATA_ERROR })
    }

}