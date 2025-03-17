import { z } from "zod";

const { NEXT_PUBLIC_API_URL: ApiUrl } = process.env;

export const envConfigSchema = z.object({
    ApiUrl: z.string().nonempty(),
});

const validateEnv = envConfigSchema.parse({ ApiUrl });
if (!validateEnv) throw new Error("💥 Invalid environment configuration 💥");

export const globalEnv = {
    ApiUrl,
} as z.infer<typeof envConfigSchema>;
