import React from 'react';
import style from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = (props) => {
    const {onClose} = props;


    return (
        <>
            <div
                onClick={onClose}
                className={style['modal-overlay']}
            />
        </>
    );
}
ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default ModalOverlay;