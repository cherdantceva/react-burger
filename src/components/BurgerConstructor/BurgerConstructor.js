import React, { useState } from "react";
import { useSelector } from 'react-redux';
import style from './burger-constructor.module.css'
import {ConstructorElement, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Scroll from "../Scroll/Scroll";
import Price from "../Price/Price";
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import PropTypes from 'prop-types'


const BurgerConstructor = () => {
    const dataBurgers = useSelector((state) => state.ingredients.ingredients);
    const [visible, setVisible] = useState(false);
    const openModal = () => {
        setVisible(true);
    };
    const closeModal = () => {
        setVisible(false);
    };
    return (
        <div className={style['burger-constructor']}>
            <div className={style.top}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text= {`${dataBurgers[0].name} (верх)`}
                    price={dataBurgers[0].price}
                    thumbnail={dataBurgers[0].image}
                />
            </div>
                <Scroll className={style.scroll}>
                    <ul className={style.list}>
                        {dataBurgers
                            .filter(burger => burger.type === 'main')
                            .map(burger => (
                                <li key={burger._id} className={style.item}>
                                    <span className={style['icon-burger']}></span>
                                    <ConstructorElement
                                        text={burger.name}
                                        price = {burger.price}
                                        thumbnail =  {burger.image}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </Scroll>
                <div className={style.bottom}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text= {`${dataBurgers[0].name} (низ)`}
                        price={dataBurgers[0].price}
                        thumbnail={dataBurgers[0].image}
                    />
                </div>
                <div className={style.order}>
                    <div className={style.total}>
                        <Price
                            price = '610'
                            size = 'big' />
                    </div>
                    <div className={style.button}>
                        <Button type="primary" size="large" onClick={openModal}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
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