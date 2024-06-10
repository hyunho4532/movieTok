import { HeaderFix, HeaderSize } from "../../app/styles";
import { HeaderIcon } from "./HeaderIcon";
import { HeaderItem } from "./HeaderItem";
import { HedaerProps } from "./props/HeaderProps";

export function Header(props: HedaerProps) {
    return (
        <HeaderSize>
            <HeaderFix>
                <HeaderIcon src="../../public/movietok_logo.jpg" width='120' height='120' />
                <HeaderItem>{props.headerRecommendMovie}</HeaderItem>
                <HeaderItem>{props.headerMovieInsert}</HeaderItem>
                <HeaderItem>{props.headerLogin}</HeaderItem>
            </HeaderFix>
        </HeaderSize>
    )
}