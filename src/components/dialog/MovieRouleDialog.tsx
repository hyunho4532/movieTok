import { Dialog } from "@mui/material";
import { DialogFix, DialogTitle } from "../../app/styles";


export function MovieRouleDialog(isOpen: any) {
    return (
        <>
            <Dialog open={isOpen}>
                <DialogFix>
                    <DialogTitle>유연한 랜덤 영화 생성기</DialogTitle>
                </DialogFix> 
            </Dialog>
        </>
    )
}