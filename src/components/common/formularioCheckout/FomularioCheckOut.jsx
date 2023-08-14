import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularioCheckOut = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      dni: "",
      email: "",
      adress: "",
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
      adress: Yup.string()
        .required("Este dato es obligatorio")
        .matches(/^[#.0-9a-zA-Z\s,-]+$/, {
          message: "Esa no es una dirección valida",
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
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
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
          label="Dirección"
          variant="outlined"
          error={errors.adress ? true : false}
          name="adress"
          onChange={handleChange}
          helperText={errors.adress}
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
