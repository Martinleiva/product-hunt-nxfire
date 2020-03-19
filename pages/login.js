import React, { useState } from 'react';
import { css } from '@emotion/core'
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit,Error } from '../components/ui/Formulario';
import {} from '../validacion/validarCrearCuenta';

import firebase from '../firebase';

//Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';

const STATE_INICIAL = {
  email: '',
  password: ''
}


const Login = () => {

  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur } = 
  useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);
  
  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario', error.message);
      guardarError(error.message);
      
    }
  
  }

  return(
    <div className="container">
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Iniciar Sesión</h1>
          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >
              <Campo>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Tu Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
              </Campo>

              {errores.email && <Error>{errores.email}</Error>}

              <Campo>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
              </Campo>

              {errores.password && <Error>{errores.password}</Error>}

              {error && <Error>{error}</Error>}

              <InputSubmit type="submit" value="iniciar Sesión" /> 

          </Formulario>
        </>
      </Layout>
    </div>

  );
}

export default Login;