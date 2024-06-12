/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Card } from "@mui/material";
import { PopularActorDetailImage, PopularActorItem, PopularActorItemFix } from "../../app/styles";
import { PopularActorItemsProps } from "./props/PopularActorItemsProps";
import { useEffect } from "react";

export function PopularActorItems(props: PopularActorItemsProps) {

    useEffect(() => {
        console.log(props.popularActor);
    })

    return (
        <PopularActorItem>
            <PopularActorItemFix>
                {props.popularActor.map((actor, index) => (
                    <Card className="rounded-3xl mr-2" key={index}>
                        <PopularActorDetailImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}></PopularActorDetailImage>
                        <p>{actor.name}</p>
                    </Card>
                ))}
            </PopularActorItemFix>
        </PopularActorItem>
    );
  }