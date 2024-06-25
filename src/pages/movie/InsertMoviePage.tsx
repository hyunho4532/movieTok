import { Button } from "@headlessui/react";
import { Article, Div, Group, Input, InsertSection, InsertTitle, Spacer } from "../../app/styles";
import { dialogStore, discoverStore } from "../../features/store";
import { MovieDialog } from "../../components/dialog/MovieDialog";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { MovieButton } from "../../shared/ui-kit/button";
import { createRef } from "react";
import { CustomSelect } from "../../shared/ui-kit/select";

export function InsertMoviePage() {

    const { isOpen, setIsOpen } = dialogStore();
    const { discoverTitle, movieisFun, setMovieIsFun, movieIsRecom, setMovieIsRecom } = discoverStore();
    const editorRef = createRef();

    const movieDialogOpen = () => {
        setIsOpen(true);
    }

    const isMovieRecomChange = (event: any) => {
        setMovieIsRecom(event.target.value);
    }
    
    return (
        <>
            <InsertSection>
                <InsertTitle>1. 어떤 영화를 등록하시겠습니까?</InsertTitle>
                <Article>
                    <Div>
                        <Input value={discoverTitle!} readOnly />
                        <Button onClick={movieDialogOpen} className="ml-4 inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            영화 등록하기
                        </Button>
                    </Div>
                </Article>

                <InsertTitle>2. 영화가 재미있었나요?</InsertTitle>
                <Article>
                    <Div>
                        <CustomSelect
                            data={movieisFun!}
                            setData={setMovieIsFun}
                            select={ ["네", "보통", "아니요"] }
                        />
                    </Div>
                </Article>

                <InsertTitle>3. 영화에 대해 간단한 소감을 입력해주세요.</InsertTitle>
                <Article>
                    <Div>
                        <Editor
                            previewStyle="vertical"
                            height="400px"
                            initialEditType="markdown"
                            initialValue="hello"
                            ref={editorRef}
                        />
                    </Div>
                </Article>

                <InsertTitle>4. 다른 사람들에게 이 영화를 추천할까요?</InsertTitle>
                <Article>
                    <Div>
                        <CustomSelect
                            data={movieIsRecom!}
                            setData={setMovieIsRecom}
                            select={ ["👍", "👎"] }
                        />
                    </Div>
                </Article>
                
                <Group>
                    <MovieButton props={editorRef}>
                        영화 등록 완료!
                    </MovieButton>
                </Group>

                <Spacer>공백</Spacer>

            </InsertSection>

            { isOpen && <MovieDialog /> }
        </>
    )
}