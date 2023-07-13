import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemDetail = ({ producto }) => {
  return (
    <div key={producto.id}>
      <div>
        <Card className="card">
          <CardMedia component="img" height="250" image={producto.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {producto.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Comprar</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
