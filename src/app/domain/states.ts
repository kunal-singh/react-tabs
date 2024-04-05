export enum ActionType{
    SPLITLEFT,
    SPLITRIGHT,
    SPLITUP,
    SPLITDOWN,
    UNSPLIT
}

export interface Action{
    type: ActionType,
    id: number
}

export type FrameContentType = string | number | null | undefined;