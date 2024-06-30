import { Card, Dialog } from "@mui/material";
import { DialogAuthLogin, DialogAuthLoginImage, DialogAuthLoginTitle, DialogAuthLogins, DialogFix, DialogSubTitle, DialogTitle } from "../../app/styles";
import { LoginDialogTransition } from "../../shared/ui-kit/transition/LoginDialogTransition";
import { useHeaderItemHooks } from "../header/hooks/HeaderItemHooks";
import { googleLoginSetUp } from "../../entities/user/api";

export function LoginDialog(isOpen: any) {

    const { headerItemClose } = useHeaderItemHooks();

    return (
        <>
            <Dialog open={isOpen} onClose={headerItemClose} TransitionComponent={LoginDialogTransition} keepMounted>
                <DialogFix>
                    <DialogTitle>MovieTok에 오신 것을 환영합니다!</DialogTitle>
                    <DialogSubTitle>MovieTok을 이용하여 취향에 맞는 영화를 찾아보세요! <br />다른 사람들과 함께, 영화를 찾아볼까요?</DialogSubTitle>
                    <DialogAuthLogins>
                        <DialogAuthLogin>
                            <Card className="w-[340px] h-[60px] flex">
                                <DialogAuthLoginImage src="https://movietok.vercel.app/google_logo.png" />
                                <DialogAuthLoginTitle onClick={() => googleLoginSetUp()}>구글 로그인으로 시작하기</DialogAuthLoginTitle>
                            </Card>
                        </DialogAuthLogin>
                        <DialogAuthLogin>
                            <Card className="w-[340px] h-[60px] flex">
                                <DialogAuthLoginImage src="https://movietok.vercel.app/kakao_logo.png" />
                                <DialogAuthLoginTitle>카카오 로그인으로 시작하기</DialogAuthLoginTitle>
                            </Card>
                        </DialogAuthLogin>
                    </DialogAuthLogins>
                </DialogFix> 
            </Dialog>
        </>
    )
}