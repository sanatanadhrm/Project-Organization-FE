"use client";
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from 'next/link';
import axios from '@/lib/axios';

import {
  Button,
  Input,
  SideBlob,
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Alert, AlertTitle, AlertDescription
} from "@/components/constants"
import { useRouter } from 'next/navigation';
import { CircleCheck, CircleX } from 'lucide-react';

type Role = {
  id: number,
  name: string,
}

type RoleResponse = {
  data: Role[],
}

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password minimum 8 characters"),
  role_id: z.number().min(1, "Role is required")
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export default function SignIn() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      role_id: 0,
    },
  });

  const { control, handleSubmit, setValue } = form;

  const onSubmit = (data: LoginFormSchema) => {
    postDataLogin(data);

    // Reset form value
    setValue('email', '');
    setValue('password', '');
    setValue('role_id', 0);
  };

  const postDataLogin = async (data: LoginFormSchema) => {
    try {
      const response = await axios.post('/sign-in', data);

      if (response.status === 201) {
        setSuccess('Login Successfully!');

        localStorage.setItem('accessToken', response.data.data.accessToken);
        console.log(response.data);

        setTimeout(() => {
          setSuccess(null);

          // Redirect to ...

        }, 3000);
      }
    } catch (err: any) {
      setError(err.response.data.message);
      setLoading(false);

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }

  const fetchDataRoles = async () => {
    try {
      const response = await axios.get<RoleResponse>('/roles');
      setRoles(response.data.data);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataRoles();
  }, []);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <main className="flex min-h-screen flex-row md:justify-center items-center">
      <SideBlob />
      <section className='w-full sm:w-3/4 lg:w-2/5 h-fit flex justify-center items-center px-[15px] sm:p-16 lg:px-16 sm:shadow-md lg:shadow-none sm:rounded-lg'>
        <div className='w-full sm:min-w-[300px]'>
          <p className='text-[25px] sm:text-2xl font-semibold'>Sign In</p>
          <p className='text-sm font-normal mt-2'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='space-y-1.5 mt-10'>
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm'>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" className='text-sm' {...field} value={field.value} />
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm'>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Password" className='text-sm' {...field} value={field.value} />
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="role_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm'>Role</FormLabel>
                      <Select onValueChange={(value) => {
                        setValue("role_id", Number(value));
                      }}
                        value={field.value ? field.value.toString() : ""}
                        defaultValue={field.value.toString()}>
                        <FormControl>
                          <SelectTrigger className='text-sm text-gray-600'>
                            <SelectValue placeholder="Select a Role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role.id} value={role.id.toString()} className='text-sm'>
                              {role.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
              </div>
              <Button variant='outline' type="submit" className='w-full bg-[#FE853A] text-white text-sm font-semibold mt-7'>Sign In</Button>
              <p className='text-center mt-3 text-sm font-normal'>Don&apos;t have an Account? <Link href="/signup" className='font-medium underline'>Sign Up</Link></p>
            </form>
          </Form>
        </div>
      </section>

      {/* Tampilkan Alert */}
      {error && (
        <Alert variant="default" className='absolute top-0 left-0 w-fit shadow-sm shadow-gray-300'>
          <CircleX className="w-5 h-5" />
          <AlertTitle className='text-red-500 font-semibold'>Error</AlertTitle>
          <AlertDescription className='capitalize'>{error}!</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert variant="default" className='absolute top-0 left-0 w-fit shadow-sm shadow-gray-300'>
          <CircleCheck className="w-5 h-5" />
          <AlertTitle className='text-green-500 font-semibold'>Success</AlertTitle>
          <AlertDescription className='capitalize'>{success}!</AlertDescription>
        </Alert>
      )}
    </main>
  )
}
