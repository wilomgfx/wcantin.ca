import '@testing-library/jest-dom';
import 'react-testing-library/cleanup-after-each';

global.___loader = {
  enqueue: jest.fn(),
};
