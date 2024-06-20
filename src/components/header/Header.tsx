import { HeaderFix, HeaderProfileImage, HeaderSize } from "../../app/styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { HeaderIcon } from "./HeaderIcon";
import { HeaderItem } from "./HeaderItem";
import { HeaderProps } from "./props/HeaderProps";

export function Header(props: HeaderProps) {

    const userPhotoUrl = useLocalStorage("userData").getItem(2)?.toString();

    return (
        <HeaderSize>
            <HeaderFix>
                <HeaderIcon src="dist/movietok_logo.jpg" width='120' height='120' />
                <HeaderItem>{props.headerRecommendMovie}</HeaderItem>
                <HeaderItem>{props.headerMovieInsert}</HeaderItem>

                { userPhotoUrl != null ? <HeaderProfileImage src={userPhotoUrl} /> : <HeaderItem>{props.headerLogin}</HeaderItem> }
                
            </HeaderFix>
        </HeaderSize>
    )
}