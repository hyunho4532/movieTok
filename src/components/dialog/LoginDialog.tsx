import { Dialog } from "@mui/material";
import { DialogFix } from "../../app/styles";
import { LoginDialogTransition } from "./transition/LoginDialogTransition";

export function LoginDialog() {

    
    return (
        <Dialog open={true}  TransitionComponent={LoginDialogTransition} keepMounted>
            <DialogFix>
                
            </DialogFix>
        </Dialog>
    )
}