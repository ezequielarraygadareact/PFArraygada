import { Button, ButtonGroup } from "@mui/material";
import "./CounterContainer.css"
import { blue } from "@mui/material/colors";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div className="contador">
      
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        style={{backgroundColor: "#2E86C1"}}
      >
        <Button onClick={restar}>-</Button>
        <h3 className="cont">{contador}</h3>
        <Button onClick={sumar}>+</Button>
        <Button onClick={onAdd}>Agregar al carrito</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
