import { dialogStore } from '../../../features/store';

export function useHeaderItemHooks() {
    const { isOpen, setIsOpen, isInfoOpen, setIsInfoOpen } = dialogStore();

    const headerItemClick = (children: React.ReactNode) => {
        if (children === '로그인') {
            setIsOpen(true);
        }
    }

    const headerItemClose = () => {
        setIsOpen(false);
        setIsInfoOpen(true);
    }

    return {
        isOpen,
        isInfoOpen,
        headerItemClick,
        headerItemClose,
    };
}