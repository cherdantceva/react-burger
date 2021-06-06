import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './item-ingredient.module.css'
import Price from '../Price/Price';
import PropTypes from "prop-types";

const ItemIngredient = (props) => {
    const {data, handleListItemClick} = props;
    const handleClick = () => {handleListItemClick(data)};
    return (
    <div className={style['item-ingredient']} onClick={handleClick}>
        <div className={style.counter}>
            <Counter count={1} size='default' />
        </div>
        <div className={style.img}>
            <img src={data.image} alt={data.name} />
        </div>
        <Price
            price = {data.price}
            size = 'medium'
        />
        <p className={style.name}>
            {data.name}
        </p>
    </div>
    );
};

ItemIngredient.propTypes = {
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
    }).isRequired,
    handleListItemClick: PropTypes.func
};

export default ItemIngredient;