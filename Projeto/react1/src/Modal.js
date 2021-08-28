import React, { useState } from 'react';
import styled from 'styled-components';


const ModalBackground = styled.div`
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:90;
    background-color:rgba(255, 255, 255, 0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ModalArea = styled.div`
    background-color:#555;
    padding:10px;
`;

function Modal(props) {

    const handleBackgroundClick = () => {
        props.setVisible(false);
    }
    
    return (
        <>
        {props.visible === true &&
            <ModalBackground onClick={handleBackgroundClick}>
                <ModalArea>
                    {props.children}
                </ModalArea>
            </ModalBackground>
        }
        </>
    );
}

export default Modal;