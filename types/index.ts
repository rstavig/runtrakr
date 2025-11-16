import { addDotRunSchema, workoutItemSchema } from "@/lib/validators";
import { z } from "zod";

export type Dots = z.infer<typeof addDotRunSchema> & {
    daterun: string;
    et: string;
    loops: number;
    best: string;
    shoes: string;
    comments:  string;
}

export type Workout = z.infer<typeof workoutItemSchema> & {
    workoutDate: Date,
    situps: number,
    pushups: number,
    deadlifts: number,
    ballrolls: number,
    kneeups: number,
    comments: string,
}