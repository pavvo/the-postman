/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOG_MESSAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
