import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { HeaderFix, HeaderProfileCard, HeaderProfileImage, HeaderSize } from "../../app/styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { HeaderIcon } from "./HeaderIcon";
import { HeaderItem } from "./HeaderItem";
import { HeaderProps } from "./props/HeaderProps";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export function Header(props: HeaderProps) {

    const userPhotoUrl = useLocalStorage("userData").getItem(2)?.toString();

    return (
        <HeaderSize>
            <HeaderFix>
                <HeaderIcon src="public\movietok_logo.jpg" width='120' height='120' />
                <Link to="http://localhost:5173/movie">
                    <HeaderItem>{props.headerRecommendMovie}</HeaderItem>
                </Link>
                
                <Link to="http://localhost:5173/insert">
                    <HeaderItem>{props.headerMovieInsert}</HeaderItem>
                </Link>

                { userPhotoUrl != null ? 
                    <Popover className="relative">
                        <PopoverButton>
                            <HeaderProfileImage src={userPhotoUrl} /> 
                        </PopoverButton>

                        <PopoverPanel anchor="bottom" className="w-[220px] h-[140px] shadow-2xl flex-2 flex-col">

                            <HeaderProfileCard>
                                <p>내 관심 영화 목록 ❤️</p>
                            </HeaderProfileCard>

                            <HeaderProfileCard>
                                <a href="">내 추천 영화 글 💡</a>
                            </HeaderProfileCard>

                            <HeaderProfileCard>
                                <p onClick={useLocalStorage("userData").removeItem}>로그아웃 ✨</p>
                            </HeaderProfileCard>
                        </PopoverPanel>
                    </Popover>
                    
                : <HeaderItem>{props.headerLogin}</HeaderItem> }

                <ToastContainer />
                
            </HeaderFix>
        </HeaderSize>
    )
}