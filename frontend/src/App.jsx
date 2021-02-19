import react from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const resultado = useSelector(state => state.operacao);
  const listaConta = useSelector(state => state.lista.contas);

  const dispatch = useDispatch();

  function somar(event){
    event.preventDefault();

    let numero = parseInt((document.getElementById('numero')).value);

    if(isNaN(numero)){
      numero = 0;
    }

    let expressao = `${resultado} + ${numero} = ${resultado+numero}`;

    dispatch( { type: "SOMAR", payload: numero} )

    dispatch( { type: "LISTAR", payload: expressao });
  }

  function subtrair(event){
    event.preventDefault();

    let numero = parseInt((document.getElementById('numero').value));

    if(isNaN(numero)){
      numero = 0;
    }

    let expressao = `${resultado} - ${numero} = ${resultado-numero}`

    dispatch({ type: "SUBTRAIR", payload: numero });

    dispatch({ type: "LISTAR", payload: expressao })
  }

  function resetar(event){
    event.preventDefault();

    dispatch({ type: "RESETAR" });

    dispatch({ type: "APAGAR" })
  }

  return (
    <div className="container mt-5 d-flex justify-content-around">
      <div style={{ height: "300px",backgroundColor: "#ddd", padding: "15px", borderRadius: "10px" }}>
        <h1 className="mb-3">Calculadora</h1>
        <form>
          <h6 className="d-flex justify-content-end px-2 py-1 bg-white">{resultado}</h6>
          <div className="form-group mt-3">
            <input className="form-control" type="number" id="numero" />
          </div>
          <div className="d-flex justify-content-around">
            <button onClick={somar} className="btn btn-primary px-4">
              Somar
          </button>
            <button onClick={subtrair} className="btn btn-warning px-4">
              Subtrair
          </button>
          </div>
          <button onClick={resetar} className="mt-4 btn btn-secondary w-100">
            Resetar
          </button>
        </form>
      </div>

      <div>
        <h2>Operações realizadas: </h2>
        <ul className="list-group mt-3">
          {listaConta.map((element, index) => {
            return (
              <li key={index} className="list-group-item">{element}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;