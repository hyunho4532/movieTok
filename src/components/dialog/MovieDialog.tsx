import { Card, Dialog } from "@mui/material";
import { useHeaderItemHooks } from "../header/hooks/HeaderItemHooks";
import { Article, Grid, DialogFix, DialogTitle, PaginationWrapper, SelectWrapper, Image } from "../../app/styles";
import { Select } from "@headlessui/react";
import { useEffect } from "react";
import { getGenreList } from "../../entities/genre/api";
import { getDiscoverListFromMovie } from "../../entities/discover/api";
import { discoverStore, genreStore, paginationStore } from "../../features/store";
import { CustomPagination } from "../../shared/ui-kit/pagination";

export function MovieDialog(isOpen: any) {

    const { discoverList, setDiscoverList } = discoverStore();
    const { genreList, setGenreList, setSelectedGenre } = genreStore();
    const { setTotalMovies } = paginationStore();
    const { headerItemClose } = useHeaderItemHooks();

    useEffect(() => {
        getGenreList() 
            .then(data => {
                setGenreList(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const handleGenreChange = (event: any) => {
        const genreId = event.target.value;
        setSelectedGenre(genreId);
        fetchMovies(genreId, 1);
    }

    const fetchMovies = (genreId: any, page: any) => {
        getDiscoverListFromMovie(genreId, page).then(data => {
            setDiscoverList(data.results);
            setTotalMovies(data.total_pages);
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <Dialog open={isOpen} onClose={headerItemClose}>
                <DialogFix>
                    <DialogTitle>영화를 등록해주세요!</DialogTitle>
                    <Article>
                        <SelectWrapper>
                            <Select onChange={handleGenreChange}>
                                { genreList && genreList.map((genre: any) => (
                                    <option value={genre.id}>{genre.name}</option>
                                ))}
                            </Select>
                        </SelectWrapper>

                        <Grid>
                            { discoverList && discoverList.map((discover: any) => (
                                <Card className="flex h-[260px]">
                                    <Image src={`https://image.tmdb.org/t/p/original/${discover.poster_path}`} />
                                </Card>
                            ))}
                        </Grid>

                        <PaginationWrapper>
                            <CustomPagination setDiscoverList={setDiscoverList} setTotalMovies={setTotalMovies} />
                        </PaginationWrapper>

                    </Article>
                </DialogFix>
            </Dialog>
        </>
    )
}