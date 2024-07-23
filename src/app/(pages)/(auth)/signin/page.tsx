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
import Link from 'next/link';



const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password minimum 8 characters"),
  role: z.string().min(1, "Role is required")
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export default function SignIn() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data);
  };
  return (
    <main className="flex min-h-screen flex-row md:justify-center items-center">
      <SideBlob />
      <section className='w-full sm:w-3/4 lg:w-2/5 h-screen flex justify-center items-center px-[15px] sm:px-16'>
        <div className='w-full sm:min-w-[300px]'>
          <p className='text-[25px] sm:text-3xl  font-semibold'>Sign In</p>
          <p className='text-sm sm:text-base font-normal mt-2'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='space-y-1.5 mt-10'>
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm sm:text-base'>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" className='text-sm sm:text-base' {...field} />
                      </FormControl>
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
                        <Input type="password" placeholder="Password" className='text-sm sm:text-base' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm sm:text-base'>Role</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='text-sm sm:text-base text-gray-600'>
                            <SelectValue placeholder="Select a Role" />
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
              </div>
              <Button variant='outline' type="submit" className='w-full bg-[#FE853A] text-white font-semibold text-sm sm:text-base mt-7'>Sign In</Button>
              <p className='text-center mt-3 text-sm sm:text-base font-normal'>Don&apos;t have an Account? <Link href="/signup" className='font-medium underline'>Sign Up</Link></p>
            </form>
          </Form>
        </div>
      </section>
    </main>
  )
}
