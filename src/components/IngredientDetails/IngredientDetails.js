import React from 'react';
import style from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import ConstructorPage from "../AppConstructorPage/AppConstructorPage";

const IngredientDetails = (props) => {
    const {data} = props;
    const items = [
        {
            name: 'Калории, ккал',
            value: `${data.calories}`
        },
        {
            name: 'Белки, г',
            value: `${data.proteins}`
        },
        {
            name: 'Жиры, г',
            value: `${data.fat}`
        },
        {
            name: 'Углеводы, г',
            value: `${data.carbohydrates}`
        },

    ]
    return (
        <div className={style['ingredient-details']}>
            <img className={style.img} src={data.image_large} alt="ingredient" />
            <h3 className={style.name}>
                {data.name}
            </h3>
            <ul className={style.info}>
                {items.map(item => (
                <li className={style.item} key={item.name}>
                    <span className={style['item-name']}>{item.name}</span>
                    <span className={style['item-value']}>{item.value}</span>
                </li>
                ))}
            </ul>
        </div>
    );
}

IngredientDetails.propTypes = {
    data: PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
            type: PropTypes.string,
            proteins: PropTypes.number,
            fat: PropTypes.number,
            carbohydrates: PropTypes.number,
            calories: PropTypes.number,
            price: PropTypes.number,
            image: PropTypes.string,
            image_mobile: PropTypes.string,
            image_large: PropTypes.string,
            __v: PropTypes.number,
        }).isRequired
};

export default IngredientDetails;