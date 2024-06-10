/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { PopularActorItem, PopularActorItemFix } from "../../app/styles";
import { PopularActorItemsProps } from "./props/PopularActorItemsProps";

export function PopularActorItems(props: PopularActorItemsProps) {
    return (
        <PopularActorItem>
            <PopularActorItemFix>
                {props.popularActor.map((actor, index) => (
                    <div key={index}>
                        <p>{actor.name}</p>
                    </div>
                ))}
            </PopularActorItemFix>
        </PopularActorItem>
    );
  }