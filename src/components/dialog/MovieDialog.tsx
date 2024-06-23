import { Card, Dialog, Pagination } from "@mui/material";
import { useHeaderItemHooks } from "../header/hooks/HeaderItemHooks";
import { Article, Grid, DialogFix, DialogTitle, PaginationWrapper, SelectWrapper, Image } from "../../app/styles";
import { Select } from "@headlessui/react";
import { useEffect, useState } from "react";
import { getGenreList } from "../../entities/genre/api";
import { getDiscoverListFromMovie } from "../../entities/discover/api";

export function MovieDialog(isOpen: any) {

    const [ genreList, setGenreList ] = useState<any>([]);
    const [ discoverList, setDiscoverList ] = useState<any>([]);
    const [ totalMovies, setTotalMovies ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState(null);
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

    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value);
        fetchMovies(selectedGenre, value);
    }

    return (
        <>
            <Dialog open={isOpen} onClose={headerItemClose}>
                <DialogFix>
                    <DialogTitle>영화를 등록해주세요!</DialogTitle>
                    <Article>
                        <SelectWrapper>
                            <Select onChange={handleGenreChange}>
                                { genreList.map((genre: any) => (
                                    <option value={genre.id}>{genre.name}</option>
                                ))}
                            </Select>
                        </SelectWrapper>

                        <Grid>
                            { discoverList.map((discover: any) => (
                                <Card className="flex h-[260px]">
                                    <Image src={`https://image.tmdb.org/t/p/original/${discover.poster_path}`} />
                                </Card>
                            ))}
                        </Grid>
   

                        <PaginationWrapper>
                            <Pagination
                                count={Math.ceil(totalMovies / 20)}
                                page={currentPage} 
                                onChange={handlePageChange} />
                        </PaginationWrapper>

                    </Article>
                </DialogFix>
            </Dialog>
        </>
    )
}