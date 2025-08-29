import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SessionView({ setIsAuth }) {
  // registrar inputs y manejar errores
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre "Iniciar Sesión" y "Registrarse"
  const navigate = useNavigate(); // Para navegar entre rutas después de login

   // Se ejecuta cuando el usuario envía el formulario
  const onSubmit = (data) => {
    // Si es loguearse
    if (isLogin) {
      alert("Tu Login fue exitoso");
      console.log("Login:", data);
      setIsAuth(true);   // habilita la sesión
      navigate("/home"); // redirige al home
    } else {
      // si es registrarse
      alert("Tu Registro fue un Exito");
      console.log("Registro:", data);
      setIsLogin(true);
      // después de registrarse redirigir al login
      setIsAuth(false);
      navigate("/");
    }
  };

  return (
    <div className="page">
      {/* Título dinámico según el modo que se tiene*/}
      <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>

    {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)}>
         {/* Campo Email */}
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", { required: "El correo es obligatorio" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
         {/* Campo contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: { value: 6, message: "Mínimo 6 caracteres" }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

      {/* el campo nombre solo se muestra cuando es Registro */}
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Nombre completo"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </>
        )}

        {/* Botón dinámico Ingresar o Registrarse */}
        <button type="submit">{isLogin ? "Ingresar" : "Registrarse"}</button>
      </form>

      <div className="toggle-auth">
        {isLogin ? (
          <p>
            ¿No tienes cuenta?{" "}
            <button type="button" onClick={() => setIsLogin(false)}>
              Registrarse
            </button>
          </p>
        ) : (
          <p>
            ¿Ya tienes cuenta?{" "}
            <button type="button" onClick={() => setIsLogin(true)}>
              Iniciar Sesión
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default SessionView;
