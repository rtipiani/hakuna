interface ImportMetaEnv {
    readonly RESEND_API_KEY: string;
    readonly CONTACT_EMAIL_FROM: string;
    readonly CONTACT_EMAIL_TO: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}