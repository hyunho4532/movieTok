/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Card } from "@mui/material";
import { PopularVideoDetailItem, PopularVideoDetailItemFix, YoutubeComponent } from "../../../app/styles";
import YouTube from "react-youtube";
import { PopularItemsProps } from "../PopularActorItems";

export function PopularVideoDetailItems(props: PopularItemsProps) {

    return (
        <PopularVideoDetailItem>
            <PopularVideoDetailItemFix>
                {props.popularData.map((video, index) => (
                    <Card className="rounded-3xl mr-2" key={index}>
                        <YouTube 
                            videoId={video.key} 
                            opts={YoutubeComponent}
                        />
                    </Card>
                ))}
            </PopularVideoDetailItemFix>
        </PopularVideoDetailItem>
    );
  }