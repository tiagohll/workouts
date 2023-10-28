import Link from "next/link";

export default function HeaderBottom() {
    return (
        <div className="w-full absolute bottom-0 duration-300">
            <div className="bg-zinc-800 p-1 flex items-center justify-center gap-2">
                <Link
                    href="/profile"
                    className="font-medium flex flex-col items-center p-1 bg-zinc-700 rounded-md text-white"
                >
                    <span className="material-symbols-outlined">home</span>
                    <span>Início</span>
                </Link>
                <Link
                    href="/profile"
                    className="font-medium flex flex-col items-center p-1 bg-zinc-700 rounded-md text-white"
                >
                    <span className="material-symbols-outlined">
                        account_circle
                    </span>
                    <span>Perfil</span>
                </Link>
                <Link
                    href="/workouts"
                    className="font-medium flex flex-col items-center p-1 bg-zinc-700 rounded-md text-white"
                >
                    <span className="material-symbols-outlined">exercise</span>
                    <span>Treinos</span>
                </Link>
            </div>
        </div>
    );
}
