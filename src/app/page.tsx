import { Badge, Button } from "@/components/constants";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import { orangeThreeLine, sectionImageDesktop, sectionImageMobile } from "@/public/images";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <section className="w-full h-full mt-32">
        <div className="flex items-center justify-center relative h-20">
          <Badge variant="outline" className="sm:w-24 sm:h-10 w-[100px] h-8 flex-col justify-center border-[1px] border-black text-sm sm:text-base">Home</Badge>
          <Image src={orangeThreeLine} className="absolute -mt-14 -mr-32" alt="Logo" width={40} height={50} />
        </div>
        <div className="h-fit flex-col justify-between">
          <p className="font-semibold  text-[25px] lg:text-6xl sm:text-5xl text-center">I&lsquo;m
            <span className="text-[#FE853A]"> OrgControl </span>
          </p>
          <p className="font-semibold text-[25px] lg:text-6xl sm:text-5xl text-center sm:mt-4">
            Organization Management
          </p>
          <div className="relative">
            <Image
              src={sectionImageDesktop} className="mx-auto hidden sm:block"
              objectFit="cover"
              alt="Logo"
              width={810}
              height={600} />
            <div className="absolute w-full text-center sm:-mt-36 mt-80">
              <Link href="/" >
                <Button variant="outline" className="bg-[#FE853A] rounded-full text-white font-medium sm:text-xl text-base sm:w-[267px] sm:h-[62px] w-[238px] h-[52px] shadow-gray-500 shadow-sm border-none">Getting Started</Button>
              </Link>
            </div>
          </div>
          <Image
            src={sectionImageMobile} className="mx-auto block sm:hidden"
            objectFit="cover"
            alt="Logo"
            width={810}
            height={600} />
        </div>
      </section>
    </main>
  );
}
