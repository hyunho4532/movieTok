/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Card } from "@mui/material";
import { PopularActorDetailImage, PopularActorDetailItem, PopularActorDetailItemFix } from "../../../app/styles";
import { PopularItemsProps } from "../props/PopularItemsProps";

export function PopularActorDetailItems(props: PopularItemsProps) {
    return (
        <PopularActorDetailItem>
            <PopularActorDetailItemFix>
                {props.popularData.map((actor, index) => (
                    <Card className="rounded-3xl mr-2" key={index}>
                        <PopularActorDetailImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}></PopularActorDetailImage>
                        <p>{actor.name}</p>
                    </Card>
                ))}
            </PopularActorDetailItemFix>
        </PopularActorDetailItem>
    );
  }