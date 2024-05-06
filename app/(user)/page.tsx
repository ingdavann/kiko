'use client'
import Image from "next/image";
import HeroImage from "@/public/assets/image/rice.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ProductCardComponent from "@/components/card/ProductCardComponent";
import { BASE_URL } from "@/lib/constants";
import { CartProductType } from "@/lib/definitions";
import Link from "next/link";

const ENDPOINT = `${BASE_URL}/api/products/?page=1&page_size=12`;
const session = "some session";

export default function Home() {
  const [products, setProducts] = useState([]);
  // error.tsx will be replaced rerendered if session is null
  if(!session) {
    throw new Error("Auth is required to access this resource")
  }

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data.results))
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main className="w-[90%] mx-auto">
      {/* <!-- hero seciton --> */}
      <section className="relative w-full h-[320px]" id="home">
                <div className="absolute inset-0 opacity-70">
                    <img src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png" alt="Background Image" className="object-cover object-center w-full h-full" />
                </div>
                <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">KIKO Flour Mill</h1>
                        <p className="font-regular text-xl mb-8 mt-4">One stop solution for flour grinding services</p>
                        <a href="#contactUs"
                            className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Contact
                            Us</a>
                    </div>
                </div>
      </section>
      {/* Introduce Section */}
      <section className="relative overflow-hidden">
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16 flex-col sm:flex-row">
            <div className="sm:w-[50%] flex flex-col relative z-20" data-aos="fade-up">
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
                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-[#c8a876] border-2 border-transparent text-white text-md mr-4 hover:bg-[#c09858]">
                  Get started
                </a>
                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-[#c8a876] text-[#c8a876] dark:text-white hover:bg-[#c09858] hover:text-white text-md">
                  Read more
                </a>
              </div>
            </div>
            <div className=" w-[50%] mt-10 relative"
              data-aos="fade-right"
            >
              <Image src={HeroImage} alt="HeroImage" className="max-w-xs md:max-w-sm m-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* partner section */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="text-3xl text-center font-bold">Our Partners</h2>
        <div className="grid grid-cols-6 mt-5 bg-gray-50 p-5 rounded-xl"> 
       
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
      {/* List product section */}
      <section className="mt-10 mb-5" data-aos="fade-up">
        <h2 className="text-3xl text-center font-bold">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 bg-gray-50 p-5 rounded-xl"> 
        {
          products.map((product: CartProductType, index:number) => (
            <Link href="#" as={`/${product.id}`}>
              <ProductCardComponent 
              key={index}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
            </Link>
          ))
        }
        </div>
      </section>
    </main>
  );
}
