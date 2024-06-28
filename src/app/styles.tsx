import styled from "styled-components";

export const Group = styled.div`
    text-align: center;
    margin-top: 40px;
`

export const PopularMovieCardContianer = styled.div`
    perspective: 1000px;
`

export const PopularActorDetailCard = styled.div`
    border-radius: 1.5rem;
    margin-right: 8px;
`

export const Image = styled.img`
    width: 100%;
    height: 260px;
`

export const HeaderSize = styled.div`
    width: 100%;
    height: 60px;
    align-content: center;
    align-items: center;
    justify-content: center;
`

export const HeaderFix = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PopularMovieCardFix = styled.div`
    display: flex;
`

export const PopularMovieTitle = styled.p`
    text-align: start;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
    font-family: 'JamsilBold', sans-serif !important;
`

export const PopularMovieFavorite = styled.p`
    margin-top: 8px;
    cursor: pointer;
`

export const PopularMovieId = styled.p`
    visibility: hidden; 
`

export const PopularMovieImage = styled.img`
    width: 300px;
    height: 300px;
`

export const HeaderProfileImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30%;
`

export const HeaderProfileCard = styled.div`
    margin-top: 12px;
    font-size: 15px;
    padding-top: 8px;
    padding-left: 12px;
    cursor: pointer;
    font-family: 'Mango', sans-serif !important;
`

export const DialogFix = styled.div`
    width: 560px;
    height: 750px;
`

export const DialogTitle = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-top: 32px;
`

export const DialogSubTitle = styled.p`
    text-align: center;
    font-size: 16px;
    margin-top: 60px;
    font-weight: bold;
`

export const InfoDialogSubTitle = styled.p`
    font-size: 18px;
    margin-top: 80px;
    font-weight: bold;
    transform: translate(15%, 0%);
`

export const DialogInputTitle = styled.p`
    margin-right: 16px;
    font-size: 16px;
    font-weight: bold;
`

export const DialogForm = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    transform: translate(15%, 0%);
`

export const DialogCheck = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
`

export const DialogInput = styled.input`
    width: 300px;
    height: 40px;
    border: 0.1px solid grey;
    font-size: 12px;
    padding-left: 8px;
`

export const DialogAuthLogins = styled.div`
    width: 360px;
    height: 100px;
    transform: translate(8%);
    margin-top: 38px;
`

export const DialogAuthLogin = styled.div`
    width: 200px;
    height: 100px;
    margin: 0 auto;
    margin-top: 24px;
    font-size: 16px;
    font-weight: bold;
`

export const DialogAuthLoginImage  = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 8px;
    margin-left: 12px;
`

export const DialogAuthLoginTitle = styled.p`
    margin: 0 auto;
    margin-top: 16px;
    cursor: pointer;

    &:hover {
        color: grey;
    }
`

export const HeaderItemTitle = styled.li`
    width: 70px;
    margin-right: 40px;
    cursor: pointer;
    transition: transform 0.7s;
    font-family: 'SB', sans-serif !important;
    
    &:hover {
        transform: scale(1.5);
        font-weight: bold;
    }
`

export const PopularMovieItem = styled.div`
    overflow-x: scroll;
    margin-left: 340px;
`

export const PopularActorItem = styled.div`
    overflow-x: scroll;
    margin-left: 340px;
`

export const PopularActorDetailItem = styled.div`
    overflow-x: scroll;
`

export const PopularVideoDetailItem = styled.div`
    overflow-x: scroll;
`

export const PopularMovieItemFix = styled.div`
    width: 4800px;
    height: 380px;
    display: flex;
    margin-top: 16px;
`

export const PopularActorItemFix = styled.div`
    width: 2600px;
    height: 160px;
    display: flex;
    margin-top: 16px;
`

export const PopularVideoDetailItemFix = styled.div`
    width: 3200px;
    height: 320px;
    display: flex;
    margin-top: 16px;
`

export const PopularActorDetailItemFix = styled.div`
    width: 3200px;
    height: 160px;
    display: flex;
    margin-top: 16px;
`

export const PopularMovieDetail = styled.div`
    width: 1200px;
    position: relative;
    height: auto;
`

export const PopularMovieDetailOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    box-sizing: border-box;
`

export const PopularMovieSection = styled.section`
    width: 880px;
    height: 60px;
    margin-top: 120px;
`

export const UserMovieSection = styled.section`
    width: 880px;
    height: 60px;
    margin-top: 220px;
`

export const SelectSection = styled.section`
    width: 820px;
    height: 60px;
    margin: 0 auto;
`

