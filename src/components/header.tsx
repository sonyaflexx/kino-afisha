import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between py-12">
            <Link href={'/'} className="font-bold text-2xl">ЧТО ГЛЯНУТЬ?</Link>
            <nav className="flex flex-1">
                <input 
                    type="text" 
                    className="flex-1 mx-24 border-solid border-4 border-zinc-700 rounded-full px-4 py-2 outline-none bg-transparent" 
                    placeholder="Чего хотите?"
                />
                <button className="s bg-orange-500 py-3 px-7 font-semibold rounded-full hover:bg-orange-400">Войти</button>
            </nav>
        </header>
    );
};

export default Header;