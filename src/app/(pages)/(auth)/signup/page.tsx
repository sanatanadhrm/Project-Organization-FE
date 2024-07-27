"use client";
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from 'next/link';

import {
  Button,
  Input,
  SideBlob,
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/constants"



const registerFormSchema = z.object({
  organizationName: z.string(),
  email: z.string().email(),
  category: z.string().min(1, "Category is required"),
  password: z.string().min(4, "Password minimum 8 characters"),
  confirmPassword: z.string().min(4, "Password minimum 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>


export default function SignUp() {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: RegisterFormSchema) => {
    console.log(data);
  };
  return (
    <main className="flex min-h-screen flex-row md:justify-center items-center">
      <SideBlob />
      <section className='w-full sm:w-3/4 lg:w-2/5 h-fit flex justify-center items-center px-[15px] sm:p-16 lg:px-16 sm:shadow-md lg:shadow-none sm:rounded-lg'>
        <div className='w-full sm:min-w-[350px]'>
          <p className='text-3xl font-semibold'>Sign Up</p>
          <p className='text-base font-normal mt-2'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-1.5 mt-10">
                <FormField
                  control={control}
                  name="organizationName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm sm:text-base'>Organization Name</FormLabel>
                      <FormControl>
                        <Input className='text-sm sm:text-base' placeholder="Organization Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm sm:text-base'>Email</FormLabel>
                      <FormControl>
                        <Input className='text-sm sm:text-base' placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm sm:text-base'>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='text-sm sm:text-base text-gray-600'>
                            <SelectValue className='text-sm sm:text-base' placeholder="Select a Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem className='text-sm sm:text-base' value="m@example.com">m@example.com</SelectItem>
                          <SelectItem className='text-sm sm:text-base' value="m@google.com">m@google.com</SelectItem>
                          <SelectItem className='text-sm sm:text-base' value="m@support.com">m@support.com</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm sm:text-base'>Password</FormLabel>
                      <FormControl>
                        <Input className='text-sm sm:text-base' type="password" placeholder="Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm sm:text-base'>Confirm Password</FormLabel>
                      <FormControl>
                        <Input className='text-sm sm:text-base' type="password" placeholder="Confirm Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button variant='outline' type="submit" className='w-full bg-[#FE853A] text-white text-sm sm:text-base font-semibold mt-7'>Sign Up</Button>
              <p className='text-center mt-3 text-sm sm:text-base font-normal'>Already have an Account? <Link href="/signin" className='font-medium underline'>Sign In</Link></p>
            </form>
          </Form>
        </div>
      </section>
    </main>
  )
}
