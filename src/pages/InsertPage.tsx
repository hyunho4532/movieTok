import { Link } from "react-router-dom";
import { InsertArticle, InsertCard, Insert, InsertContent, Section, ChooseTitle } from "../app/styles";

export function InsertPage() {
    return (
        <Section>
            <ChooseTitle>어떤 것을 등록하시겠습니까?</ChooseTitle>
            <InsertArticle>
                <Link to="http://localhost:5173/insert/movie">
                    <InsertCard>
                        <Insert>배우 등록 🦸‍♀️</Insert>
                        <InsertContent>배우를 등록하고 싶으시면?</InsertContent>
                    </InsertCard>
                </Link>

                <Link to="http://localhost:5173/insert/movie">
                    <InsertCard>
                        <Insert>영화 등록 🎞</Insert>
                        <InsertContent>영화를 등록하고 싶으시면?</InsertContent>
                    </InsertCard>
                </Link>
            </InsertArticle>
        </Section>
    )
}