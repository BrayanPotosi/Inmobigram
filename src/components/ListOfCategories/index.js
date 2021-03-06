import React from 'react'
import {Category} from '../Category'
import {List, Item} from './styles'
// <>

export const ListOfCategories = () =>{
    return(
        <List>
            {
                [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14].map(category => <Item key={category}><Category/></Item>)
            }
        </List>
    )
}