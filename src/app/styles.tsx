import styled from "styled-components";

export const HeaderSize = styled.div`
    width: 1300px;
    height: 60px;
`

export const HeaderFix = styled.ul`
    display: flex;
    text-align: end;
    align-items: center;
    justify-content: center; 
`

export const PopularMovieItem = styled.div`
    overflow-x: scroll;
    margin-left: 340px;
`

export const PopularMovieItemFix = styled.div`
    width: 4800px;
    height: 370px;    
    display: flex;
    margin-top: 16px;
`

export const PopularMovieDetail = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const PopularMovieSection = styled.section`
    width: 880px;
    height: 60px;
    margin-top: 120px;
`

export const PopularMovieArticle = styled.article`

`

export const PopularMovieDetailName = styled.p`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: bold;
`

export const MovieLoading = styled.p`
    transform: 'translate(-50%, -50%)'
`