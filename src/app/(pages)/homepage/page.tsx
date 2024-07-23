"use client";
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import debounce from 'lodash.debounce';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { Badge, Button, CalendarDays, Filter } from '@/components/constants';
import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';

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
      <footer className='mt-16 mb-10 w-full'>
        <div className='py-10 sm:px-7 md:grid md:grid-cols-2'>
          <div className='w-3/5 lg:w-2/5'>
            <p className='text-[#FE853A] text-2xl font-bold'>OrgControl</p>
            <p className='mt-4 text-sm font-medium text-[#90A3BF]'>Our vision is to provide convenience and help increase your sales business.</p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 md:mt-0 gap-3 mt-14'>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-xl text-[#1A202C]'>About</p>
              <p className='font-medium text-sm text-[#90A3BF]'>How it works</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Featured</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Partnership</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Bussiness Relation</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-xl text-[#1A202C]'>Socials</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Discord</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Instagram</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Twitter</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Facebook</p>
            </div>
            <div className='flex flex-col gap-2 mt-10 md:mt-0'>
              <p className='font-semibold text-xl text-[#1A202C]'>Community</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Events</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Blog</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Podcast</p>
              <p className='font-medium text-sm text-[#90A3BF]'>Invite a Friend</p>
            </div>
          </div>
        </div>
        <div className='sm:px-7 w-full'>
          <div className='mt-5 md:grid md:grid-cols-2 flex flex-col md:flex-row-reverse md:items-center'>
            <p className='font-semibold text-sm text-[#1A202C] order-last md:order-first mt-5 md:mt-0'>&copy;2022 OrgControl. All rights reserved</p>
            <div className='grid grid-cols-2 md:w-full gap-3 text-[#1A202C]'>
              <p className='font-semibold text-sm'>Privacy & Policy</p>
              <p className='font-semibold text-sm'>Terms & Condition</p>
            </div>
          </div>
        </div>
      </footer>
    </main >
  );
}
