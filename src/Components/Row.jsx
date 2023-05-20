import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, getTodo, statusTodo } from '../Redux/actions'
import Edit from './Edit'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DownloadDoneRoundedIcon from '@mui/icons-material/DownloadDoneRounded';
import RemoveDoneRoundedIcon from '@mui/icons-material/RemoveDoneRounded';
import DeleteIcon from '@mui/icons-material/Delete';

const Row = ({ data, rowId }) => {

  const { id, title, status } = data

  const [hide, setHide] = useState(false)

  const dispatch = useDispatch()


  const handleDelete = () => {
    dispatch(deleteTodo(id)).then(() => dispatch(getTodo()))
  }

  const handleStatus = () => {
    dispatch(statusTodo(data)).then(() => dispatch(getTodo()))
  }


  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%" }}>

      <h6> {rowId + 1} </h6>
      {hide ? <Edit data={data} setHide={setHide}/> : <p style={{textDecoration : data?.status ? "line-through" : ""}} >{title}</p>}
      <button onClick={() => setHide(p => !p)}> <ModeEditOutlineOutlinedIcon />  </button>
      <button onClick={handleStatus} style={{ backgroundColor: `${status ? "green" : "#DE3163"}` }}>
        {status ? <DownloadDoneRoundedIcon /> : <RemoveDoneRoundedIcon />}   </button>
      <button onClick={handleDelete}> <DeleteIcon /></button>

    </div>
  )
}

export default Row
