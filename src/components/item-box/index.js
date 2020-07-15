import React from "react"
import Button from "../../components/forms/button";
import { ItemsContainer, Item, ItemData, ItemImage } from "./styles"

const ItemBox = ({ name, price, picture }) => {

    return (
        <ItemsContainer>
            <Item>
                <ItemImage src={picture} />
                <ItemData>
                    <h4>{name}</h4>
                    <p>${price}</p>
                </ItemData>
            </Item>
            <Button variant="add" ><i className="fas fa-plus"></i></Button>
        </ItemsContainer>
    )
}

export default ItemBox