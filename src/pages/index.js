import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Nola ya heard</p>
    <Link to="/about/">Read about me &rarr;</Link>
  </Layout>
);
