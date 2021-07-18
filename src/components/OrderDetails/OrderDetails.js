import React from 'react';
import { useSelector } from 'react-redux';
import style from './order-details.module.css';
import done from '../../images/done.png';

const OrderDetails = () => {
    const { orderId } = useSelector((state) => state.order);
    return (
        <div className={style['order-details']}>
            <div className={style.summ}>{orderId}</div>
            <div className={style.text}>Идентификатор заказа</div>
            <img className={style.img} src={done} alt='order done' />
            <span className='text text_type_main-default mb-2'>
        Ваш заказ начали готовить
      </span>
            <span className='text text_type_main-default text_color_inactive mb-30'>
        Дождитесь готовности на орбитальной станции
      </span>
        </div>
    );
}

export default OrderDetails;