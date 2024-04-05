import { useState } from 'react';
import { Tabs } from '../domain/tabs';
import { FrameContentType } from '../domain/states';

const initialContent = (frameId:number) =>{
  return `Initial Content for frame `+frameId
}

const initialTabs = [{
  name:'Untitled'
}]

export function useFrameData(frameId:number){
  const [tabs, setTabs] = useState<Tabs>([...initialTabs]);
  const [content,setContent] = useState<FrameContentType>(initialContent(frameId));
  return { tabs, setTabs, content, setContent };
}

export default useFrameData;
