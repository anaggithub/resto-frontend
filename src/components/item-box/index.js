import React from "react"

const ItemBox = ({ id, name, picture }) => {

    return (
        <div>
            <h3>{name}</h3>
            <img src={picture} />
        </div>
    )
}

export default ItemBox