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

                <div className={`absolute bottom-0 w-[200%] h-[200%] transition-all duration-[1s] blackBlock ${animationState.blackBlock}`}></div>
            </article>
            

        </div>
    );
}

export default Login;