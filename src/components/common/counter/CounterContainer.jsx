import Counter from "./counter";
import { useState } from "react";
import "./CounterContainer.css"
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : 
      Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Cantidad máxima',
      showConfirmButton: false,
      timer: 950,
    });;
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <Counter
      contador={contador}
      sumar={sumar}
      restar={restar}
      onAdd={() => onAdd(contador)}
    />
  );
};

export default CounterContainer;
