import React, { useState } from 'react';
import style from './burger-ingredients.module.css'
import ItemIngredient from '../ItemIngredient/ItemIngredient';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

const BurgerIngredients = (props) => {
    const {dataBurgers} = props;
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
                        data={burger}
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
                            data={burger}
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
                            data={burger}
                            handleListItemClick={handleListItemClick}
                        />
                    </li>
                ))}
        </ul>
        {visible && activeIngredient && (
            <Modal header={'Детали ингредиента'} onClose={closeModal}>
                <IngredientDetails data={activeIngredient} />
            </Modal>
        )}
    </div>
    );
};

export default BurgerIngredients;

