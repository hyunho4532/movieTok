import { useState } from 'react';

export function useHeaderItemHooks() {
    const [loginOpen, setLoginOpen] = useState(false);

    const headerItemClick = (children: React.ReactNode) => {
        if (children === '로그인') {
            setLoginOpen(true);
        }
    }

    const headerItemClose = (isOpen: boolean) => {
        setLoginOpen(loginOpen);
    }

    return {
        loginOpen,
        headerItemClick,
        headerItemClose,
    };
}