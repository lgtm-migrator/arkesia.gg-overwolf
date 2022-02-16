/// <reference types="vite/client" />
/// <reference types="@overwolf/types" />

interface ImportMetaEnv {
  readonly VITE_APP_LOST_ARK_CLASS_ID: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
