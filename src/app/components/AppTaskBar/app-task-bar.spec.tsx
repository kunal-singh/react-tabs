import { render } from '@testing-library/react';

import AppTaskBar from './app-task-bar';

describe('AppTaskBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppTaskBar />);
    expect(baseElement).toBeTruthy();
  });
});
