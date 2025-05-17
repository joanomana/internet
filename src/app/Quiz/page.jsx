"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const questions = [
    {
        question: "¿Qué es Internet?",
        options: [
        "Un navegador web",
        "Una red global de computadoras conectadas",
        "Una red local de dispositivos",
        "Un sitio web muy grande"
        ],
        answer: "Una red global de computadoras conectadas"
    },
    {
        question: "¿Cuál fue el nombre del proyecto militar que dio origen a Internet?",
        options: [
        "INTERNET-1",
        "MILNET",
        "WEBNET",
        "ARPANET"
        ],
        answer: "ARPANET"
    },
    {
        question: "¿Para qué sirve el navegador web?",
        options: [
        "Para enviar correos electrónicos",
        "Para ver contenido web",
        "Para crear redes locales",
        "Para conectarse al Wi-Fi"
        ],
        answer: "Para ver contenido web"
    },
    {
        question: "¿Qué papel juega el ISP en tu conexión a Internet?",
        options: [
        "Evita que tu computadora se conecte",
        "Es un virus que bloquea sitios web",
        "Conecta tu dispositivo a la red global",
        "Almacena páginas web en tu equipo"
        ],
        answer: "Conecta tu dispositivo a la red global"
    },
    {
        question: "¿Cómo viaja la información a través de Internet?",
        options: [
        "En forma de ondas de sonido",
        "Como documentos completos",
        "En paquetes pequeños de datos",
        "Mediante discos duros externos"
        ],
        answer: "En paquetes pequeños de datos"
    },
    {
        question: "¿Qué permite la Web dentro de Internet?",
        options: [
        "Conectarse a Wi-Fi",
        "Ver páginas y contenido multimedia",
        "Reparar computadoras",
        "Guardar fotos localmente"
        ],
        answer: "Ver páginas y contenido multimedia"
    },
    {
        question: "¿Qué se necesita para ver una página web?",
        options: [
        "Un procesador de texto",
        "Un navegador web y conexión a Internet",
        "Un antivirus",
        "Un cable USB"
        ],
        answer: "Un navegador web y conexión a Internet"
    }
]

export default function Quiz() {
    const [started, setStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [points, setPoints] = useState(0);

    const router = useRouter();
    const handleBack = () => {
        router.push("/");
    };

    useEffect(() => {
        if (!started || showResult) return;

        const timer = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev === 1) {
            clearInterval(timer);
            handleTimeOut();
            return 0;
            }
            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(timer);
    }, [started, currentQuestion, showResult]);

    const startQuiz = () => {
        setStarted(true);
        setPoints(0); 
        setTimeLeft(15);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        const correct = option === questions[currentQuestion].answer;
        setIsCorrect(correct);
        

        if (correct) {
        setPoints((prev) => prev + 1);
        }
        
        setShowResult(true);
    };

    const handleNext = () => {
        setSelectedOption("");
        setShowResult(false);
        setTimeLeft(10);
        if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        } else {
        Swal.fire({
            title: "Quiz Completado",
            text: `Obtuviste ${points} puntos de ${questions.length} posibles.`,
            icon: "success",
            confirmButtonText: "OK",
        });
        setStarted(false);
        setCurrentQuestion(0);
        }
    };

    const handleTimeOut = () => {
        setSelectedOption("");
        setIsCorrect(false);
        setShowResult(true);
    };

    return (
        <div
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center gap-10"
        style={{ backgroundImage: "url('/internetpng.jpg')" }}
        >
        <button
            className="px-5 py-3 bg-white shadow-lg rounded-lg hover:cursor-pointer"
            onClick={handleBack}
        >
            Back
        </button>
        <div className="bg-white p-10 rounded-lg shadow-lg w-[90%] max-w-xl">
            {!started ? (
            <>
                <h1 className="text-2xl text-orange-500 mb-6">
                Bienvenido al Quiz: ¿Cómo funciona Internet?
                </h1>
                <button
                onClick={startQuiz}
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
                >
                Iniciar
                </button>
            </>
            ) : (
            <>
                <div className="flex justify-between mb-4">
                <span className="text-gray-700 font-semibold">
                    Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-red-600 font-bold">⏱ {timeLeft}s</span>
                </div>
                <h2 className="text-xl font-bold mb-4">
                {questions[currentQuestion].question}
                </h2>

                <div className="grid gap-4 mb-4">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    disabled={showResult}
                    className={`px-4 py-2 rounded border ${
                        showResult
                        ? option === questions[currentQuestion].answer
                            ? "bg-green-200 border-green-600"
                            : option === selectedOption
                            ? "bg-red-200 border-red-600"
                            : "bg-gray-100"
                        : "hover:bg-orange-100"
                    }`}
                    >
                    {option}
                    </button>
                ))}
                </div>

                {showResult && (
                <div className="mb-4">
                    <p
                    className={`font-bold ${
                        isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                    >
                    {isCorrect ? "✅ Correcto!" : "❌ Incorrecto"}
                    </p>
                    <button
                    onClick={handleNext}
                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                    Siguiente
                    </button>
                </div>
                )}
            </>
            )}
        </div>
        </div>
    );
}
