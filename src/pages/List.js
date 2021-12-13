import React from "react"
import Item from "../components/item"

const List = (props) => {
    return  props.list.map((list) => {
        return <Item key={list.id} list={list}/>
    })
}

export default List;