import { useForm } from "react-hook-form";

function RegisterForm() {
  // Inicializa el formulario con react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    console.log("Registro:", data);
    alert(" Tu Registro fue Exitoso");
  };

  return (
    // handleSubmit valida los campos antes de ejecutar onSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Registro</h3>

      {/* Nombre de usuario */}
      <input
        placeholder="Nombre de usuario"
        {...register("username", { required: "El nombre es obligatorio" })}
      />
      {errors.username && <span>{errors.username.message}</span>}

      {/* Email */}
      <input
        placeholder="Email"
        {...register("email", { required: "El email es obligatorio" })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      {/* Contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: "Contraseña requerida" })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;
