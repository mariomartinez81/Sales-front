import '@testing-library/jest-dom';
import 'next-router-mock/dynamic-routes';
import nextRouterMock from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
  useMutation: jest.fn(),
}));

jest.mock('next/router', () => require('next-router-mock'));

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
  }
}

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      // eslint-disable-next-line func-names, object-shorthand
      addListener: function () {},
      // eslint-disable-next-line func-names, object-shorthand
      removeListener: function () {},
    };
  };
