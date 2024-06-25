import { Button } from "@mui/material";
import { insertMovies, insertUsers } from "../../../services/firebase";
import { discoverStore, userStore } from "../../../features/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocalStorage } from "../../../hooks/useLocalStorage";

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

export const MovieButton = ({ impressionMovie, children }: any) => {

    const authuid = useLocalStorage("userData").getItem(0);
    const { movieisFun, movieIsRecom, discoverTitle } = discoverStore();
    const movieDataFromArray = [authuid, discoverTitle, impressionMovie, movieisFun, movieIsRecom]

    return (
        <>
            <Button className="w-[620px] h-[40px] text-center" variant="contained" onClick={() => insertMovies(movieDataFromArray)}>{children}</Button>
            <ToastContainer />
        </>
    )
}