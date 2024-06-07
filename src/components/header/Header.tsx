import { HeaderIcon } from "./HeaderIcon";
import { HeaderItem } from "./HeaderItem";

export function Header() {
    return (
        <div className="w-[1200px] h-[60px]">
            <ul className="flex text-end items-center justify-center">
                <HeaderIcon src="../../public/movietok_logo.jpg" width='120' height='120' />
                <HeaderItem>추천 영화</HeaderItem>
                <HeaderItem>등록</HeaderItem>
                <HeaderItem>로그인</HeaderItem>
            </ul>
        </div>
    )
}