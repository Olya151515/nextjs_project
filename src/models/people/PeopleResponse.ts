import {IPeople} from "@/models/people/IPeople";

export interface PeopleResponse{
    page:number,
    results:IPeople[],
    total_pages:number,
    total_results:number
}