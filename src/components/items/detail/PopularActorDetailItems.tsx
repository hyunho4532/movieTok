/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PopularActorDetailCard, PopularActorDetailImage, PopularActorDetailItem, PopularActorDetailItemFix } from "../../../app/styles";
import { PopularItemsProps } from "../PopularActorItems";

export function PopularActorDetailItems(props: PopularItemsProps) {
    return (
        <PopularActorDetailItem>
            <PopularActorDetailItemFix>
                {props.popularData.map((actor, index) => (
                    <PopularActorDetailCard key={index}>
                        { actor.profile_path != null ? <PopularActorDetailImage src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}></PopularActorDetailImage> : "배우 사진이 없습니다." }
                    </PopularActorDetailCard>
                ))}
            </PopularActorDetailItemFix>
        </PopularActorDetailItem>
    );
  }