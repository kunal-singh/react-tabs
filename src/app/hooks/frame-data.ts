import { useState, useCallback } from 'react';

export interface UseFrameData {
  getData: (id:number) => Promise<any>
  getTabs: (id:number) => Promise<any>
  updateContent: (id:number) => Promise<any>
  updateTabsList: (id:number) => Promise<any>
  close: (id:number) => Promise<void>
}

export function useFrameData(): UseFrameData {
  function getData(id:number): Promise<any> {
    return new Promise(() => {});
  }

  function getTabs(id:number): Promise<any> {
    return new Promise(() => {});
  }

  function updateContent(id:number): Promise<any> {
    return new Promise(() => {});
  }

  function updateTabsList(id:number): Promise<any> {
    return new Promise(() => {});
  }

  function close(id:number): Promise<void> {
    return new Promise(() => {});
  }

  return { getData, getTabs ,updateContent, updateTabsList, close };
}

export default useFrameData;
