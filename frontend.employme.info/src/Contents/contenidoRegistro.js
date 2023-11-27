import React from "react";
import "../secciones/registro.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const contenidoRegistro = () => {
  const validationSchema = Yup.object().shape({
    nombres: Yup.string().required('Campo obligatorio'),
    apellidos: Yup.string().required('Campo obligatorio'),
    fechaNacimiento: Yup.date().required('Campo obligatorio'),
    email: Yup.string().email('Correo electrónico inválido').required('Campo obligatorio'),
    pass: Yup.string().required('Campo obligatorio'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('pass'), null], 'Las contraseñas deben coincidir')
      .required('Campo obligatorio'),
    telefono: Yup.number().min(11).required('Campo obligatorio'),
    tipoDeUsuario: Yup.string().required('Seleccione un tipo de usuario'),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const { nombres, apellidos, fechaNacimiento, email, pass, telefono, tipoDeUsuario } = values;
    const usuarioData = { nombres, apellidos, fechaNacimiento, email, telefono, tipoDeUsuario };
    const loginData = { email, pass } ;

    axios
      .post('http://localhost:5000/usuarios/create', usuarioData)
      .then((res) => {
        console.log(res);
        axios.post('http://localhost:5000/login/create', loginData)
          .then((res) => {
            console.log(res);
            alert(res.data.message); // Aquí podrías mostrar algún mensaje de éxito al usuario
            resetForm(); // Limpiar el formulario después de enviar la solicitud con éxito
          })
          .catch((err) => {
            console.log(err);
            // Aquí podrías mostrar algún mensaje de error al usuario
          });
      })
      .catch((err) => {
        console.log(err);
        // Aquí podrías mostrar algún mensaje de error al usuario
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        email: '',
        pass: '',
        confirmPassword: '',
        telefono: '',
        tipoDeUsuario: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="nombres" placeholder="Nombres" />
          <ErrorMessage name="nombres" component="div" className="error-message" />

          <Field type="text" name="apellidos" placeholder="Apellidos" />
          <ErrorMessage name="apellidos" component="div" className="error-message" />

          <Field type="date" name="fechaNacimiento" placeholder="Fecha de nacimiento" />
          <ErrorMessage name="fechaNacimiento" component="div" className="error-message" />

          <Field type="email" name="email" placeholder="Correo electrónico" />
          <ErrorMessage name="email" component="div" className="error-message" />

          <Field type="password" name="pass" placeholder="Contraseña" />
          <ErrorMessage name="password" component="div" className="error-message" />

          <Field type="password" name="confirmPass" placeholder="Confirmar Contraseña" />
          <ErrorMessage name="confirmPassword" component="div" className="error-message" />

          <Field type="tel" name="telefono" placeholder="Teléfono" />
          <ErrorMessage name="telefono" component="div" className="error-message" />

          <Field as="select" name="tipoDeUsuario">
            <option value="">Seleccione un tipo de usuario</option>
            <option value="Candidato">Candidato</option>
            <option value="Reclutador">Reclutador</option>
          </Field>
          <ErrorMessage name="tipoDeUsuario" component="div" className="error-message" />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Registrarse'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default contenidoRegistro;
