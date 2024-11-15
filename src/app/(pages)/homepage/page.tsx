"use client";
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import debounce from 'lodash.debounce';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

import {
  Input,
  Button,
  CalendarDays,
  Filter,
  Navbar,
  Footer,
  Form, FormControl, FormField, FormItem, FormMessage,
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
  Avatar, AvatarFallback, AvatarImage,
} from '@/components/constants';


const searchSchema = z.object({
  query: z.string().min(1, "Search query is required"),
});

type SearchSchema = z.infer<typeof searchSchema>;

export default function Homepage() {
  const form = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });

  const { control, watch } = form;
  const query = watch("query");

  // Create a ref to store the debounced search function
  const debouncedSearchRef = useRef(debounce((query: string) => {
    handleSearch(query);
  }, 300));

  const handleSearch = (query: string) => {
    console.log(query);
    // Lakukan tindakan pencarian di sini
  };

  useEffect(() => {
    const debouncedSearch = debouncedSearchRef.current;

    if (query) {
      debouncedSearch(query);
    }
    // Cancel debounce on cleanup
    return () => {
      debouncedSearch.cancel();
    };
  }, [query]);

  return (
    <main className="flex min-h-screen flex-col items-center px-[15px]">
      <Navbar />
      <section className='w-full lg:w-1/2 flex flex-row justify-center gap-3 py-2 mt-28 sm:mt-36'>
        <Form {...form}>
          <form className="flex items-center space-x-2 w-full">
            <FormField
              control={control}
              name="query"
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      className='text-sm sm:text-base'
                      type="search"
                      placeholder="Search your Organization"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Filter className="w-5 h-5 text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Organization Name</DropdownMenuItem>
            <DropdownMenuItem>Category</DropdownMenuItem>
            <DropdownMenuItem>Joined</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      <section className='mt-2 w-full sm:grid sm:grid-cols-2 gap-3 lg:grid-cols-3 lg:p-16'>
        <Card>
          <CardHeader className='flex-row'>
            <Avatar>
              <AvatarImage
                className='w-16 h-auto object-cover'
                src="https://github.com/shadcn.png" alt="@shadcn"
                width={40}
                height={40}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col ml-4 space-y-1'>
              <CardTitle className='text-sm font-semibold'>Organization Name</CardTitle>
              <CardDescription className='border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full bg-gray-200 text-gray-500 font-medium text-xs py-1 px-3 text-center'>
                Category
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className='ml-20 flex flex-row items-center gap-2'>
              <CalendarDays className='w-4 h-4 text-gray-500' />
              <p className='text-xs text-gray-500'>Joined 1 day ago</p>
            </div>
          </CardContent>
          <CardFooter className='flex justify-end items-center'>
            <Link href='#' className='rounded-full hover:bg-secondary/80 p-1.5'>
              <Instagram className='w-6 h-6 text-gray-500' />
            </Link>
            <Link href='#' className='rounded-full hover:bg-secondary/80 p-1.5'>
              <Mail className='w-6 h-6 text-gray-500' />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className='flex-row'>
            <Avatar>
              <AvatarImage
                className='w-16 h-auto object-cover'
                src="https://github.com/shadcn.png" alt="@shadcn"
                width={40}
                height={40}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col ml-4 space-y-1'>
              <CardTitle className='text-sm font-semibold'>Organization Name</CardTitle>
              <CardDescription className='border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full bg-gray-200 text-gray-500 font-medium text-xs py-1 px-3 text-center'>
                Category
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className='ml-20 flex flex-row items-center gap-2'>
              <CalendarDays className='w-4 h-4 text-gray-500' />
              <p className='text-xs text-gray-500'>Joined 1 day ago</p>
            </div>
          </CardContent>
          <CardFooter className='flex justify-end items-center'>
            <Link href='#' className='rounded-full hover:bg-secondary/80 p-1.5'>
              <Instagram className='w-6 h-6 text-gray-500' />
            </Link>
            <Link href='#' className='rounded-full hover:bg-secondary/80 p-1.5'>
              <Mail className='w-6 h-6 text-gray-500' />
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className='flex-row'>
            <Avatar>
              <AvatarImage
                className='w-16 h-auto object-cover'
                src="https://github.com/shadcn.png" alt="@shadcn"
                width={40}
                height={40}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col ml-4 space-y-1'>
              <CardTitle className='text-sm font-semibold'>Organization Name</CardTitle>
              <CardDescription className='border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full bg-gray-200 text-gray-500 font-medium text-xs py-1 px-3 text-center'>
                Category
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className='ml-20 flex flex-row items-center gap-2'>
              <CalendarDays className='w-4 h-4 text-gray-500' />
              <p className='text-xs text-gray-500'>Joined 1 day ago</p>
            </div>
          </CardContent>
          <CardFooter className='flex justify-end items-center'>
            <Link href='#' className='rounded-full hover:bg-secondary/80 p-1.5'>
              <Instagram className='w-6 h-6 text-gray-500' />
            </Link>
            <Link href='#' className='rounded-full hover:bg-secondary/80 p-1.5'>
              <Mail className='w-6 h-6 text-gray-500' />
            </Link>
          </CardFooter>
        </Card>
      </section>
      {/* Footer */}
      <Footer />
    </main >
  );
}
