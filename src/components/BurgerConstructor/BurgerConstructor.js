import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './burger-constructor.module.css'
import {ConstructorElement, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrderId } from '../../services/actions/order';
import Scroll from "../Scroll/Scroll";
import Price from "../Price/Price";
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import PropTypes from 'prop-types'
import { useDrop } from "react-dnd";
import {
        ADD_INGREDIENT,
        ADD_BUN,
        } from "../../services/actions/constructor";
import BurgerConstructorIngredient from "../BurgerConstructorIngredient/BurgerConstructorIngredient";



const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const { ingredients } = useSelector((store) => store.burgerConstructor);
    const { bun } = useSelector((store) => store.burgerConstructor);
    function addIngredient(item) {
        if (item.type === "bun") {
            dispatch({
                type: ADD_BUN,
                bun: item,
            });
        } else {
            console.log('add jkjkjk')
            dispatch({
                type: ADD_INGREDIENT,
                ingredient: item,
            });
        }
    }
    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop(item) {
            addIngredient(item);
        },
    });

    const [price, setPrice] = React.useState(0);
    useMemo(() => {
            setPrice(0);
            ingredients.forEach(( ingredient) => {
                setPrice((prev) => prev + ingredient.price);
            });
            if(bun) setPrice((prev) => prev + bun.price * 2) ;

    }, [ingredients, bun]);


    const [visible, setVisible] = useState(false);
    const openModal = () => {
        setVisible(true);
    };
    const closeModal = () => {
        setVisible(false);
    };
    return (
        <div className={style['burger-constructor']} ref={dropTarget}>
            <div className={style.top}>
                {
                    bun &&
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text= {`${bun && bun.name} (верх)`}
                    price={bun && bun.price}
                    thumbnail={bun && bun.image}
                    />

                }

            </div>
                <Scroll className={style.scroll}>
                    <ul className={style.list}>
                        {ingredients.map((ingredient, index) => (
                            <BurgerConstructorIngredient  key={index} index={index} ingredient={ingredient} />
                        )
                        )}
                    </ul>
                </Scroll>
                <div className={style.bottom}>
                    {
                        bun &&
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text= {`${bun && bun.name} (низ)`}
                            price={bun && bun.price}
                            thumbnail={bun && bun.image}
                        />
                    }
                </div>
            {
                price > 0 && ingredients.length > 0 && bun &&
                <div className={style.order}>
                    <div className={style.total}>
                        <Price
                            price = {price}
                            size = 'big' />
                    </div>
                    <div className={style.button}>
                        <Button type="primary" size="large" onClick={() => {
                            dispatch(getOrderId(ingredients));
                            openModal();
                        }}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            }

            {visible && (
                <Modal onClose={closeModal} isOpen={visible}>
                    <OrderDetails />
                </Modal>
            )}
        </div>
    );
};

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;