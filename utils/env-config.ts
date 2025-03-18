import { z } from "zod";

const { API_URL: ApiUrl } = process.env;

export const envConfigSchema = z.object({
    ApiUrl: z.string().nonempty(),
});

export const globalEnv = {
    ApiUrl,
} as z.infer<typeof envConfigSchema>;
