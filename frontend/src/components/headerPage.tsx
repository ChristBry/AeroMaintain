import { HugeiconsIcon } from '@hugeicons/react';
import { Search01Icon, SidebarLeftIcon, DashboardSquare01Icon, SunIcon, Moon02Icon, Notification01Icon } from '@hugeicons/core-free-icons';
import { useTheme } from './ThemeContext';

const headerPage = (props: { title: string }) => {
    const { isDarkTheme, toggleTheme, toggleMenu } = useTheme();
    return (
        <div className='header-page fixed top-0 z-10 flex items-center justify-between border-b-2 w-full'>
            <div className='header-left flex items-center gap-4'>
                <div className='icon-side border-r-1 cursor-pointer' onClick={toggleMenu}>
                    <HugeiconsIcon icon={SidebarLeftIcon} size={24} className='' />
                </div>
                <h1>{props.title}</h1>
            </div>
            <div className='header-right flex items-center gap-6'>
                <div className="search-input flex items-center relative border-1 rounded-lg gap-2">
                    <HugeiconsIcon icon={Search01Icon} size={22} className='search-icon' />
                    <input type="text" placeholder='Rechercher...' className='search-input w-[200px] h-[30px] text-[14px]' />
                    <p className='icon-k-search flex items-center gap-1 rounded-lg'><HugeiconsIcon icon={DashboardSquare01Icon} size={18} /> K</p>
                </div>
                <HugeiconsIcon icon={Notification01Icon} size={24} className='icon-notification' />
                <div className="mode-icon cursor-pointer rounded-lg" onClick={toggleTheme}>
                    <HugeiconsIcon
                        icon={Moon02Icon}
                        altIcon={SunIcon}
                        showAlt={isDarkTheme}
                        size={20}
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}

export default headerPage