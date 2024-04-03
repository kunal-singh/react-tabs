import { render } from '@testing-library/react';

import AppWindow from './app-window';

describe('AppWindow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppWindow />);
    expect(baseElement).toBeTruthy();
  });
});
