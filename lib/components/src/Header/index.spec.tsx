import { render } from '@testing-library/react';

import { HeaderComponent } from '.';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderComponent text="test title" />);
    expect(baseElement).toBeTruthy();
  });
});
