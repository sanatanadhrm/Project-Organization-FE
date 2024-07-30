import { Badge, Button, Navbar } from "@/components/constants";
import Image from "next/image";
import { orangeThreeLine, sectionImageDesktop, sectionImageMobile } from "@/public/images";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <section className="w-full mt-36">
        <div className="flex items-center justify-center relative h-20">
          <Badge variant="outline" className="sm:w-32 sm:h-12 w-24 h-10 flex-col justify-center border-[1px] border-black text-sm sm:text-base">Home</Badge>
          <Image
            src={orangeThreeLine}
            className="absolute -mt-14 -mr-32 sm:-mt-16 sm:-mr-36 w-[40px] h-[50px]"
            alt="Logo"
            width={40}
            height={50} />
        </div>
        <div className="h-full flex-col justify-between relative">
          <p className="font-semibold text-2xl sm:text-5xl lg:text-6xl text-center sm:mt-3">I&lsquo;m
            <span className="text-[#FE853A]"> OrgControl </span>
          </p>
          <p className="font-semibold text-2xl sm:text-5xl lg:text-6xl text-center mt-2 sm:mt-4">
            Organization Management
          </p>
          <div className="relative">

            {/* Desktop Image */}
            <Image
              src={sectionImageDesktop}
              className="mx-auto hidden lg:block object-cover w-2/3 h-auto"
              alt="Logo"
              width={810}
              height={600}
              priority />
            <div className="absolute w-full text-center top-[70%]">
              <Link href="/signup" >
                <Button variant="outline" className="bg-[#FE853A] rounded-full text-white font-medium text-base sm:text-2xl sm:w-80 sm:h-20 w-60 h-12 shadow-gray-500 shadow-sm border-none">Getting Started</Button>
              </Link>
            </div>

            {/* Mobile Image */}
            <Image
              src={sectionImageMobile}
              className="w-full h-auto mx-auto block lg:hidden object-cover"
              alt="Logo"
              width={810}
              height={600} />
          </div>
        </div>
      </section>
    </main>
  );
}
