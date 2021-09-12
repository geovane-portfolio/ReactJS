import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import Modal from './Modal';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';
import Login from './pages/Login';

/*function BemVindo(props) {
  return <h1>Olá, {props.nome}! Você tem {props.idade} anos.</h1>;
}

function App() {

  return <>
    <BemVindo nome="Geovane" idade="32"/>
    <BemVindo nome="Pedro" idade="21"/>
    <BemVindo nome="Gustavo" idade="3"/>
  </>;
}*/

//----------------------------------------------------------

// 2 
/*
function Avatar(props) {
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <br/>
      <span>{props.name}</span>
    </div>
  );
}

function App2() {
  let user = {
    url:"https://www.google.com.br/google.jpg",
    name: "Geoaven de Sá"
  };

  return <>
    <Avatar url={user.url} name={user.name} />
  </>;
}


export default App;
export default App2;

*/

// Desafio Platanus 1 -------------------------------------

/*

// Receber numeros 
let numeros = [5,3,2,4,7,1,0,6];
let numeros2 = [];

numeros.sort();// ordena os numeros em crescente.

console.log(numeros);// resultado console


// Resultado Navegador
document.querySelector(".resultado").innerHTML= `Lista Ordenada: {${numeros}}.`;


// Adicional, capturar somente os numeros menores que 5 da lista.

numeros2 = numeros.filter(function(item){//filtra os elementos
    if(item < 5) {//condição menor que 5
        return true;
    } else {
        return false;
    }
});

let resNu2 = numeros2;// resultado console

console.log(resNu2);

document.querySelector(".resultado2").innerHTML= `Menores que 5: {${resNu2}}.`;

*/

//-------------UseState---------------------------------------
/*
function App() {

  const [ contagem, setContagem ] = useState(0);

  const botaoAction = () => {
    setContagem( contagem + 1 );
  };

  return (
    <>
      <div>{contagem} vezes</div>
      <button onClick={botaoAction}>Clique aqui</button>
    </>
  );
}

export default App;

*/

//-----------Campo input--------------------------------
/*
const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #fff
`;


function App() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleEmailInput = (e) => {
    setEmail( e.target.value );
  };

  const handlePasswordInput = (e) => {
    setPassword( e.target.value );
  };

  const handleButton = (e) => {
    alert( email+' - '+password );
  }

  return (
    <>
      <Input placeholder='Digite um e-mail' type='email' value={email} onChange={handleEmailInput} />
      <Input placeholder='Digite uma senha' type='password' value={password} onChange={handlePasswordInput} />
      <button onClick={handleButton} >Dizer</button>
    </>
  );
}

export default App; */

//-------------Condicional de exibição-----------------

/*
function App() {

  const [ email, setEmail ] = useState('');
  const [ logado, setLogado ] = useState(false);

  const handleEmailInput = (e) => {
    setEmail( e.target.value );
  };

  return (
    <>
      <Input placeholder='Digite um e-mail' type='email' value={email} onChange={handleEmailInput} />
      
      
      {email.length > 0 && 
        <p>{email.length} caractere{email.length == 1? '' : 's'}</p>
      }

      
      {logado ? <button>Sair</button> : <button>Fazer Login</button>}
    </>
  );
}

export default App;*/

//----------------Calculadora de gorjeta----------------

/*
const Title = styled.h1``;

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;

function App() {

  const [pct, setPct] = useState(10);
  const [conta, setConta] = useState(0);

  return (
    <>
      <Title>Calculadora de Gorjeta</Title>

      <p>Quanto deu a conta?</p>
      <Input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))} />
      
      <p>Qual a porcentagem de gorjeta?</p>
      <Input type="number" value={pct} onChange={(e)=>setPct(parseFloat(e.target.value))} />
      
      <hr/>

      {conta > 0 &&
        <>
          <p>Sub-total: R$ {conta}</p>
          <p>Gorjeta ({pct}%): R$ {(pct/100) * conta}</p>
          <h3>Total: R$ {conta + ((pct/100) * conta)}</h3>
        </>
      }

    </>
  );
}

export default App;*/

//---------------- useEffect -------------------------------

/*
function App() {
  const [contagem, setContagem] = useState(0);

  function aumentarAction() {
    setContagem(contagem + 1);
  }

  return (
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={aumentarAction} >Aumentar Número</button>
    </>
  );

}

export default App; */

//------------- Separando em Componentes ----------------------------

