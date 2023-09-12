import {z} from 'zod';

export const SignupValidationSchema = z
.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().nonempty('Email is required').email(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, {message: 'Password must be at least 8 characters'})
    .max(20, {message: 'Password must be less than 20 characters'}),
  confirmPassword: z.string().nonempty('Confirm Password is required'),
})
.refine(data => data.password === data.confirmPassword, {
  message: 'Passwords does not match',
  path: ['confirmPassword'],
});

export type SignupFromType = z.infer<typeof SignupValidationSchema>;