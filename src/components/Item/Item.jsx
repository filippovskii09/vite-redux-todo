import React from 'react'
import PropTypes from 'prop-types'
import styles from './Item.module.css'
import ItemDelete from './ItemDelete/ItemDelete'

const Item = ({ item }) => {
  return (
	 <li className={styles.item}>
		<h2>{item.title}</h2>
		<ItemDelete item={item}/>
	 </li>
  )
}

export default Item

Item.propTypes = {
	item: PropTypes.object
}