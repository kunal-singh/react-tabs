import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useFrameData from './frame-data';

describe('useFrameData', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useFrameData());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
