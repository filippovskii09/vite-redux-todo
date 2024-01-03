import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoMdAddCircle } from "react-icons/io";
import styles from './Form.module.css'
import { addItem } from '../../slices/todoSlice';

const Form = () => {
	const [todo, setTodo] = useState({
		title: ''
	})

	const dispatch = useDispatch()

	const handleCreateNewItem = (e) => {
		e.preventDefault()

		const newTodo = {
			title: todo.title,
		}
		dispatch(addItem({title: newTodo.title}))

		setTodo({title: ''})
	}

  return (
	<form onSubmit={handleCreateNewItem} className={styles.form}>
		<input placeholder='Enter your task' type='text' onChange={(e) => setTodo({...todo, title:e.target.value})} value={todo.title}/>
		<button disabled={todo.title.length === 0}>
			<IoMdAddCircle />
		</button>
	</form>
  )
}

export default Form
