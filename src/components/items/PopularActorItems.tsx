/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { PopularActorDetailImage, PopularActorDetailName, PopularActorItem, PopularActorItemFix, PopularActorsCard, PopularMovieCardContianer } from "../../app/styles";
import { PopularMovieCardBack } from "../../app/styles/back";
import { PopularMovieCardFront } from "../../app/styles/front";

export interface PopularItemsProps  {
    popularData: any[]
}

export function PopularActorItems(props: PopularItemsProps) {

    return (
        <PopularActorItem>
            <PopularActorItemFix>
                {props.popularData.map((actor, index) => (
                    <PopularMovieCardContianer>
                        <PopularActorsCard key={index}>
                            <PopularMovieCardFront>
                                <PopularActorDetailImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}></PopularActorDetailImage>
                            </PopularMovieCardFront>

                            <PopularMovieCardBack>
                                <PopularActorDetailName>{actor.name}</PopularActorDetailName>
                            </PopularMovieCardBack>
                        </PopularActorsCard>
                    </PopularMovieCardContianer>
                ))}
            </PopularActorItemFix>
        </PopularActorItem>
    );
  }