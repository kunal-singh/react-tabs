export enum ActionType{
    SPLIT,
    UNSPLIT
}

export interface Action{
    type: ActionType,
    id: number
}