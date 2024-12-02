import "../App.css";
import LogoArog from "../../public/ARV8.png";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Login() {
    const location = useLocation();
    // Verificar si debemos mostrar el registro inicialmente
    const showRegisterInitially = location.pathname === '/registro';

    // Modificamos el estado inicial basado en la ruta
    const [isSignUp, setIsSignUp] = useState(showRegisterInitially);
    const [animationState, setAnimationState] = useState({
        blackBlock: showRegisterInitially ? "rotate-[-57deg] left-[-115%]" : "rotate-[57deg] left-[15%]",
        loginForm: showRegisterInitially ? "invisible" : "",
        signUpForm: showRegisterInitially ? "" : "invisible",
        rightText: showRegisterInitially ? "invisible" : "",
        leftText: showRegisterInitially ? "" : "invisible"
    });

    // Efecto para manejar cambios en la ruta
    useEffect(() => {
        if (showRegisterInitially && !isSignUp) {
            handleSignUpClick();
        } else if (!showRegisterInitially && isSignUp) {
            handleLoginClick();
        }
    }, [location.pathname]);

    const handleSignUpClick = () => {
        setIsSignUp(true);
        setAnimationState({
            blackBlock: "rotate-[-57deg] left-[-115%]",
            loginForm: "animate-[hidde-left_0.5s_linear_forwards]",
            signUpForm: "animate-[appear-right_0.5s_linear_forwards]",
            rightText: "animate-[hidde-right_0.5s_linear_forwards]",
            leftText: "animate-[appear-left_0.5s_linear_forwards]"
        });

        setTimeout(() => {
            setAnimationState(prev => ({
                ...prev,
                loginForm: "invisible",
                rightText: "invisible",
                signUpForm: "",
                leftText: ""
            }));
        }, 500);
    };

    const handleLoginClick = () => {
        setIsSignUp(false);
        setAnimationState({
            blackBlock: "rotate-[57deg] left-[15%]",
            loginForm: "animate-[appear-left_0.5s_linear_forwards]",
            signUpForm: "animate-[hidde-right_0.5s_linear_forwards]",
            rightText: "animate-[appear-right_0.5s_linear_forwards]",
            leftText: "animate-[hidde-left_0.5s_linear_forwards]"
        });

        setTimeout(() => {
            setAnimationState(prev => ({
                ...prev,
                signUpForm: "invisible",
                leftText: "invisible",
                loginForm: "",
                rightText: ""
            }));
        }, 500);
    };

    return (
        <div className="bg-white font-dmSans flex font-semibold justify-center items-center h-screen">
            <article className="bg-white p-10 py-16 rounded-xl shadow-xl grid grid-cols-[300px_300px] min-w-[800px] justify-between relative overflow-hidden">
                {/* Black Block */}
                <div className={`absolute bottom-0 w-[200%] h-[200%] transition-all duration-[1s] blackBlock ${animationState.blackBlock}`}>
                </div>

                {/* Login Form */}
                <form className={`grid gap-10 relative z-10 row-start-1 col-start-1 ${animationState.loginForm}`}>
                    <h2 className="text-2xl font-bold after:block after:w-2/5 after:h-1 after:bg-verde-principal after:rounded-full after:mx-auto after:mt-1 text-center mb-2 text-zinc-600">
                        Inicia Sesión
                    </h2>

                    <fieldset className="relative border-b-2 border-zinc-600 hover:border-verde-principal focus:border-verde-principal flex items-center">
                        <input className="outline-none peer flex-1 bg-transparent h-full font-normal" type="text" placeholder="  " id="username" />
                        <label className="absolute left-0 peer-focus:-translate-y-6 peer-focus:text-verde-principal transition-all text-zinc-600"
                            htmlFor="username">Correo</label>
                        <i className="bx bxs-user text-verde-principal"></i>
                    </fieldset>

                    <fieldset className="relative border-b-2 border-zinc-600 flex items-center transition-colors hover:border-verde-principal">
                        <input className="outline-none peer flex-1 bg-transparent h-full" placeholder="  " type="password" id="password" />
                        <label className="absolute left-0 peer-focus:-translate-y-6 peer-focus:text-verde-principal transition-all text-zinc-600"
                            htmlFor="password">Contraseña</label>
                        <i className="bx bxs-lock-alt text-verde-principal"></i>
                    </fieldset>

                    <button className="bg-verde-principal rounded-lg text-white py-2 hover:scale-105 transition-transform h-10">
                        Iniciar Sesión
                    </button>

                    <span className="font-normal text-zinc-600">
                        No tiene una cuenta?
                        <button type="button" onClick={handleSignUpClick} className="font-bold text-verde-principal">
                            Registrarse
                        </button>
                    </span>
                </form>

                {/* Right Text */}
                <div className={`text-end max-w-[250px] ml-auto flex flex-col justify-center gap-4 text-white relative z-10 row-start-1 col-start-2 ${animationState.rightText}`}>
                    <div className="object-contain rounded-full contain p-0">
                        <img className="images" src={LogoArog} alt="" />
                    </div>
                </div>

                {/* Left Text */}
                <div className={`text-start max-w-[250px] mr-auto flex flex-col justify-center gap-4 text-white relative z-10 row-start-1 col-start-1 ${animationState.leftText}`}>
                    <div className="object-contain">
                        <img className="images" src={LogoArog} alt="" />
                    </div>
                </div>

                {/* Sign Up Form */}
                <form className={`grid gap-10 relative z-10 row-start-1 col-start-2 ${animationState.signUpForm}`}>
                    <h2 className="text-2xl font-bold after:block after:w-2/5 after:h-1 after:bg-verde-principal after:rounded-full after:mx-auto after:mt-1 text-center mb-2">
                        Registrarse
                    </h2>

                    <fieldset className="relative border-b-2 border-zinc-600 hover:border-verde-principal pb-2 flex items-center">
                        <input className="outline-none peer flex-1 bg-transparent h-full font-normal" type="text" id="nombreCompleto" placeholder=" "/>
                        <label className="absolute left-0 peer-focus:-translate-y-6 peer-focus:text-verde-principal transition-all"
                            htmlFor="nombreCompleto">Nombre completo</label>
                        <i className="bx bxs-user text-verde-principal"></i>
                    </fieldset>

                    <fieldset className="relative border-b-2 border-zinc-600 hover:border-verde-principal pb-2 flex items-center">
                        <input className="outline-none peer flex-1 bg-transparent font-normal" type="email" id="emailRegistro" placeholder=" "/>
                        <label className="absolute left-0 peer-focus:-translate-y-6 peer-focus:text-verde-principal transition-all"
                            htmlFor="emailRegistro">Correo</label>
                        <i className="bx bxs-user text-verde-principal"></i>
                    </fieldset>

                    <fieldset className="relative border-b-2 border-zinc-600 hover:border-verde-principal pb-2 flex items-center">
                        <input className="outline-none peer flex-1 bg-transparent font-normal" type="password" id="passwordRegister" placeholder="  "/>
                        <label className="absolute left-0 peer-focus:-translate-y-6 peer-focus:text-verde-principal transition-all"
                            htmlFor="passwordRegister">Contraseña</label>
                        <i className="bx bxs-lock-alt text-verde-principal"></i>
                    </fieldset>

                    <button className="bg-verde-principal rounded-lg text-white h-10 py-2 hover:scale-105 transition-transform">
                        Registrarse
                    </button>

                    <span className="font-normal">
                        Ya tienes una cuenta?
                        <button type="button" onClick={handleLoginClick} className="text-verde-principal font-bold">
                            Inicia Sesión
                        </button>
                    </span>
                </form>
            </article>
        </div>
    );
}

export default Login;