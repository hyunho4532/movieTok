export interface Dialog {
    isOpen: boolean | null;
    isInfoOpen: boolean | null;
    setIsOpen: (isOpen: boolean) => void
    setIsInfoOpen: (isInfoOpen: boolean) => void
}