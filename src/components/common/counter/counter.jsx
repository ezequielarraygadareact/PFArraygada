import { Button, ButtonGroup } from "@mui/material";
import "./CounterContainer.css"

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div className="contador">
      <h3 className="cont">{contador}</h3>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={restar}>-</Button>
        <Button onClick={sumar}>+</Button>
        <Button onClick={onAdd}>Agregar al carrito</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
