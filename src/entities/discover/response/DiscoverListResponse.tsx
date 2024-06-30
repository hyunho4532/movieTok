import { Discover } from "../modal/discover";

export interface DiscoverListResponse {
    results: Discover[];
    total_pages: number;
}