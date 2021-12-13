import React from "react"
import {Link, useParams} from "react-router-dom"

const SingleItem = ({list, edit, deleteItem}) => {
    // get the params from the url
    const params = useParams()
    const id = parseInt(params.id)

    // find the particular post the user wants to see based on the param
    const item = list.find((i) => i.id === id)
    console.log(item)

    ////////////////////
    // Style Object
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px black",
        width: "80%",
        margin: "30px auto"
    }

  
    return <div style={div}>
        <h1>{item?.item}</h1>
        <h2>{item?.amount}</h2>
        <button onClick={() => deleteItem(item)}>Delete</button>
        <button onClick={() => edit(item)}>Edit</button>
        <Link to="/">
            <button>Go Back</button>
        </Link>
    </div>
}

export default SingleItem;
