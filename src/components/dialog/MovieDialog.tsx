import { Dialog } from "@mui/material";
import { useHeaderItemHooks } from "../header/hooks/HeaderItemHooks";
import { Article, DialogFix, DialogTitle, Input } from "../../app/styles";

export function MovieDialog(isOpen: any) {

    const { headerItemClose } = useHeaderItemHooks();

    return (
        <>
            <Dialog open={isOpen} onClose={headerItemClose}>
                <DialogFix>
                    <Article>
                        <DialogTitle>영화를 등록해주세요!</DialogTitle>
                        
                    </Article>
                </DialogFix>
            </Dialog>
        </>
    )
}