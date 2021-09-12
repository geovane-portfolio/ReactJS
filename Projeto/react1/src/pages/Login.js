import React from "react";
import { connect } from 'react-redux';

function Login(props) {

    const handleGustavo = () => {
        props.setName('Gustavo');
    };

    return (
        <div>
            <h4>Página LOGIN</h4>

            Usuário: {props.name}

            <br/><br/>
            <button onClick={handleGustavo}>Trocar usuário para Gustavo</button>
        </div>
    );

}

const mapStateToProps = state => ({
    name: state.usuario.name
});

const mapDispatchToProps = dispatch => ({
    setName: (newName) => dispatch({
        type: 'SET_NAME',
        payload: { name: newName }
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login); 