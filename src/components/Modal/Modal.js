import React from 'react';
import * as ReactDOM from 'react-dom';
import style from './modal.module.css'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const Modal = (props) => {
    const {children, header, onClose} = props;
    const modalRoot = document.getElementById('modals');
    return (
        modalRoot &&
        ReactDOM.createPortal(
            <>
                <div className={style.modal}>
                    <div className={style.header}>
                        {header && <span>{header}</span>}
                        <div className={style.close}>
                            <CloseIcon onClick={onClose} type={'primary'} />
                        </div>
                    </div>
                    {children}
                </div>
                <ModalOverlay onClose={onClose} />
            </>,
            modalRoot
        )
    );
}

export default Modal;