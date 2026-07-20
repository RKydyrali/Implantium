import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { AppConvexProvider } from '@/providers/AppConvexProvider';
import Home from '@/pages/Home';
import Doctors from '@/pages/Doctors';
import ServiceDetail from '@/pages/ServiceDetail';
import NotFound from '@/pages/NotFound';
import Admin from '@/pages/Admin';
import Visitka from '@/pages/Visitka';
import Visitka2 from '@/pages/Visitka2';

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <AppConvexProvider>
        <StaticRouter location={url}>
          <AppRouter pages={{ Home, Doctors, ServiceDetail, NotFound, Admin, Visitka, Visitka2 }} />
        </StaticRouter>
      </AppConvexProvider>
    </StrictMode>
  );
  return html;
}
