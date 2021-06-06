import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './item-ingredient.module.css'
import Price from '../Price/Price';

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

export default ItemIngredient;