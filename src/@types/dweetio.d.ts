export type Dweetio = {
  listen_for: (thing: string, callback: (thing: string) => void) => void;
  stop_listening_for: (thing: string) => void;
};

declare global {
  interface Window {
    dweetio: Dweetio;
  }
}
