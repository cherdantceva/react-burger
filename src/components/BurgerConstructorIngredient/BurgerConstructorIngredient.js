import React from "react";
import { useDispatch } from "react-redux";
import style from './burger-constructor-ingredient.module.css'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types'
import { useDrop, useDrag } from "react-dnd";
import {
    DELETE_INGREDIENT,
    INGREDIENT_MIX,
} from "../../services/actions/constructor";



const BurgerConstructorIngredient = (props) => {
    const {index, ingredient} = props;
    const dispatch = useDispatch();


    const [, ingredientDropTarget] = useDrop({
        accept: "item",
        drop(item) {
            mixIngredient(item.index, index, item.ingredient);
        },
    });
    const [{ opacity }, ingredientDragRef] = useDrag({
        type: "item",
        item: { index, ingredient },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 1 : 1,
        }),
    });

    function mixIngredient(indexTarget, indexMix, ingredient) {
        dispatch({
            type:  DELETE_INGREDIENT,
            index: indexTarget,
        });

        dispatch({
            type: INGREDIENT_MIX,
            index: indexMix,
            ingredient: ingredient,
        });
    }

    const deleteIngredient = (id) => {
        dispatch({
            type: DELETE_INGREDIENT,
            index: id,
        });
    };


    return (
        <li key={index} className={style.item} ref={ingredientDragRef} style={{ opacity }}>
            <span className={style['icon-burger']} />
            <ConstructorElement
                text={ingredient.name}
                price = {ingredient.price}
                thumbnail =  {ingredient.image}
                index={index}
                handleClose={() => deleteIngredient(index)}
            />
            <div className={style.container} ref={ingredientDropTarget}></div>
        </li>
    );
};

BurgerConstructorIngredient.propTypes = {
    dataBurgers: PropTypes.arrayOf(PropTypes.shape({
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
        })
    ).isRequired
};

export default BurgerConstructorIngredient;