import { useState, useCallback } from 'react';

export interface UseFrameData {
  getData: () => Promise<any>;
  updateContent: () => Promise<any>;
  updateTabsList: () => Promise<any>;
  close: () => Promise<void>;
}

export function useFrameData(): UseFrameData {
  function getData(): Promise<any> {
    return new Promise(() => {});
  }

  function updateContent(): Promise<any> {
    return new Promise(() => {});
  }

  function updateTabsList(): Promise<any> {
    return new Promise(() => {});
  }

  function close(): Promise<void> {
    return new Promise(() => {});
  }

  return { getData, updateContent, updateTabsList, close };
}

export default useFrameData;
