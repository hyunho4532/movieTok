import { Card, Dialog } from "@mui/material";
import { useHeaderItemHooks } from "../header/hooks/HeaderItemHooks";
import { Article, Grid, DialogFix, DialogTitle, PaginationWrapper, SelectWrapper, Image } from "../../app/styles";
import { Select } from "@headlessui/react";
import { useEffect } from "react";
import { getGenreList } from "../../entities/genre/api";
import { dialogStore, discoverStore, genreStore, paginationStore } from "../../features/store";
import { CustomPagination } from "../../shared/ui-kit/pagination";
import { fetchMovies } from "../../entities/discover/getter";

export function MovieDialog(isOpen: any) {

    const { discoverList, setDiscoverList, setDiscoverTitle } = discoverStore();
    const { genreList, setGenreList, setSelectedGenre } = genreStore();
    const { setIsOpen } = dialogStore();
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
        fetchMovies(setDiscoverList, setTotalMovies, genreId, 1);
    }

    const discoverMovieClick = (title: string) => {
        setIsOpen(false);
        setDiscoverTitle(title);
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
                                <Card className="flex h-[260px] cursor-pointer" onClick={() => discoverMovieClick(discover.title)}>
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