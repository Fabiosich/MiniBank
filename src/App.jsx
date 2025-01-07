import { useState, useReducer } from "react";

export default function App() {
  // Função reducer para gerenciar o estado do saldo
  function reducer(state, action) {
    if (action.type == "add") {
      // Adiciona o valor ao saldo atual
      return { ...state, balance: state.balance + action.payload };
    }
    return state;
  }

  // Inicializa o estado com useReducer
  const [state, dispatch] = useReducer(reducer, { balance: 0 });

  // Estado local para armazenar o valor do input
  const [amount, setAmount] = useState(0);

  return (
    <div>
      {/* Exibe o saldo atual */}
      {state.balance}
      {/* Input para inserir o valor a ser adicionado */}
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      {/* Botão para adicionar o valor ao saldo */}
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Add Amount
      </button>
    </div>
  );
}
