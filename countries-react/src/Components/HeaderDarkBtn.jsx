import { useTheme } from "../context/ThemeContext"

export default function HeaderDarkBtn(){
    const { darkTheme, changeTheme } = useTheme();

    return(
        <div className={`${darkTheme ? 'bg-darkCardBg' : 'bg-white'} mb-12`}>
            <header className='header flex items-center justify-between px-16 py-7 shadow-md'>
                <h1 className="text-2xl font-semibold">Where in the world?</h1>

                <button className="font-bold" onClick={changeTheme} type="button">
                    {darkTheme ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
        </div>
    )
};