import { Button, ButtonGroup } from "@mui/material";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div>
      <h3>{contador}</h3>
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
