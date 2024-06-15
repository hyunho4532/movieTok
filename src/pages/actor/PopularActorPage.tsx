import { useEffect, useState } from "react";
import { PopularActorProps } from "./props/PopularActorProps";
import { PopularActorArticle, PopularActorSection } from "../../app/styles";
import { PopularActorItems } from "../../components/items/PopularActorItems";

export function PopularActorPage(props: PopularActorProps) {

    const [popularActors, setPopularActors] = useState<any[]>([]);

    useEffect(() => {
        props.popularActor.then(data => {
            setPopularActors(data);
        })

        console.log(props.popularActor);
    })

    return (
        <PopularActorSection>
            <PopularActorArticle>
                <h1 className="text-center text-xl font-bold">요즘 흥행 중인 배우들</h1>
                <PopularActorItems popularData={popularActors}  />
            </PopularActorArticle>
        </PopularActorSection>
    )
}