import { render } from '@testing-library/react';

import AppFrame from './app-frame';

describe('AppFrame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppFrame />);
    expect(baseElement).toBeTruthy();
  });
});
