import React, { useState } from 'react';
import style from './burger-ingredients.module.css'
import ItemIngredient from '../ItemIngredient/ItemIngredient';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
const BurgerIngredients = (props) => {
    const {firstRef, secondRef, thirdRef} = props;
    const dataBurgers = useSelector((state) => state.ingredients.ingredients);
    const [activeIngredient, setActiveIngredient] = useState(null);
    const [visible, setVisible] = useState(false);


    const openModal = () => {
        setVisible(true);
    };
    const closeModal = () => {
        setVisible(false);
    };

    const handleListItemClick = React.useCallback((item) => {
        setActiveIngredient(item);
        openModal();
    }, []);

    return (
    <div className={style['burger-ingredients']}>
        <h2 className={style.title} ref={firstRef}>
            Булки
        </h2>
        <ul className={style.list}>
            {dataBurgers
                .filter(burger => burger.type === 'bun')
                .map(burger => (
                <li key={burger._id}>
                    <ItemIngredient
                        item={burger}
                        handleListItemClick={handleListItemClick}
                    />
                </li>
            ))}
        </ul>
        <h2 className={style.title} ref={secondRef}>
            Соусы
        </h2>
        <ul className={style.list}>
            {dataBurgers
                .filter(burger => burger.type === 'sauce')
                .map(burger => (
                    <li key={burger._id}>
                        <ItemIngredient
                            item={burger}
                            handleListItemClick={handleListItemClick}
                        />
                    </li>
                ))}
        </ul>
        <h2 className={style.title} ref={thirdRef}>
            Начинки
        </h2>
        <ul className={style.list}>
            {dataBurgers
                .filter(burger => burger.type === 'main')
                .map(burger => (
                    <li key={burger._id}>
                        <ItemIngredient
                            item={burger}
                            handleListItemClick={handleListItemClick}
                        />
                    </li>
                ))}
        </ul>
        {visible && activeIngredient && (
            <Modal header={'Детали ингредиента'} onClose={closeModal} isOpen={visible}>
                <IngredientDetails data={activeIngredient} />
            </Modal>
        )}
    </div>
    );
};

BurgerIngredients.propTypes = {
    firstRef: PropTypes.object.isRequired,
    secondRef: PropTypes.object.isRequired,
    thirdRef: PropTypes.object.isRequired,
};

export default BurgerIngredients;

