import React from 'react'
import styles from './Wrapper.module.css'
import List from '../List/List'
import Form from '../Form/Form'


const Wrapper = () => {
  return (
	 <section className={styles.todo}>
	 	<h1 className={styles.title}>To Do List</h1>
	 	<Form/>
		<List/>
	 </section>
  )
}

export default Wrapper
