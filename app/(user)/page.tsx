'use client'
import Image from "next/image";
import HeroImage from "@/public/assets/image/commerce.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <main className="w-[90%] mx-auto">
      <section className="relative overflow-hidden">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16 flex-col sm:flex-row">
            <div className="sm:w-[50%] flex flex-col relative z-20"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
              </span>
              <h1 className="font-bebas-neue uppercase text-2xl sm:text-2xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Elevate Your Style with Our
                <span className="text-2xl sm:text-2xl">
                  Exclusive Collection
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
              </p>
              <div className="flex mt-8">
                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                  Get started
                </a>
                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                  Read more
                </a>
              </div>
            </div>
            <div className=" w-[50%] mt-10 relative"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Image src={HeroImage} alt="HeroImage" className="max-w-xs md:max-w-sm m-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* partner section */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="text-3xl text-center font-bold">Out Partner</h2>
        <div className="grid grid-cols-6 mt-5 bg-gray-50 p-5 rounded-xl" > 
       
          <div className="inline-flex flex-col items-center justify-center px-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/640px-Tesla_Motors.svg.png" alt="partner" className="md:h-12" />
          </div>
          <div className="inline-flex flex-col items-center justify-center px-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="partner" className="md:h-12"/>
          </div>
          <div className="inline-flex flex-col items-center justify-center px-5 ">
            <img src="https://help.lengow.com/hc/article_attachments/360009679272" alt="partner" className="md:h-12"/>
          </div>
          <div className="inline-flex flex-col items-center justify-center px-5 ">
            <img src="https://logos-world.net/wp-content/uploads/2023/03/FoodPanda-Logo.png" alt="partner" className="md:h-12"/>
          </div>
          <div className="inline-flex flex-col items-center justify-center px-5 ">
            <img src="https://assets.grab.com/wp-content/uploads/media/ir/logo/Grab_Final_Master_Logo_2021_RGB_(green).png" alt="partner" className="md:h-12"/>
          </div>
          <div className="inline-flex flex-col items-center justify-center px-5 ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Toyota_Motor_North_America_logo_%282019%29.png" alt="partner" className="md:h-12"/>
          </div>
        </div>
      </section>
    </main>
  );
}