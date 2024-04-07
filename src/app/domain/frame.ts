import { FrameContentType } from "./states"
import { Tabs } from "./tabs"

export enum Orientation{
    HORIZONTAL,
    VERTICAL
}

export type FrameData = ChildNodeData | InternalNodeData

export interface FrameMetaData{
    tabs?: Tabs
}

export interface ChildNodeData {
    id:number,
    metaData?: FrameMetaData
}

export interface InternalNodeData {
    orientation: Orientation
}

export interface FrameNode{
    data : FrameData
    left : FrameNode | null
    right :  FrameNode | null
}