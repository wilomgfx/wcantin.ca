import { RouterProps } from '@reach/router';
import React from 'react';
import Layout from '../components/layout';

const IndexPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    Site in construction!
    Far from done :D
  </Layout>
);

export default IndexPage;
