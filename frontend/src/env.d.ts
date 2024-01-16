interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PUBLIC_BACK_URL_DEV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
