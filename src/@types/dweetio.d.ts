import { DweetDTO } from '../dtos/DweetDTO';

export type Dweetio = {
  get_latest_dweet_for: (
    thing: string,
    callback: (err: Error | null, dweet: DweetDTO[]) => void,
  ) => void;
  listen_for: (thing: string, callback: (dweet: DweetDTO) => void) => void;
  stop_listening_for: (thing: string) => void;
};

declare global {
  interface Window {
    dweetio: Dweetio;
  }
}
