import { dweetBaseURL } from './baseURL';
import * as services from './services';

const dweetClient = { baseURL: dweetBaseURL, ...services };

export { dweetClient };
