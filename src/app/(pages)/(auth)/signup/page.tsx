"use client";
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import SideBlob from '@/components/ui/sideblob';

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
      <section className='w-full sm:w-3/4 lg:w-2/5 h-screen flex justify-center items-center px-[15px] sm:px-16'>
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
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Organization Name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
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
                            <SelectValue placeholder="Select a Category" />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} />
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
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirm Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button variant='outline' type="submit" className='w-full bg-[#FE853A] text-white mt-7'>Sign Up</Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  )
}
