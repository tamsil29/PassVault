import {z} from 'zod';

export const LoginValidationSchema = z
.object({
  email: z.string().nonempty('Email is required').email(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, {message: 'Password must be at least 8 characters'}),
})
.required();

export type LoginCredentialsType = z.infer<typeof LoginValidationSchema>;