import { Button } from "@mui/material";

export const LoginButton = ({ children }: any) => {
    return (
        <Button className="w-[400px] h-[40px] text-center" variant="contained">{children}</Button>
    )
}