export const Section = styled.section`
    width: 820px;
    height: 100%;
    margin: 0 auto;
`

export const InsertSection = styled.section`
    width: 620px;
    height: 60px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    font-family: 'OneTitle', sans-serif !important;
`

export const MovieStatus = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const MovieDate = styled.p`
    font-size: 12px;
    text-align: right;
    padding-top: 42px;
    padding-right: 12px;
    font-family: 'Mango', sans-serif !important;
`

export const MovieTitle = styled.p`
    padding-top: 16px;
    font-size: 16px;
    font-family: 'JamsilBold', sans-serif !important;
`

export const MovieContent = styled.p`
    padding-top: 16px;
    font-size: 28px;
`

export const PopularActorSection = styled.section`
    width: 880px;
    height: 60px;
    margin-top: 440px;
`

export const PopularMovieDetailTitleSection = styled.section`
    width: 380px;
    height: 100px;
`

export const PopularMovieDetailContentSection = styled.section`
    width: 380px;
    height: 60px;
    margin-top: 80px;
`

export const PopularMovieDetailVideoSection = styled.section`
    width: 380px;
    height: 60px;
    transform : translate(200%, -350%)
`

export const PopularMovieDetailActorSection = styled.section`
    width: 380px;
    height: 60px;
    transform : translate(200%, -520%)
`

export const PopularMovieArticle = styled.article`

`

export const UserMovieArticle = styled.article`

`

export const Article = styled.article`
    text-align: left;
`

export const Spacer = styled.p`
    margin-top: 20px;
    visibility: hidden;
`

export const Div = styled.div`
    margin-top: 12px;
`

export const InsertArticle = styled(Article)`\
    display: flex;
    justify-content: space-evenly;
`

export const InsertTitle = styled.h1`
    text-align: left;
    font-size: 22px;
    font-weight: bold;
    margin-top: 60px;
`

export const ChooseTitle = styled.h1`
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-top: 60px;   
`

export const Input = styled.input`
    width: 420px;
    height: 40px;
    border: 0.3px solid grey;
    padding-left: 8px;
`

export const InsertCard = styled.div`
    width: 360px;
    height: 180px;
    box-shadow: 0 0 10px grey;
    margin-top: 128px;
    cursor: pointer;
    transition: transform 0.3s;
    
    &:hover {
        transform: scale(1.04);
    }
`

export const SelectWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 40px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 40px;
`;

export const Insert = styled.h1`
    padding-top: 12px;
    padding-left: 12px;
    font-size: 18px;
    font-weight: bold;
    font-family: 'JamsilBold', sans-serif !important;
`

export const InsertContent = styled.p`
    padding-top: 8px;
    padding-left: 12px;
    font-family: 'Mango', sans-serif;
`

export const PopularActorArticle = styled.article`

`

export const PopularActorDetailImage = styled.img`
    width: 100%;
    height: 140px;
    border-radius: 24px;
`

export const PopularActorDetailName = styled.p`
    padding-top: 12px;
    font-weight: bold;
`

export const PopularMovieDetailTitle = styled.p`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: bold;
    text-align: left;
`

export const PopularMovieDetailSubTitle = styled.p`
    font-size: 0.725rem;
    text-align: left;
    margin-top: 12px;
`

export const PopularMovieDetailVoteAvg = styled.p`
    text-align: left;
    margin-top: 16px;
`

export const PopularMovieDetailHomePage = styled.a`
    cursor: pointer;
    margin-top: 24px;
`

export const PopularMovieDetailImage = styled.img`
    width: 240px;
    height: 240px;
    margin-top: 24px;
    border-radius: 10%;
`

export const PopularMovieDetailVideos = styled.p`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: bold;
    margin-top: 80px;
    text-align: left;
`

export const PopularMovieDetailActors = styled.p`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: bold;
    margin-top: 80px;
    text-align: left;
`

export const PopularMoviesCard = styled.div`
    border-radius: 1.5rem;
    margin-right: 20px;
    transition: transform 0.3s;
    
    &:hover {
        transform: scale(1.04);
    }
`

export const PopularActorsCard = styled.div`
    border-radius: 1.5rem;
    margin-right: 20px;
    transition: transform 0.7s;
    transform: rotateY(0deg);
    width: 140px;
    height: 140px;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;

    &:hover {
        transform: rotateY(180deg);
    }
`

export const MovieLoading = styled.div`
    justify-content: center;
    align-content: center;
    display: flex;
`

export const YoutubeComponent = {
    height: '320',
    width: '380',
    playerVars: {
        autoplay: 0,
    },
}