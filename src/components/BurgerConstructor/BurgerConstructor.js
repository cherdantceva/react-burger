import React, { useState } from "react";
import style from './burger-constructor.module.css'
import {ConstructorElement, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Scroll from "../Scroll/Scroll";
import Price from "../Price/Price";
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import PropTypes from 'prop-types'

const BurgerConstructor = (props) => {
    const {dataBurgers} = props;
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
                    thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
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
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
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
                <Modal onClose={closeModal}>
                    <OrderDetails />
                </Modal>
            )}
        </div>
    );
};

export default BurgerConstructor;