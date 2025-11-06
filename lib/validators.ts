import { z } from 'zod';

// Schema for sigining users in
export const signInFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    role: z.string(),
    password: z.string().min(4, 'Password must be at least 4 characters'),
    confirmPassword: z
      .string()
      .min(4, 'Confirm password must be at least 4 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

  // Schema for adding new dot run
  export const addDotRunSchema = z.object({
    daterun:  z.coerce.date(),
    et: z.string().trim().min(1, {message: 'Elapsed time is required'}),
    loops:  z.coerce.number().min(1, {message: 'Number of loops is required'}),
    best: z.string().trim().min(1, {message: 'Best loop time is required'}),
    shoes:  z.string().optional(),
    comments: z.string().optional(),
  })

  // To do:  Add schema for updating a Dot Run here


  // Schema for Adding new Workout
  export const addWorkoutSchema = z.object({
      workoutDate: z.coerce.date(),
      situps: z.coerce.number().min(1, {message: 'Number of situps'}),
      pushups: z.coerce.number().min(1, {message: 'Number of pushups'}),
      deadlifts: z.coerce.number().optional(),
      ballrolls: z.coerce.number().optional(),
      kneeups: z.coerce.number().optional(),
      comments: z.string().optional(),
  })

  // Schema for Adding new Hill Run
  export const addHillRunSchema = z.object({
     date: z.string().min(1, "Date is required"),
     numHills:   z.coerce.number(), 
      et: z.coerce.number(),
      best: z.coerce.number(),
      shoes:  z.string().optional(),
      comments: z.string().optional()
  })

  // Schema for adding new Test Item
  export const testItemSchema = z.object({
    date: z.coerce.date(),
    item: z.string().min(1, "Item name is required"),
    qty: z.coerce.number().min(0, 'Quantity is required'),
    comments: z.string().optional()
  })

  // Update a test item
  export const updateTestItemSchema = testItemSchema.extend({
    id: z.string().min(1, "ID is required"),
  });

  export const formSchema = z.object({
    date: z.string().min(1, "Date is required"),
    item: z.string().min(1, "Item name is required"),
    qty: z.number().min(0, 'Quantity is required'),
    comments: z.string().optional()
  })