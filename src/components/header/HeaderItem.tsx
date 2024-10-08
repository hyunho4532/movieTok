import { HeaderItemTitle } from "../../app/styles";
import { LoginDialog } from "../dialog/LoginDialog";
import { LoginInfoDialog } from "../dialog/LoginInfoDialog";
import { useHeaderItemHooks } from "./hooks/HeaderItemHooks";
import { HeaderItemProps } from "./props/HeaderItemProps";

export function HeaderItem({children}: HeaderItemProps) {

    const { isOpen, isInfoOpen, headerItemClick } = useHeaderItemHooks();

    return (
        <>
            <HeaderItemTitle onClick={() => headerItemClick(children)}>
                {children}
            </HeaderItemTitle>

            { isOpen && <LoginDialog isOpen={isOpen} /> }
            
            { isInfoOpen && <LoginInfoDialog isOpen={isInfoOpen} /> }
        </>
    )
}