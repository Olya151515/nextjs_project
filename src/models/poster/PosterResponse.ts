import {IPoster} from "@/models/poster/IPoster";

export interface PosterResponse{
    backdrops: IPoster[],
    id:number,
    logos:IPoster[],
    posters:IPoster[]
}