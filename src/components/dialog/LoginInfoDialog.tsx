import { Dialog } from "@mui/material";
import { DialogCheck, DialogFix, DialogForm, DialogInput, DialogInputTitle, DialogTitle, InfoDialogSubTitle } from "../../app/styles";
import { RadioGroup } from '@headlessui/react'
import { MOVIE_CATEGORY_LIST, MOVIE_PLATFORM_LIST } from "../../constants/const/const";
import { userStore } from "../../features/store";

export function LoginInfoDialog(isOpen: any) {

    const { status, platform, genre } = userStore();

    return (
        <Dialog open={isOpen}>
            <DialogFix>
                <DialogTitle>MovieTok를 처음 이용하시는군요!</DialogTitle>
                <InfoDialogSubTitle>1. 닉네임을 입력해주세요!</InfoDialogSubTitle>

                <DialogForm>
                    <DialogInputTitle>닉네임</DialogInputTitle>
                    <DialogInput type="text" placeholder="짧고 간결하게 입력해주세요!" />
                </DialogForm>

                <DialogCheck>
                    <RadioGroup value={status} onChange={(status: string) => userStore.getState().setStatus(status)}>
                        <RadioGroup.Label style={{ "fontSize": "18px", "fontWeight": "bold", "transform": "translate(-15%, 0%)" }}>2. 영화를 많이 즐겨하시는 편인가요?</RadioGroup.Label>
                        <div style={{ "display": "flex", "marginTop": "20px", "transform": "translate(-14%, 0%)" }}>
                            <RadioGroup.Option value="좋아하는 편" style={{ "marginRight": "26px", "cursor": "pointer" }}>
                                {({ checked }) => (
                                    <span className={checked ? 'bg-blue-200' : ''}>좋아하는 편</span>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="보통" style={{ "cursor": "pointer" }}>
                                {({ checked }) => (
                                    <span className={checked ? 'bg-blue-200' : ''}>보통</span>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="싫어하는 편" style={{ "marginLeft": "26px", "cursor": "pointer" }}>
                                {({ checked }) => (
                                    <span className={checked ? 'bg-blue-200' : ''}>싫어하는 편</span>
                                )}
                            </RadioGroup.Option>
                        </div>
                    </RadioGroup>
                </DialogCheck>

                <DialogCheck>
                    <RadioGroup value={platform} onChange={(platform: string) => userStore.getState().setPlatform(platform)}>
                        <RadioGroup.Label style={{ "fontSize": "18px", "fontWeight": "bold", "transform": "translate(-15%, 0%)" }}>3. 즐겨보는 영화를 어디서 보시나요?</RadioGroup.Label>
                        <div style={{ "display": "flex", "marginTop": "20px", "transform": "translate(-14%, 0%)" }}>
                            { MOVIE_PLATFORM_LIST.map((value, index) => (
                                <RadioGroup.Option key={index} value={value} style={{ "marginRight": "26px", "cursor": "pointer" }}>
                                    {({ checked }) => (
                                        <span className={checked ? 'bg-blue-200' : ''}>{value}</span>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                </DialogCheck>

                <DialogCheck>
                    <RadioGroup value={genre} onChange={(genre: string) => userStore.getState().setGenre(genre)}>
                        <RadioGroup.Label style={{ "fontSize": "18px", "fontWeight": "bold", "transform": "translate(3%, 0%)" }}>4. 즐겨보는 영화 장르는 무엇인가요?</RadioGroup.Label>
                        <div style={{ "display": "flex", "marginTop": "20px", "transform": "translate(-3%, 0%)" }}>
                            { MOVIE_CATEGORY_LIST.map((value, index) => (
                                <RadioGroup.Option key={index} value={value} style={{ "marginLeft": "26px", "cursor": "pointer" }}>
                                    {({ checked }) => (
                                        <span className={checked ? 'bg-blue-200' : ''}>{value}</span>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                </DialogCheck>

            </DialogFix>
        </Dialog>
    )
}