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
import { CircleCheck, CircleX } from 'lucide-react';
import { useRouter } from 'next/navigation';


type Category = {
  id: number,
  name: string,
}

type CategoryResponse = {
  data: Category[],
}


const registerFormSchema = z.object({
  name: z.string().min(1, "Organization Name is required"),
  email: z.string().email(),
  category: z.number().min(1, "Category is required"),
  role_id: z.number().min(1, "Role is required"),
  password: z.string().min(4, "Password minimum 8 characters"),
  confirmPassword: z.string().min(4, "Password minimum 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>


export default function SignUp() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      category: 0,
      role_id: 12,
      password: "",
      confirmPassword: "",
    },
  });

  const { control, handleSubmit, setValue } = form;

  const onSubmit = (data: RegisterFormSchema) => {
    postDataRegistration(data);

    // Reset form setelah submit berhasil
    setValue("name", "");
    setValue("email", "");
    setValue("category", 0);
    setValue("password", "");
    setValue("confirmPassword", "");
  };

  const postDataRegistration = async (data: RegisterFormSchema) => {
    try {
      const response = await axios.post('/users/add', data);

      if (response.status === 201) {
        setSuccess("Registration successful!");

        setTimeout(() => {
          setSuccess(null);

          // Redirect to login page
          router.push('/signin');
        }, 3000);

      }
    } catch (err: any) {
      setError(err.response.data.message);
      setLoading(false);

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const fetchDataCategories = async () => {
    try {
      const response = await axios.get<CategoryResponse>('/category');
      setCategories(response.data.data);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setLoading(false);

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  useEffect(() => {
    fetchDataCategories();
  }, []);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <main className="flex min-h-screen flex-row md:justify-center items-center">
      <SideBlob />
      <section className='w-full sm:w-3/4 lg:w-2/5 h-screen flex justify-center items-center px-[15px] sm:p-16 lg:px-16 sm:shadow-md lg:shadow-none sm:rounded-lg'>
        <div className='w-full sm:min-w-[350px]'>
          <p className='text-[25px] sm:text-2xl font-semibold'>Sign Up</p>
          <p className='text-sm font-normal mt-2'>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-1.5 mt-5">
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm'>Organization Name</FormLabel>
                      <FormControl>
                        <Input className='text-sm' placeholder="Organization Name" {...field} value={field.value} />
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm'>Email</FormLabel>
                      <FormControl>
                        <Input className='text-sm' placeholder="Email" {...field} value={field.value} />
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm'>Category</FormLabel>
                      <Select onValueChange={(value) => {
                        setValue("category", Number(value));
                      }} value={field.value ? field.value.toString() : ""} defaultValue={field.value.toString()}>
                        <FormControl>
                          <SelectTrigger className='text-sm text-gray-600'>
                            <SelectValue className='text-sm' placeholder="Select a Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} className='text-sm' value={category.id.toString()}>{category.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                        <Input className='text-sm' type="password" placeholder="Password" {...field} value={field.value} />
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm'>Confirm Password</FormLabel>
                      <FormControl>
                        <Input className='text-sm' type="password" placeholder="Confirm Password" {...field} value={field.value} />
                      </FormControl>
                      <FormMessage className='text-xs' />
                    </FormItem>
                  )}
                />
              </div>
              <Button variant='outline' type="submit" className='w-full bg-[#FE853A] text-white text-sm font-semibold mt-7'>Sign Up</Button>
              <p className='text-center mt-3 text-sm font-normal'>Already have an Account? <Link href="/signin" className='font-medium underline'>Sign In</Link></p>
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
