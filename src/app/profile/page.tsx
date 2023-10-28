import HeaderBottom from "@/components/HeaderBottom";
import { User } from "@/components/Icons";

export default function Profile() {
    return (
        <>
            <div className="w-full min-h-screen p-2 flex flex-col gap-2 items-center duration-300">
                <div className="bg-zinc-800 w-full flex p-1 gap-2 rounded-md">
                    <div className="bg-zinc-700 p-1 rounded-md">
                        <User color="white" size={60} />
                    </div>
                    <div className="flex flex-col p-1">
                        <span className="font-bold">Tiago Henrique</span>
                        <span className="text-zinc-300 text-sm">
                            @tiagohenrique
                        </span>
                    </div>
                </div>

                <div className="flex w-full gap-2">
                    <div className="bg-zinc-800 w-full flex flex-col p-1 rounded items-center justify-center">
                        <span>Seu peso:</span>
                        <span className="font-bold">72kg</span>
                    </div>
                    <div className="bg-zinc-800 w-full flex flex-col p-1 rounded items-center justify-center">
                        <span>Sua altura:</span>
                        <span className="font-bold">180 cm</span>
                    </div>
                </div>

                <div className="border w-full rounded-md p-2 flex flex-col border-zinc-600 items-center">
                    <span>Você ainda não treinou hoje!</span>
                    <button className="bg-blue-600 hover:scale-105 p-2 rounded-md duration-200">
                        Começar o treino
                    </button>
                </div>
                <div className="flex flex-wrap bg-zinc-800 w-full gap-2 p-1 rounded-md">
                    <div className="bg-zinc-700 w-full flex flex-col p-1 rounded items-center justify-center">
                        <span>Peitoral:</span>
                        <span className="font-bold">94 cm</span>
                    </div>
                    <div className="bg-zinc-700 w-full flex flex-col p-1 rounded items-center justify-center">
                        <span>Ombro:</span>
                        <span className="font-bold">103 cm</span>
                    </div>
                    <div className="bg-zinc-700 w-full flex flex-col p-1 rounded items-center justify-center">
                        <span>Braço:</span>
                        <span className="font-bold">35.3 cm</span>
                    </div>
                    <div className="bg-zinc-700 w-full flex flex-col p-1 rounded items-center justify-center">
                        <span>Antebraço:</span>
                        <span className="font-bold">31.0 cm</span>
                    </div>
                    <div className="bg-zinc-700 w-full flex flex-col p-1 rounded items-center justify-center">
                        <span>Cintura:</span>
                        <span className="font-bold">72 cm</span>
                    </div>
                    <div className="bg-zinc-700 w-full flex flex-col p-1 rounded items-center justify-center">
                        <span>Quadril:</span>
                        <span className="font-bold">90 cm</span>
                    </div>
                </div>

                <div className="border w-full rounded-md p-2 flex flex-col border-zinc-600 items-center">
                    <div className="items-center justify-center flex gap-1">
                        <span className="material-symbols-outlined">info</span>
                        <span>Site desnvolvido por tiagohll Services</span>
                    </div>

                    <button className="bg-blue-600 hover:scale-105 p-2 rounded-md duration-200">
                        Saiba mais
                    </button>
                </div>
            </div>

            <HeaderBottom />
        </>
    );
}
