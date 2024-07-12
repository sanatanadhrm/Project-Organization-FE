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
import { Input } from "@/components/ui/input"
import SideBlob from '@/components/ui/sideblob';

const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password minimum 8 characters"),
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
    <main className="flex min-h-screen flex-row items-center">
      <SideBlob />
      <section className='w-full sm:w-2/5 h-screen flex justify-center items-center px-[15px] sm:px-16'>
        <div className='w-full sm:min-w-[300px]'>
          <p className='text-3xl font-semibold'>Sign Up</p>
          <p className='text-base font-normal mt-5'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-10">
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
              <Button variant='outline' type="submit" className='w-full bg-[#FE853A] text-white'>Submit</Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  )
}
