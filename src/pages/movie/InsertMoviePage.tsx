import { Button } from "@headlessui/react";
import { Article, Input, InsertSection, InsertTitle } from "../../app/styles";
import { dialogStore, discoverStore } from "../../features/store";
import { MovieDialog } from "../../components/dialog/MovieDialog";

export function InsertMoviePage() {

    const { isOpen, setIsOpen } = dialogStore();
    const { discoverTitle } = discoverStore();

    const movieDialogOpen = () => {
        setIsOpen(true);
    }
    
    return (
        <>
            <InsertSection>
                <InsertTitle>1. 어떤 영화를 등록하시겠습니까?</InsertTitle>
                <Article>
                    <Input value={discoverTitle!} readOnly />
                    <Button onClick={movieDialogOpen} className="ml-4 inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        영화 등록하기
                    </Button>
                </Article>

                <InsertTitle>2. 영화가 재미있었나요?</InsertTitle>
                <Article>
                    
                </Article>

            </InsertSection>

            { isOpen && <MovieDialog /> }
        </>
    )
}