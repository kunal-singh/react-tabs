import { useState, useCallback } from 'react';
import { Tabs } from '../domain/tabs';

export interface UseFrameData {
  getData: (id:number) => Promise<any>
  getTabs: (id:number) => Promise<Tabs>
  updateContent: (id:number) => Promise<any>
  updateTabsList: (id:number) => Promise<any>
  close: (id:number) => Promise<void>
}

export function useFrameData(): UseFrameData {
  function getData(id:number): Promise<any> {
    return new Promise((res) => '');
  }

  function getTabs(id:number): Promise<Tabs> {
    return new Promise((res) => []);
  }

  function updateContent(id:number): Promise<any> {
    return new Promise((res) => '');
  }

  function updateTabsList(id:number): Promise<any> {
    return new Promise((res) => '');
  }

  function close(id:number): Promise<void> {
    return new Promise((res) => '');
  }

  return { getData, getTabs ,updateContent, updateTabsList, close };
}

export default useFrameData;
