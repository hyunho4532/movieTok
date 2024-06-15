import { Card, Dialog } from "@mui/material";
import { DialogAuthLogin, DialogAuthLoginImage, DialogAuthLogins, DialogFix, DialogSubTitle, DialogTitle } from "../../app/styles";
import { LoginDialogTransition } from "./transition/LoginDialogTransition";

export function LoginDialog() {
    return (
        <Dialog open={true} TransitionComponent={LoginDialogTransition} keepMounted>
            <DialogFix>
                <DialogTitle>MovieTok에 오신 것을 환영합니다!</DialogTitle>
                <DialogSubTitle>MovieTok을 이용하여 취향에 맞는 영화를 찾아보세요! <br />다른 사람들과 함께, 영화를 찾아볼까요?</DialogSubTitle>
                <DialogAuthLogins>
                    <DialogAuthLogin>
                        <Card className="w-[500px] h-[60px]">
                            <DialogAuthLoginImage width="100" height="100" src="src\assets\kakao_logo.png" />
                        </Card>
                    </DialogAuthLogin>
                    <DialogAuthLogin>
                        <Card className="w-[500px] h-[60px]">
                            <DialogAuthLoginImage width="100" height="100" src="src\assets\kakao_logo.png" />
                        </Card>
                    </DialogAuthLogin>
                </DialogAuthLogins>
            </DialogFix> 
        </Dialog>
    )
}