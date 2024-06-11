/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Card } from "@mui/material";
import { PopularActorDetailImage, PopularActorDetailItem, PopularActorDetailItemFix } from "../../app/styles";
import { PopularActorItemsProps } from "./props/PopularActorItemsProps";

export function PopularActorDetailItems(props: PopularActorItemsProps) {
    return (
        <PopularActorDetailItem>
            <PopularActorDetailItemFix>
                {props.popularActor.map((actor, index) => (
                    <Card className="rounded-3xl mr-2" key={index}>
                        <PopularActorDetailImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}></PopularActorDetailImage>
                        <p>{actor.name}</p>
                    </Card>
                ))}
            </PopularActorDetailItemFix>
        </PopularActorDetailItem>
    );
  }