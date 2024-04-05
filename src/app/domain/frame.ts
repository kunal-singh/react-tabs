
export enum Orientation{
    HORIZONTAL,
    VERTICAL
}

export type FrameData = ChildNodeData | InternalNodeData


export interface ChildNodeData {
    id:number
}

export interface InternalNodeData {
    orientation: Orientation
}

export interface FrameNode{
    data : FrameData
    left : FrameNode | null
    right :  FrameNode | null
}