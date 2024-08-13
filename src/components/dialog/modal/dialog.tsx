export interface Dialog {
    isOpen: boolean | null;
    isRouletteOpen: boolean | null;
    isInfoOpen: boolean | null;
    setIsOpen: (isOpen: boolean) => void
    setIsRouletteOpen: (isRouletteOpen: boolean) => void
    setIsInfoOpen: (isInfoOpen: boolean) => void
}