/*
function App() {

  const [searchText, setSearchText] = useState('');

  function  handleSearchInput(novoTexto) {
    setSearchText( novoTexto );
  }
  
  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox type="text" 
        frasePadrao="Faça a sua busca..."
        onChangeText={handleSearchInput}
      />

      <SearchBox type="text" 
        frasePadrao={searchText}
      />

      <hr/>

      Texto procurado: {searchText}

    </>
  );

}


export default App;*/

//------------------ Exibindo Lista -------------------------

/*
function App() {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{

    setList([
      {title:'Comprar o bolo', done:false},
      {title:'Pagar o cachorro no Petshop', done:true},
      {title:'Gravar aula', done:false}
    ]);

  },[]);
 
  function  handleSearchInput(novoTexto) {
    setSearchText( novoTexto );
  }
  
  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox type="text" 
        frasePadrao="Faça a sua busca..."
        onChangeText={handleSearchInput}
      />

      <hr/>

      <ul>
        {list.map((item, index)=>(
          <li key={index}>
            {item.done && //está feito &&=if
              <del>{item.title}</del>
            }
            {!item.done && //não está feito !=else 
             item.title} 
          </li>
        ))}
      </ul>

    </>
  );

}

export default App;*/

//------------- Adicionando Novos Itens -------------  usar no desafio 2

/*
function App() {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{

    setList([
      {title:'Comprar o bolo', done:false},
      {title:'Pagar o cachorro no Petshop', done:true},
      {title:'Gravar aula', done:false}
    ]);

  },[]);

  function addAction(newItem) {
    // ...usa conteudo de list 
    let newList = [ ...list ];
    newList.push( {title:newItem, done:false} );// adiciona elemento
    setList(newList); // insere em newList
  }
 
  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox type="text" 
        frasePadrao="Adicione um item..."
        onEnter={addAction}
      />

      <hr/>

      <ul>
        {list.map((item, index)=>(
          <li key={index}>
            {item.done && //está feito &&=if
              <del>{item.title}</del>
            }
            {!item.done && //não está feito !=else 
             item.title} 
          </li>
        ))}
      </ul>

    </>
  );

}

export default App;*/

//------------- Marcando como feito -----------------------------
/*

function App() {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(()=>{

    setList([
      {title:'Comprar o bolo', done:false},
      {title:'Pagar o cachorro no Petshop', done:true},
      {title:'Gravar aula', done:false}
    ]);

  },[]);


  function addAction(newItem) {
    // ...usa conteudo de list 
    let newList = [ ...list ];
    newList.push( {title:newItem, done:false} );// adiciona elemento
    setList(newList); // insere em newList
  }

  function handleToggleDone(index) {
    let newList = [...list];
    newList[index].done = !newList[index].done;//capitura o elemento e inverte ( ! )

    setList(newList);
  }
 
  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox type="text" 
        frasePadrao="Adicione um item..."
        onEnter={addAction}
      />

      <hr/>

      <ul>
        {list.map((item, index)=>(
          <li key={index} onClick={()=>handleToggleDone(index)} >
            {item.done && //está feito &&=if
              <del>{item.title}</del>
            }
            {!item.done && //não está feito !=else 
             item.title} 
          </li>
        ))}
      </ul>

    </>
  );

}

export default App;*/

//------- LocalStorage ----------- sem usar o SearchBox-------------


/*
function App() {

  const [name, setName] = useState( localStorage.getItem('name') );

  useEffect(()=>{

   localStorage.setItem('name', name);

  },[name]);

 
  return (
    <>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    </>
  );

}

export default App;*/

// ----------- Abrir Modal-------------

/*
function App() {

  const [modalVisible, setModalVisible] = useState(false);

  function handleButtonClick() {
    setModalVisible(true);
  }
 
  return (
    <>
      <button onClick={handleButtonClick} >Abrir Modal</button>

      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Testando 1,2,3......</h1>
      </Modal>
    </>
  );

}

export default App;*/

//------------ Router: Básico 1 ------------

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu site legal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/categoria/esportes">Esportes</Link>
            </li>
            <li>
              <Link to="/categoria/noticias">Notícias</Link>
            </li>
            <li>
              <Link to="/categoria/viagem">Viagem</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr/>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/categoria/:cat">
          <Categoria />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="*">
          <h4>Página não encontrada!</h4>
        </Route>

      </Switch>

      <hr/>
      <footer>
        Todos os direitos reservados.
      </footer>
    </BrowserRouter>
  );
}

export default App;