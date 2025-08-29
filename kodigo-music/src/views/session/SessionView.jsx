import { useForm } from "react-hook-form";
import { useState } from "react";

function SessionView() {
  // Hook para manejar formulario
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Estado para alternar entre login y registro
  const [mode, setMode] = useState("login"); 

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    if (mode === "login") {
      console.log("Login con:", data);
      alert("Tu Login a sido exitoso ");
    } else {
      console.log("Registro con:", data);
      alert("Tu registro fue un exito");
    }
  };

  return (
    <div className="page">
      {/* Título dinámico según el modo */}
      <h2>{mode === "login" ? "Iniciar Sesión" : "Registrarse"}</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo email */}
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", { required: "El correo es obligatorio" })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        {/* Campo contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { 
            required: "La contraseña es obligatoria", 
            minLength: { value: 6, message: "Mínimo 6 caracteres" } 
          })}
        />
        {errors.password && <span className="error">{errors.password.message}</span>}

        {/* Campo nombre y solo aparece en la vista registrarse */}
        {mode === "register" && (
          <>
            <input
              type="text"
              placeholder="Nombre completo"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </>
        )}

        {/* Botón de enviar cambia según el modo */}
        <button type="submit">
          {mode === "login" ? "Ingresar" : "Registrarse"}
        </button>
      </form>

      {/* Sección para cambiar entre login y registro */}
      <div className="toggle-auth">
        {mode === "login" ? (
          <p>
            ¿No tienes cuenta?{" "}
            <button type="button" onClick={() => setMode("register")}>
              Registrarse
            </button>
          </p>
        ) : (
          <p>
            ¿Ya tienes cuenta?{" "}
            <button type="button" onClick={() => setMode("login")}>
              Iniciar Sesión
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default SessionView;
