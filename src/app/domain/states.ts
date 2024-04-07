import { FrameMetaData } from "./frame";

export enum ActionType{
    SPLITLEFT,
    SPLITRIGHT,
    SPLITUP,
    SPLITDOWN,
    UNSPLIT
}

export interface Action{
    type: ActionType,
    id: number,
    metaData?: FrameMetaData
}

export type FrameContentType = string | number | null | undefined;