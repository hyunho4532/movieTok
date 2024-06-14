/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { PopularActorDetailImage, PopularActorItem, PopularActorItemFix, PopularActorsCard } from "../../app/styles";
import { PopularItemsProps } from "./props/PopularItemsProps";

export function PopularActorItems(props: PopularItemsProps) {

    return (
        <PopularActorItem>
            <PopularActorItemFix>
                {props.popularData.map((actor, index) => (
                    <PopularActorsCard key={index}>
                        <PopularActorDetailImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}></PopularActorDetailImage>
                        <p>{actor.name}</p>
                    </PopularActorsCard>
                ))}
            </PopularActorItemFix>
        </PopularActorItem>
    );
  }