import { InsertSection, InsertArticle, InsertTitle, InsertCard, Insert, InsertContent } from "../../app/styles";

export function InsertPage() {
    return (
        <InsertSection>
            <InsertTitle>어떤 것을 등록하시겠습니까?</InsertTitle>
            <InsertArticle>
                <InsertCard>
                    <Insert>배우 등록 🦸‍♀️</Insert>
                    <InsertContent>배우를 등록하고 싶으시면?</InsertContent>
                </InsertCard>

                <InsertCard>
                    <Insert>영화 등록 🎞</Insert>
                    <InsertContent>영화를 등록하고 싶으시면?</InsertContent>
                </InsertCard>
            </InsertArticle>
        </InsertSection>
    )
}