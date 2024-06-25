import { Button } from "@mui/material";
import { insertMovies, insertUsers } from "../../../services/firebase";
import { discoverStore, userStore } from "../../../features/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

export const LoginButton = ({ children }: any) => {

    const { uid, email, nickname, genre, platform, status } = userStore();
    const userDataFromArray = [uid, email, nickname, genre, platform, status];

    return (
        <>
            <Button className="w-[400px] h-[40px] text-center" variant="contained" onClick={() => insertUsers(userDataFromArray)}>{children}</Button>
            <ToastContainer />
        </>
    )
}

export const MovieButton = ({ props, children }: any) => {

    const { movieisFun, movieIsRecom, impressionMovie, setImpressionMovie, discoverTitle } = discoverStore();
    
    useEffect(() => {
        setImpressionMovie(props.current.getInstance().getMarkdown());
    }, [impressionMovie]);

    return (
        <>
            <Button className="w-[620px] h-[40px] text-center" variant="contained" onClick={() => insertMovies(impressionMovie!, movieisFun!, movieIsRecom!, discoverTitle!)}>{children}</Button>
            <ToastContainer />
        </>
    )
}