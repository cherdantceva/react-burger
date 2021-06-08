import React, { useCallback, useEffect } from 'react';
import style from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = (props) => {
    const {onClose} = props;
    const closeEsc = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', closeEsc, false);

        return () => {
            document.removeEventListener('keydown', closeEsc, false);
        };
    }, [closeEsc]);

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