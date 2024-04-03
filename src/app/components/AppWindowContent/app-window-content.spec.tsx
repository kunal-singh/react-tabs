import { render } from '@testing-library/react';

import AppWindowContent from './app-window-content';

describe('AppWindowContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppWindowContent />);
    expect(baseElement).toBeTruthy();
  });
});
