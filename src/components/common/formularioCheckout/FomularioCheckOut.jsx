import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
// Logica
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";



const FormularioCheckOut = () => {

  const { cart, getTotalPrice } =
  useContext(CartContext);

  const [orderID, setOrderID] = useState("");

   let {errors} = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      dni: "",
      email: "",
      street: "",
      nstreet: "",
      province: "",
      location: "",
      cp: "",
      phone: "",
    },


    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este dato es obligatorio")
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(20),
      lastName: Yup.string()
        .required("Este dato es obligatorio")
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .max(30),
      dni: Yup.string()
        .required("Este dato es obligatorio")
        .matches(/^\d{1,2}\.?\d{3}\.?\d{3}$/, {
          message: "Debe ser un numedo de D.N.I. correcto",
        }),
      email: Yup.string()
        .email('Este no es un formato de Emial (debe contener "@"" y "."')
        .required("Este dato es obligatorio"),
      street: Yup.string()
        .required("Este dato es obligatorio")
        .matches(/^[#.0-9a-zA-Z\s,-]+$/, {
          message: "Esa no es una calle valida",
        }),
      nstreet: Yup.string()
        .required("Este dato es obligatorio")
        .matches(/^[#.0-9\s,-]+$/, {
          message: "Ese no es un número valido",
        }),
      province: Yup.string().required("Este dato es obligatorio"),
      // .matches(/^$/, {
      //   message: "Esa no es una provincia",
      // }),
      location: Yup.string().required("Este dato es obligatorio"),
      // .matches(/^$/, {
      //   message: "Esa no es una localidad",
      // }),
      cp: Yup.string()
        .required("Este dato es obligatorio")
        .matches(/^\d{1,4}$/, {
          message: "Ese no es un código postal valido, poner solo los 4 números.",
        }),
      phone: Yup.string()
        .required("Este dato es obligatorio")
        .matches(/^\d{1,3} ?\d{6,8}$/, {
          message:
            "Por favor poner su telefono con el codigo de area sin el 15",
        }),
    }),
    validateOnChange: false,
  });


  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(order)
 };
  const handleChange = (evento) => {
   setData({ ...data, [evento.target.name]: evento.target.value });
 };

  const [data, setData] = useState({
    name: "",
    lastName: "", 
    dni: "",
    email: "",      
    street: "",
    nstreet: "",
    province: "",
    location: "",      
    cp: "",
    phone: "",
  });

  let total = getTotalPrice()


let order = {
  buyer: data,
  items: cart,
  total,
};




  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px"}}>
        <TextField
          type="text"
          label="Nombre/s"
          variant="outlined"
          error={errors.name ? true : false}
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="Apellido/s"
          variant="outlined"
          error={errors.lastName ? true : false}
          name="lastName"
          onChange={handleChange}
          helperText={errors.lastName}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="D.N.I:"
          variant="outlined"
          error={errors.dni ? true : false}
          name="dni"
          onChange={handleChange}
          helperText={errors.dni}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          error={errors.email ? true : false}
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="Calle"
          variant="outlined"
          error={errors.street ? true : false}
          name="street"
          onChange={handleChange}
          helperText={errors.street}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="Número"
          variant="outlined"
          error={errors.nstreet ? true : false}
          name="nstreet"
          onChange={handleChange}
          helperText={errors.nstreet}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="Provincia"
          variant="outlined"
          error={errors.province ? true : false}
          name="province"
          onChange={handleChange}
          helperText={errors.province}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="Localidad"
          variant="outlined"
          error={errors.location ? true : false}
          name="location"
          onChange={handleChange}
          helperText={errors.location}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="Código Postal"
          variant="outlined"
          error={errors.cp ? true : false}
          name="cp"
          onChange={handleChange}
          helperText={errors.cp}
          style={{marginBottom:"1%"}}
        />
        <TextField
          type="text"
          label="Teléfono"
          variant="outlined"
          error={errors.phone ? true : false}
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
        />
        <Button type="submit" variant="contained" style={{marginTop:"2%"}}>
          Finalizar compra 
        </Button>
      </form>
    </div>
  );
};

export default FormularioCheckOut;
