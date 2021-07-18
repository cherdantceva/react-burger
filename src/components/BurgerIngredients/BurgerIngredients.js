import React, { useState } from 'react';
import style from './burger-ingredients.module.css'
import ItemIngredient from '../ItemIngredient/ItemIngredient';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
const BurgerIngredients = () => {
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
        <h2 className={style.title}>
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
        <h2 className={style.title}>
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
        <h2 className={style.title}>
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

export default BurgerIngredients;

