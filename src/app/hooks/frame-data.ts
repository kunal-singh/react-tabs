import { useState } from 'react';
import { Tabs } from '../domain/tabs';
import { FrameContentType } from '../domain/states';

const initialContentGen = (frameId:number) =>{
  return `Initial Content for frame `+frameId
}

const initialTabsGen = [{
  name:'Untitled'
}]

export function useFrameData(frameId:number, initialTabs: Tabs = [], initialContent: FrameContentType = null){
  
  
  
  const [tabs, setTabs] = useState<Tabs>([...(initialTabs.length ? initialTabs :  initialTabsGen)]);
  const [content,setContent] = useState<FrameContentType>(initialContent ?? initialContentGen(frameId));
  
  function addTab(): Promise<void>{
    return new Promise((resolve,reject)=>{
      setTabs([...tabs, ...initialTabsGen]);
      resolve()
    })
  }

  function removeTab(index:number): Promise<void>{
     return new Promise((resolve,reject)=>{
      setTabs(tabs.filter((v,i)=>i!==index));
      resolve()
    })
  }
  
  return { tabs, addTab, removeTab,content, setContent };
}

export default useFrameData;
