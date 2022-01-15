import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function FormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //Funcion que maneja los datos de los inputs
  const onSubmit = (data, event) => {
    console.log(data);
    event.target.reset();
  };

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col sm={4}>
            <h1 className="pt-5 ">Iniciar sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="pt-3">Correo</label>
              {/* Input del email, que es obligatorio y valida con una expresión regular que sea un correo electronico */}
              <input
                name="email"
                className="form-control my-2"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "El correo es necesario",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto",
                  },
                })}
              />
              {/* Se maneja el error de correo y se imprime en pantalla  */}
              {errors.correo && (
                <span className="text-danger text-small d-block">
                  {errors.correo.message}
                </span>
              )}

              <label className="pt-2">Contraseña</label>
              {/* Input de la contraseña, que es obligatorio y valida que tenga mas de 6 caracteres */}

              <input
                name="password"
                type="password"
                className="form-control my-2"
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es necesario",
                  },
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
              />
              {/* Se maneja el error de contraseña y se imprime en pantalla  */}
              {errors.password && (
                <span className="text-danger text-small d-block">
                  {errors.password.message}
                </span>
              )}
              <label className="pt-2">Nickname</label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                name="nickname"
                className="form-control my-2"
                {...register("nickname", { required: true })}
              />
              {/* Input del nickname que es necesario  */}
              {errors.nickname && (
                <span className="text-danger text-small d-block">
                  El nickname es necesario
                </span>
              )}
              {/* es necesario colocar el type submit para que se active onSubmit */}
              <Button type="submit" className="btn btn-primary">
                Enviar
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
