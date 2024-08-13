import { useState } from "react";
import { SuggestMovieArticle, SuggestMovieSection } from "../../app/styles";
import {Wheel} from 'react-custom-roulette';
import { movies } from "../../constants/const/const";
import { dialogStore } from "../../features/store";
import { MovieRouleDialog } from "../../components/dialog/MovieRouleDialog";

export function SuggestMoviePage() {

    const { isRouletteOpen, setIsRouletteOpen } = dialogStore();

    const setOnPopup = () => {
        console.log("ddd")
        setIsRouletteOpen(true);
    }

    return (
        <>
            <SuggestMovieSection>
                <SuggestMovieArticle>
                    <h1 className="text-center text-xl font-bold">유연한 랜덤 영화 생성</h1>
                    <button
                        style={{ width: '200px', height: '40px' }}
                        className="bg-blue-500 mt-6 shadow-lg shadow-blue-500/50 text-slate-100"
                        onClick={setOnPopup}>룰렛으로 돌리기 🤩</button>
                </SuggestMovieArticle>
            </SuggestMovieSection>

            { isRouletteOpen &&  <MovieRouleDialog open={isRouletteOpen} /> }
        </>
    )
}