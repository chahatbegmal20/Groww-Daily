'use client';

import styles from '@/styles/atoms/ThemeSwitcher.module.css'
import { useEffect, useState } from 'react';
import Sun from '@/assets/sun.png'
import Moon from '@/assets/moon.png'
import Image from 'next/image';

interface ThemeSwitcherProps {
    className?: string
}

/*
    This atomic component is used to render a button which 
    toggles between light and dark theme
*/
export default function ThemeSwitcher(props: ThemeSwitcherProps) {
    const [isDark, setIsDark] = useState<boolean>(true);

    useEffect(() => {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, []);

    function handleThemeSwitch() {
        const rootElement: HTMLElement | null = document.querySelector(':root');
        if(isDark) {
            rootElement?.style.setProperty('--ss-background', 'rgb(255, 255, 255)');
            rootElement?.style.setProperty('--ss-text', 'black');
            rootElement?.style.setProperty('--ss-postImage-border', 'rgb(0, 0, 0)');
        }
        else {
            rootElement?.style.setProperty('--ss-background', 'rgb(0, 0, 0)');
            rootElement?.style.setProperty('--ss-text', 'white');
            rootElement?.style.setProperty('--ss-postImage-border', 'rgb(255, 255, 255)');
        }
        setIsDark(!isDark);
    }

    const icon = isDark ? Moon : Sun;
    const className = props.className ? props.className : '';
    return (
        <button className={`
            ${styles.ts786ThemeSwitcher}
            ${className}
        `} onClick={handleThemeSwitch} >
            <Image
                src={icon}
                alt="Theme Switcher"
                className={styles.ts786ThemeSwitcherIcon}
                width={30}
                height={30}
                loading='eager'
            />
        </button>
    );
}