export enum ActionType{
    SPLIT,
    UNSPLIT
}

export interface Action{
    type: ActionType,
    id: number
}

export type FrameContentType = string | number | null | undefined;