
export enum Orientation{
    HORIZONTAL,
    VERTICAL
}

export interface FrameData{
    id: number
    orientation?: Orientation
}

export interface FrameNode{
    data : FrameData
    left : FrameNode | null
    right :  FrameNode | null
}