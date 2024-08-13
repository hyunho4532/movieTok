import { Pagination } from "../model/Pagination";

export interface DiscoverListResponse {
    results: Pagination[];
    total_pages: number;
}