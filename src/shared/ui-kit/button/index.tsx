import { Button } from "@mui/material";
import { firebaseStoreInsert } from "../../../services/firebase";
import { userStore } from "../../../features/store";

export const LoginButton = ({ children }: any) => {

    const { email } = userStore();

    return (
        <Button className="w-[400px] h-[40px] text-center" variant="contained" onClick={() => firebaseStoreInsert(email!)}>{children}</Button>
    )
}