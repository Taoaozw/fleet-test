import {useState} from "react";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleToggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={'bg-primary-light dark:bg-primary-dark text '}>
            
        </div>
    );
}

export default App
