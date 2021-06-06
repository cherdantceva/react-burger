import style from './price.module.css'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames'
import PropTypes from "prop-types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const Price = (props) => {
    const {price, size} = props;
    const priceClass = cn( {
        [style.price]: true,
        [style.price_big]: size === 'big',
    });

    const textClass = cn( {
        [style.text]: true,
        [style.text_big]: size === 'big',
    });

    const iconClass = cn( {
        [style.icon]: true,
        [style.icon_big]: size === 'big',
    });
    return (
        <div className={priceClass}>
            <div className={textClass}>{price}</div>
            <div className={iconClass}>
                <CurrencyIcon />
            </div>
        </div>
    );
};

ModalOverlay.propTypes = {
    price: PropTypes.string,
    size: PropTypes.string
};

export default Price;