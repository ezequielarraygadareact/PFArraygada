import { Button, TextField } from "@mui/material";
import "./FormularioCheckOut.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularioCheckOut = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
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
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este dato es obligatorio")
        .min(2, "El nombre debe tener al menos 5 caracteres")
        .max(20),
      lastName: Yup.string()
        .required("Este dato es obligatorio")
        .min(2, "El nombre debe tener al menos 5 caracteres")
        .max(15),
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
          message: "Esa no es una localidad",
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
  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit} className="FormularioCheckOut">
        <TextField
          type="text"
          label="Nombre/s"
          variant="outlined"
          error={errors.name ? true : false}
          name="name"
          onChange={handleChange}
          helperText={errors.name}
        />
        <TextField
          type="text"
          label="Apellido/s"
          variant="outlined"
          error={errors.lastName ? true : false}
          name="lastName"
          onChange={handleChange}
          helperText={errors.lastName}
        />
        <TextField
          type="text"
          label="D.N.I:"
          variant="outlined"
          error={errors.dni ? true : false}
          name="dni"
          onChange={handleChange}
          helperText={errors.dni}
        />
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          error={errors.email ? true : false}
          name="email"
          onChange={handleChange}
          helperText={errors.email}
        />
        <TextField
          type="text"
          label="Calle"
          variant="outlined"
          error={errors.street ? true : false}
          name="street"
          onChange={handleChange}
          helperText={errors.street}
        />
        <TextField
          type="text"
          label="Número"
          variant="outlined"
          error={errors.nstreet ? true : false}
          name="nstreet"
          onChange={handleChange}
          helperText={errors.nstreet}
        />
        <TextField
          type="text"
          label="Provincia"
          variant="outlined"
          error={errors.province ? true : false}
          name="province"
          onChange={handleChange}
          helperText={errors.province}
        />
        <TextField
          type="text"
          label="Localidad"
          variant="outlined"
          error={errors.location ? true : false}
          name="location"
          onChange={handleChange}
          helperText={errors.location}
        />
        <TextField
          type="text"
          label="Código Postal"
          variant="outlined"
          error={errors.cp ? true : false}
          name="cp"
          onChange={handleChange}
          helperText={errors.cp}
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
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormularioCheckOut;
