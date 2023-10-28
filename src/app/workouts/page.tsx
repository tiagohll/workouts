"use client";

import HeaderBottom from "@/components/HeaderBottom";
import Select from "@/components/Select";
import { useState } from "react";

const reps = [
    {
        id: 1,
        name: "12 a 15",
    },
    {
        id: 2,
        name: "10 a 12",
    },
    {
        id: 3,
        name: "8 a 10",
    },
    {
        id: 4,
        name: "12 a 15",
    },
    {
        id: 5,
        name: "10 a 12",
    },
    {
        id: 6,
        name: "8 a 10",
    },
    {
        id: 7,
        name: "10 a 15",
    },
];

export default function Workouts() {
    const [data, setData] = useState(new Date());
    const [week, setWeek] = useState("");

    const diaDaSemana = data.getDay();

    const day =
        diaDaSemana == 0
            ? "DOM"
            : ["SEG", "TER", "QUA", "QUI", "SEX", "SAB"][diaDaSemana - 1];

    const recomendation =
        day === "DOM"
            ? "DAY OFF"
            : [
                  "TREINO A",
                  "TREINO B",
                  "TREINO C",
                  "TREINO D",
                  "TREINO E",
                  "DAY OFF",
              ][diaDaSemana - 1];

    const [treino, setTreino] = useState(recomendation || "DAY OFF");

    return (
        <>
            <div className="w-full min-h-screen p-2 flex flex-col gap-2 items-center duration-300">
                <div className="bg-zinc-800 w-full flex flex-col items-center justify-center p-1 gap-2 rounded-md">
                    <span className="font-medium w-full text-lg flex items-center justify-center">
                        Está pronto para o treino de hoje?
                    </span>
                    <span>
                        Hoje é <strong>{day}</strong>
                    </span>
                    <span>
                        Treino recomendado: <strong>{recomendation}</strong>
                    </span>
                </div>
                <div className="bg-zinc-800 w-full p-1 flex flex-col items-center justify-center rounded-md gap-2">
                    <span className="font-bold text-lg">{treino}</span>
                    {treino == "DAY OFF" && (
                        <p className="text-sm text-center">
                            Vamos descansar! Você foi bem esta semana está na
                            hora de descansar para a proxima, aproveite seu DAY
                            OFF. Faça um cardio ou abdominais, opcional.
                        </p>
                    )}
                    <select
                        onChange={(e) => setWeek(e.target.value)}
                        value={week}
                        className="bg-zinc-700 w-full rounded-md p-2 outline-blue-600 border-none"
                    >
                        <option value="0">Semana 1 e 2</option>
                        <option value="1">Semana 3 e 4</option>
                        <option value="2">Semana 5 e 6</option>
                        <option value="3">Semana 7</option>
                        <option value="4">Semana 8 e 9</option>
                        <option value="5">Semana 10</option>
                        <option value="6"> Semana 11 e 12</option>
                    </select>
                    {treino != "DAY OFF" && (
                        <>
                            <div className="flex flex-col justify-start w-full">
                                <div className="flex items-center gap-1 font-medium">
                                    <span className="material-symbols-outlined">
                                        timer
                                    </span>
                                    <span>1:30</span>
                                </div>
                                <div className="flex items-center gap-1 font-medium">
                                    <span className="material-symbols-sharp">
                                        exercise
                                    </span>
                                    <span>
                                        {reps[Number(week)].name} repetições
                                    </span>
                                </div>
                            </div>

                            <div className="w-full">
                                <button className="w-full bg-blue-600 hover:scale-105 p-2 rounded-md duration-200">
                                    Iniciar
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {treino != "DAY OFF" && (
                    <div className="bg-zinc-800 w-full p-1 flex flex-col items-center justify-center rounded-md gap-2">
                        <div className="bg-zinc-700 p-1 w-full rounded-md font-medium">
                            Teste
                        </div>
                    </div>
                )}
            </div>

            <HeaderBottom />
        </>
    );
}
