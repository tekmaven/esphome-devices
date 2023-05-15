import React from 'react';

import Layout from './Layout';
import SEO from './SEO';

export default function Home({ children }) {
  return (
    <Layout>
      <SEO />
      {children}
    </Layout>
  );
}
