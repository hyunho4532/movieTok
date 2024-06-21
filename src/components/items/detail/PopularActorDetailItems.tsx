/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Card } from "@mui/material";
import { PopularActorDetailImage, PopularActorDetailItem, PopularActorDetailItemFix } from "../../../app/styles";
import { PopularItemsProps } from "../props/PopularItemsProps";

export function PopularActorDetailItems(props: PopularItemsProps) {
    return (
        <PopularActorDetailItem>
            <PopularActorDetailItemFix>
                {props.popularData.map((actor, index) => (
                    <div className="rounded-3xl mr-2" key={index}>
                        { actor.profile_path != null ? <PopularActorDetailImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}></PopularActorDetailImage> : "배우 사진이 없습니다." }
                    </div>
                ))}
            </PopularActorDetailItemFix>
        </PopularActorDetailItem>
    );
  }