import { z } from "zod";

const { API_URL: ApiUrl, SECRET_KEY: SecretKey } = process.env;

export const envConfigSchema = z.object({
    ApiUrl: z.string().nonempty(),
    SecretKey: z.string().nonempty(),
});

export const globalEnv = {
    ApiUrl,
    SecretKey,
} as z.infer<typeof envConfigSchema>;
