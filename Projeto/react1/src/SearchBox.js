import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border:2px solid #fff;
    border-radius:5px;
    padding:15px;
    font-size:17px;
    width:300px;
    color:#fff;
    margin:5px 0px 5px 20px;
    background-color:#282c34;
`;

/*
function SearchBox(props) {

    return (
        <InputText type="text" placeholder={props.frasePadrao ?? "Digite alguma coisa"}/>
    );
}

export default SearchBox;
*/

//---------------- Trocando dados entre Componentes ----------------------

/*
function SearchBox(props) {

    const [texto, setTexto] = useState('');

    useEffect( ()=> {
        if(props.onChangeText) {
            props.onChangeText(texto);
        }
    }, [texto]);


    return (
        <InputText type="text" 
        value={texto} // ao colocar value, o input não rece mais o texto
        onChange={(e) => setTexto(e.target.value)} // função recebe texto teclado
        placeholder={props.frasePadrao ?? "Digite alguma coisa"}/>

    );
}

export default SearchBox; */

//--------------------- Adicionando Novos Itens --------------------


function SearchBox(props) {

    const [texto, setTexto] = useState('');

    function handleKayUp(e) {
        if(e.keyCode == 13) { // Se apertar o enter
            if(props.onEnter) {
                props.onEnter( texto ); // insere o texto
            }
            setTexto(''); // limpa o campo
        }
    }


    return (
        <InputText type="text" 
        value={texto} // ao colocar value, o input não rece mais o texto
        onChange={(e) => setTexto(e.target.value)} // função recebe texto teclado
        onKeyUp={handleKayUp}
        placeholder={props.frasePadrao ?? "Digite alguma coisa"}/>

    );
}

export default SearchBox;

//----------------


