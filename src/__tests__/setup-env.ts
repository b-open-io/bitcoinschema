import { beforeAll } from 'bun:test';
import { JSDOM } from 'jsdom';

beforeAll(() => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.document = dom.window.document;
  global.window = dom.window;
  global.navigator = { userAgent: 'node.js' };
  Object.defineProperties(window, {
    matchMedia: {
      writable: true,
      value: () => ({
        matches: false,
        addListener: () => { },
        removeListener: () => { },
      }),
    },
  });
});
