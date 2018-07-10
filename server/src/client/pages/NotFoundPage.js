import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Sorry, we could not find the page you were looking for!</h1>;
};

export default {
  component: NotFoundPage
};
