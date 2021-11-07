import { dweetBaseURL } from './baseURL';
import * as services from './services';

const dweetService = { baseURL: dweetBaseURL, ...services };

export { dweetService };
