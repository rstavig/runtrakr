"use client";

import { FaRunning } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { PasswordInput } from "@/components/ui/password-input";
  import { zodResolver } from "@hookform/resolvers/zod";
  import Link from "next/link";
  import { useForm } from "react-hook-form";
  import * as z from "zod";
  import { useRouter } from "next/navigation";

  
  const formSchema = z
  .object({
    email: z.string().email(),
      password: z
      .string()
      .min(4, "Password must contain at least 4 characters"),  
    passwordConfirm: z.string(),
  })  
//   .superRefine((data, ctx) => {
//     if (data.password !== data.passwordConfirm) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["passwordConfirm"],
//         message: "Passwords do not match",
//       });
//     }
  
export default function SignupPage() {
    const router = useRouter();
        

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("login validation passed: ", data);
        router.push("/dashboard");
      };
        



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
          passwordConfirm: "",
        },
      })

    return (
        <>
          <FaRunning size={50} className="text-amber-400"/>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Sign up to track your runs.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={form.handleSubmit(handleSubmit)}
                >
                    <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="john@doe.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="•••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
        <FormField
   control={form.control}
   name="passwordConfirm"
   render={({ field }) => (
     <FormItem>
       <FormLabel>Confirm password</FormLabel>
       <FormControl>
         <PasswordInput placeholder="•••••" {...field} />
       </FormControl>
       <FormMessage />
     </FormItem>
   )}
 />
  <Button type="submit">Sign up</Button>
  </form>
  </Form>             
    </CardContent>
        <CardFooter className="justify-between">
          <small>Already have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
      
    