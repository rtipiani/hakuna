/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Image module declarations
declare module '*.webp' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.jpg' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.jpeg' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.png' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.gif' {
    const src: ImageMetadata;
    export default src;
}

declare module '*.svg' {
    const src: ImageMetadata;
    export default src;
}