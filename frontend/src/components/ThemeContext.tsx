import { createContext, useState, useContext, useEffect } from 'react';

interface ThemeContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    toggleMenu: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'light';
    });

    const [isOpen, setIsOpen] = useState(() => {
        const savedNav = localStorage.getItem('nav');
        return savedNav === 'open';
    });

    useEffect(() => {
        const body = document.body;

        if (isOpen) {
            body.classList.add('nav-closed');
            localStorage.setItem('nav', 'open');
        } else {
            body.classList.remove('nav-closed');
            localStorage.setItem('nav', 'closed');
        }

        if (!isDarkTheme) {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme, isOpen]);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, toggleMenu }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};