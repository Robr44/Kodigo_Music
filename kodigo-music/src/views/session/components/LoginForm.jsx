import { useForm } from "react-hook-form";

function LoginForm() {
  // Inicializa el formulario con react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = (data) => {
    console.log("Datos de login:", data);
    alert("Login ha sido exitoso");
  };

  return (
    // handleSubmit valida los campos antes de llamar a onSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Iniciar Sesión</h3>

      {/* Campo de email */}
      <input
        placeholder="Email"
        {...register("email", { required: "El email es obligatorio" })}
      />
      {/* Mensaje de error si falta el email */}
      {errors.email && <span>{errors.email.message}</span>}

      {/* Campo de contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: "La contraseña es obligatoria" })}
      />
      {/* Mensaje de error si falta la contraseña */}
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Ingresar</button>
    </form>
  );
}

export default LoginForm;
