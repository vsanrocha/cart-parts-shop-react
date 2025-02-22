import { ReactElement } from 'react';
import { render as rtlRender, RenderOptions, screen, fireEvent, waitFor } from '@testing-library/react';
import { TestProviders } from './TestProviders';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => rtlRender(ui, { wrapper: TestProviders, ...options });

export { customRender as render, screen, fireEvent, waitFor };
