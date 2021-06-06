import React from 'react';
import * as ReactDOM from 'react-dom';
import style from './modal.module.css'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from "prop-types";

const Modal = (props) => {
    const {children, header, onClose} = props;
    const modalRoot = document.getElementById('modals');
    return (
        modalRoot &&
        ReactDOM.createPortal(
            <>
                <div className={style.modal}>
                    <div className={style.header}>
                        {header &&
                            <div>{header}</div>
                        }
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

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    header: PropTypes.string,
    onClose: PropTypes.func.isRequired
};

export default Modal;