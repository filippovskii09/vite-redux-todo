import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import styles from './ItemDelete.module.css'
import PropTypes from 'prop-types'
import { removeItem } from '../../../slices/todoSlice';
import { useDispatch } from 'react-redux';

const ItemDelete = ({item}) => {

	const dispatch =  useDispatch()

	const handleDeleteItem = () => {
		dispatch(removeItem(item))
		console.log(item);
	}
	
  return (
	 <button onClick={handleDeleteItem} className={styles.button}>
		<RiDeleteBin5Line />
	 </button>
  )
}

export default ItemDelete

ItemDelete.propTypes = {
	item: PropTypes.object
}