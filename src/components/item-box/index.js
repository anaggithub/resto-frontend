import React from "react"
import PropTypes from "prop-types";
import Button from "../../components/forms/button";
import Typography from "../../components/typography";
import { ItemsContainer, Item, ItemData, ItemImage, typographyStyles } from "./styles"

const ItemBox = ({ styles, name, price, picture }) => {

    return (
        <ItemsContainer styles={styles}>
            <Item>
                <ItemImage src={picture} />
                <ItemData>
                    <Typography as="h4" styles={typographyStyles}>{name}</Typography>
                    <Typography as="p" styles={typographyStyles}>{price}</Typography>
                </ItemData>
            </Item>
            <Button variant="addItem" ><i className="fas fa-plus"></i></Button>
        </ItemsContainer>
    )
}
ItemBox.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string,
    styles: PropTypes.object
};

ItemBox.defaultProps = {
    name: "",
    price: "",
    picture: "",
    styles: {}
};

export default ItemBox