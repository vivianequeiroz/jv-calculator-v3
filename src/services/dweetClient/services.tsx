import { config } from '../../config';
import { encodeParseDweet } from '../../utils/parser';

import { dweetBaseURL } from './baseURL';

const { streamName } = config.services.dweet;

export async function createDweet(dweet: string) {
  await dweetBaseURL.get(
    `/dweet/for/${streamName}?expression=${encodeParseDweet(dweet)}`,
  );
}

// some test... using chunks based stretegy
// type getDweetsProps = {
//   onGetDweets: (dweets: DweetDTO) => void;
// };
// export async function getDweets({ onGetDweets }: getDweetsProps): Promise<any> {
//   // connect into stream

//   const response = await dweetBaseURL.get(
//     `/listen/for/dweets/from/${streamName}`,
//     {
//       onDownloadProgress: (progressEvent) => {
//         const dataChunk = progressEvent.currentTarget.response;
//         console.log('datachunk', dataChunk);
//         onGetDweets(JSON.parse(dataChunk) as DweetDTO);
//       },
//     },
//   );

//   console.log('response', response);
// }

// Transfer-Encoding: chunked
// Connection: keep-alive
