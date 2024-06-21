import { Button } from "@mui/material";
import { insertUsers } from "../../../services/firebase";
import { userStore } from "../../../features/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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