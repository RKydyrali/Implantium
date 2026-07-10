import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { AppConvexProvider } from '@/providers/AppConvexProvider';

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <AppConvexProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </AppConvexProvider>
    </StrictMode>
  );
  return html;
}
