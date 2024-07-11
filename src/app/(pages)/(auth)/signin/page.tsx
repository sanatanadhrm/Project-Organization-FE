"use client";
import Image from 'next/image'
import React from 'react'
import { blob } from '@/public/images'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password minimum 8 characters"),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export default function SignIn() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });


  const onSubmit = (data: LoginFormSchema) => {
    console.log(data);
  };
  return (
    <main className="flex min-h-screen flex-row items-center">
      <section className='w-1/2 hidden sm:block relative'>
        <div className='relative'>
          <Image src={blob} className="w-full h-screen" objectFit="cover" alt="blob" width={810} height={500} />
        </div>
        <div className='w-full absolute top-0 left-0 h-screen flex flex-col justify-center px-14'>
          <p className='w-fit font-bold text-6xl text-white'>OrgControl</p>
          <p className='w-[500px] font-medium text-xl mt-5 text-white'>Our vision is to provide convenience and help increase your sales business.</p>
        </div>
      </section>
      <section className='w-1/2 h-screen flex justify-center items-center'>
        <div className='w-[460px]'>
          <p className='text-3xl font-semibold'>Sign In</p>
          <p className='text-base font-normal mt-5'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10">
              <FormField
                control={form.control}
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
                control={form.control}
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
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  )
}
