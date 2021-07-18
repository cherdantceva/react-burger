import {Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import style from './item-ingredient.module.css'
import Price from '../Price/Price';
import PropTypes from "prop-types";


const ItemIngredient = (props) => {
    const {item, handleListItemClick} = props;
    const { ingredients } = useSelector((store) => store.burgerConstructor);
    const { bun } = useSelector((store) => store.burgerConstructor);

    const handleClick = () => {handleListItemClick(item)};
    const [{ opacity }, dragRef] = useDrag({
        type: "ingredient",
        item: item,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });
    return (
    <div
        className={style['item-ingredient']}
        onClick={handleClick}
        ref={dragRef}
        style={{ opacity }}
    >
        <div className={style.counter}>
            <Counter count={bun === null ? (ingredients.filter((ingredient) => ingredient._id === item._id).length) : (bun._id === item._id
                ? 2 : ingredients.filter((ingredient) => ingredient._id === item._id).length)}
                     size="default" />
        </div>
        <div className={style.img}>
            <img src={item.image} alt={item.name} />
        </div>
        <Price
            price = {item.price}
            size = 'medium'
        />
        <p className={style.name}>
            {item.name}
        </p>
    </div>
    );
};

ItemIngredient.propTypes = {
    item: PropTypes.shape({
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