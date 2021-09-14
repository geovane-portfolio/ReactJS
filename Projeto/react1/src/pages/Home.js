import React from "react";
import {  useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Home() {// remover props
    let history = useHistory();

    const dispatch = useDispatch();

    // Uso moderno, sem precisar das props
    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre');
        }, 2000)
    };
    
    const handleGeovane = () => {
       // props.setName('Geovane');
       dispatch({
           type: 'SET_NAME',
           payload: { name: 'Geovane' }
       });
    };
    
    const handleIncrement = () => {
       // props.increment();
       dispatch({
           type: 'INCREMENT_CONTADOR'
       });
    };

    return (
        <div>
            <h4>Página Home</h4>

            {/* NOME: {props.name}<br/> remover props*/}
            NOME: {name}<br/>
            CONTAGEM: {contador}<br/><br/>

            <button onClick={handleGeovane}>Setar Nome para Geovane</button>
            <button onClick={handleIncrement}>+1</button>

            <br/><br/>
            <button onClick={handleButton}>Ir para a página SOBRE</button>
        </div>
    );
}

/*  Método antigo *trocar o useSelector por 'connect' sem props

const mapStateToProps = (state) => {
    return {
        //Retira o valor de 'usuario' de 'reducers/index'
        name: state.usuario.name,
        contador: state.usuario.contador
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name:newName }
        }),

        increment: () => dispatch({
            type: 'INCREMENT_CONTADOR'
        })
    };

    
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
*/

export default Home;