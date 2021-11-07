import { DweetDTO } from '../dtos/DweetDTO';

export type Dweetio = {
  listen_for: (thing: string, callback: (dweet: DweetDTO) => void) => void;
  stop_listening_for: (thing: string) => void;
};

declare global {
  interface Window {
    dweetio: Dweetio;
  }
}
