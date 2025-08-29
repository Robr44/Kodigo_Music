import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SessionView() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLogin, setIsLogin] = useState(true); // 👈 booleano en vez de "login/register"
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (isLogin) {
      alert("Tu Login fue exitoso");
      console.log("Login:", data);
      navigate("/home");
    } else {
      alert("Tu Registro fue un Exito");
      console.log("Registro:", data);
      setIsLogin(true); // volver al login
      navigate("/");
    }
  };

  return (
    <div className="page">
      <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", { required: "El correo es obligatorio" })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: { value: 6, message: "Mínimo 6 caracteres" }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

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
