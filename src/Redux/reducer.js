import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionType";


const initialState = {
    todos : [],
    isLoading : false,
    isError : false
}


export const reducer = (state = initialState,action) => {

  const {type , payload} = action ; 

    switch(type){


        case GET_DATA_LOADING : return {...state , isLoading : true , isError : false }
        case GET_DATA_SUCCESS : return {...state , isLoading : false , todos : payload  }
        case GET_DATA_ERROR : return {...state , isLoading : false , isError : true }

        default : return state ;
    }


}