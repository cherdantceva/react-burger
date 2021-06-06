import React, { useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './constructor-page.module.css'
import Scroll from '../Scroll/Scroll';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import PropTypes from 'prop-types'
const ConstructorPage = (props) => {
    const {dataBurgers} = props;
    const [current, setCurrent] = React.useState('one');
    return (
        <section className={style.page}>
            <h1 className={style.title}>
                Соберите бургер
            </h1>
            <div className={style.parts}>
                <div className={style.part}>
                    <div className={style.tabs}>
                        <Tab value='one' active={current === 'one'} onClick={setCurrent}>
                            Булки
                        </Tab>
                        <Tab value='two' active={current === 'two'} onClick={setCurrent}>
                            Соусы
                        </Tab>
                        <Tab value='three' active={current === 'three'} onClick={setCurrent}>
                            Начинки
                        </Tab>
                    </div>
                    <Scroll >
                        <BurgerIngredients dataBurgers = {dataBurgers}/>
                    </Scroll>
                </div>
                <div className={style.part}>
                    <BurgerConstructor dataBurgers = {dataBurgers} />
                </div>
            </div>
        </section>
    );
};

ConstructorPage.propTypes = {
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

export default ConstructorPage;