import { Outlet } from 'react-router';
import { Header, Footer } from '../index';
import { useEffect } from 'react';

const AppLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="app-layout">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
