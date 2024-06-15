import { HeaderItemTitle } from "../../app/styles";
import { headerItemClick } from "./hooks/headerItemClick";
import { HeaderItemProps } from "./props/HeaderItemProps";

export function HeaderItem({children}: HeaderItemProps) {

    return (
        <HeaderItemTitle className="mr-24" onClick={() => headerItemClick(children)}>{children}</HeaderItemTitle>
    )
}