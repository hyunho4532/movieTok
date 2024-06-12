/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Card } from "@mui/material";
import { PopularActorDetailItem, PopularActorDetailItemFix } from "../../app/styles";
import { PopularVideoItemsProps } from "./props/PopularVideoItemsProps";

export function PopularVideoDetailItems(props: PopularVideoItemsProps) {

    console.log(props.popularVideo);

    return (
        <PopularActorDetailItem>
            <PopularActorDetailItemFix>
                {props.popularVideo.map((video, index) => (
                    <Card className="rounded-3xl mr-2" key={index}>
                        <p>{video.name}</p>
                    </Card>
                ))}
            </PopularActorDetailItemFix>
        </PopularActorDetailItem>
    );
  }