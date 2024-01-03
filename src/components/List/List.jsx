import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item/Item';
import styles from './List.module.css'

const List = () => {
	const data = useSelector((state) => state.todo.todoList);

  return (
		<ul className={styles.list}>
			{data.length === 0 ?
				(<p style={{textAlign: 'center', padding:'20px', fontSize: '22px'}}>No one item added</p>) : 
				data.map(item => (
					<Item item={item} key={item.id} />
				)) 
			}
		</ul>
  )
}

export default List
