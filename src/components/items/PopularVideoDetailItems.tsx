/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Card } from "@mui/material";
import { PopularVideoDetailItem, PopularVideoDetailItemFix, YoutubeComponent } from "../../app/styles";
import { PopularVideoItemsProps } from "./props/PopularVideoItemsProps";
import YouTube from "react-youtube";

export function PopularVideoDetailItems(props: PopularVideoItemsProps) {

    console.log(props.popularVideo);

    return (
        <PopularVideoDetailItem>
            <PopularVideoDetailItemFix>
                {props.popularVideo.map((video, index) => (
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