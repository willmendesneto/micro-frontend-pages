import React, { Component } from 'react';
import Head from 'next/head';

const renderAsyncProps = ComposedComponent => {
  class HOC extends Component {
    static async getInitialProps(ctx) {
      const { req } = ctx;
      const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
      const subProps = await ComposedComponent.getInitialProps(ctx)

      return {
        pageTitle: 'My Page',
        ...subProps,
        userAgent
      };
    }

    render() {
      const { userAgent, pageTitle } = this.props;
      return (
          <div>
            <Head>
              <title>{pageTitle}</title>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <ComposedComponent {...this.props} />
          </div>
          )
      }
    }
    return HOC;
  }
  
  export default renderAsyncProps;