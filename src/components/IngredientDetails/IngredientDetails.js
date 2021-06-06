import React from 'react';
import style from "./ingredient-details.module.css";

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
                <li className={style.item}>
                    <span className={style['item-name']}>{item.name}</span>
                    <span className={style['item-value']}>{item.value}</span>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientDetails;