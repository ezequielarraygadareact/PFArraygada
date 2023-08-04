import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="list">
      {items.map((elemento) => {
        return (
          <div key={elemento.id}>
            <Card className="card">
              <CardMedia component="img" height="250" image={elemento.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elemento.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elemento.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {elemento.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/itemDetail/${elemento.id}`}>
                  <Button size="small">Ver detalle</Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
