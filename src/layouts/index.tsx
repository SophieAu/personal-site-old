import '../styles/main.scss';

import React from 'react';

import { Footer, Header, Sidebar } from '../components/Meta';
import SEO from '../components/SEO';
import { meta } from '../strings';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <React.StrictMode>
    <SEO title={meta.name} description={meta.siteDescription} slug="" />
    <div id="root">
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  </React.StrictMode>
);

export default Layout;
