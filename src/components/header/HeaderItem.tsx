import { HeaderItemTitle } from "../../app/styles";
import { dialogStore } from "../../features/store";
import { LoginDialog } from "../dialog/LoginDialog";
import { LoginInfoDialog } from "../dialog/LoginInfoDialog";
import { useHeaderItemHooks } from "./hooks/HeaderItemHooks";
import { HeaderItemProps } from "./props/HeaderItemProps";

export function HeaderItem({children}: HeaderItemProps) {

    const { isOpen, isInfoOpen, headerItemClick } = useHeaderItemHooks();

    console.log(dialogStore.getState().isOpen);

    return (
        <>
            <HeaderItemTitle className="mr-24" onClick={() => headerItemClick(children)}>
                {children}
            </HeaderItemTitle>

            { isOpen && <LoginDialog isOpen={isOpen} /> }
            
            { isInfoOpen && <LoginInfoDialog isOpen={isInfoOpen} /> }
        </>
    )
}