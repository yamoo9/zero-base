import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fetch } from 'cross-fetch';

global.fetch = fetch;
