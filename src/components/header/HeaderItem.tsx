import { HeaderItemTitle } from "../../app/styles";
import { LoginDialog } from "../dialog/LoginDialog";
import { useHeaderItemHooks } from "./hooks/HeaderItemHooks";
import { HeaderItemProps } from "./props/HeaderItemProps";

export function HeaderItem({children}: HeaderItemProps) {

    const { loginOpen, headerItemClick } = useHeaderItemHooks();

    return (
        <>
            <HeaderItemTitle className="mr-24" onClick={() => headerItemClick(children)}>
                {children}
            </HeaderItemTitle>

            { loginOpen && <LoginDialog /> }
        </>
    )
}