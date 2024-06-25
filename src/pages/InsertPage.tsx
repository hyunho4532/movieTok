import { Link } from "react-router-dom";
import { InsertSection, InsertArticle, InsertTitle, InsertCard, Insert, InsertContent } from "../app/styles";

export function InsertPage() {
    return (
        <InsertSection>
            <InsertTitle>어떤 것을 등록하시겠습니까?</InsertTitle>
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
        </InsertSection>
    )
}