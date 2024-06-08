import { HeaderIcon } from "./HeaderIcon";
import { HeaderItem } from "./HeaderItem";
import { HedaerProps } from "./props/HeaderProps";

export function Header(props: HedaerProps) {
    return (
        <div className="w-[1300px] h-[60px]">
            <ul className="flex text-end items-center justify-center">
                <HeaderIcon src="../../public/movietok_logo.jpg" width='120' height='120' />
                <HeaderItem>{props.headerRecommendMovie}</HeaderItem>
                <HeaderItem>{props.headerMovieInsert}</HeaderItem>
                <HeaderItem>{props.headerLogin}</HeaderItem>
            </ul>
        </div>
    )
}