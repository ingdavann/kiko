'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <main className='w-[90%] mx-auto'>
            {/* <!-- about us --> */}
            <section className="bg-gray-100 mt-10" id="aboutus" data-aos="zoom-in-up">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                <span className='font-bold text-[#c09858]'>KIKO</span> flour mill provides our customers with the highest quality products and services. We offer a
                                wide variety of flours and spices to choose from, and we are always happy to help our customers find
                                the perfect products for their needs.
                                We are committed to providing our customers with the best possible experience. We offer competitive
                                prices, fast shipping, and excellent customer service. We are also happy to answer any questions
                                that our customers may have about our products or services.
                                If you are looking for a flour and spices service business that can provide you with the highest
                                quality products and services, then we are the company for you. We look forward to serving you!</p>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- our services section --> */}
            <section className="py-10" id="services" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp" alt="wheat flour grinding"
                                className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Wheat Flour Grinding</h3>
                                <p className="text-gray-700 text-base">Our wheat flour grinding service provides fresh, high-quality
                                    flour to businesses and individuals in the area. We use state-of-the-art equipment to grind
                                    wheat into flour, and we offer a variety of flours to meet the needs of our customers.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww" alt="Coffee"
                                className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Gram Flour Grinding</h3>
                                <p className="text-gray-700 text-base">Our gram flour is perfect for a variety of uses, including
                                    baking, cooking, and making snacks. It is also a good source of protein and fiber.Our gram flour
                                    grinding service is a convenient and affordable way to get the freshest gram flour possible.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp" alt="Coffee"
                                className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Jowar Flour Grinding</h3>
                                <span className="text-gray-700 text-base">Our jowar grinding service is a convenient and affordable way to
                                    get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a
                                    fine powder, which is perfect for making roti, bread, and other dishes.
                                    <details>
                                        <summary>Read More</summary>
                                        <p>Our jowar flour is also
                                            a good source of protein and fiber, making it a healthy choice for your family.</p>
                                    </details>
                                </span>

                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coffee"
                                className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Chilli pounding</h3>
                                <span className="text-gray-700 text-base">We specializes in the production of high-quality chili powder.
                                    Our chili powder is made from the finest, freshest chilies, and we use traditional pounding
                                    methods to ensure that our chili powder retains its full flavor and aroma.
                                    <details>
                                        <summary>Read More</summary>
                                        <p> We offer a variety of chili powder products, including mild, medium, and hot. We also offer
                                            custom blends to meet the specific needs of our customers.</p>
                                    </details>
                                </span>
                            </div>
                        </div>
                        {/* <!-- special card --> */}
                        <div
                            className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                            <div className="text-center text-white font-medium">Special product</div>
                            <img src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww" alt="Coffee"
                                className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Flavoured Spaghetti</h3>
                                <p className="text-gray-700 text-base"><span className="font-medium underline">Our speciality is</span>
                                    Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your
                                    taste
                                    buds. We use only the freshest ingredients Our
                                    flavors include: Mango, spinach
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU=" alt="papad"
                                className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Rice Papad</h3>
                                <span className="text-gray-700 text-base">Our company produces high-quality rice papad that is made with
                                    the finest ingredients. We use traditional methods to make our papad, which gives it a unique
                                    flavor and texture. Our papad is also gluten-free and vegan.
                                    <details>
                                        <summary>Read More</summary>
                                        <p> We offer a variety of rice papad flavors, including plain, salted, spicy, and flavored. We
                                            also
                                            offer a variety of sizes and shapes to choose from. Our papad is available in bulk or in
                                            individual packages.</p>
                                    </details>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- why us  --> */}
            <section className="text-gray-700 body-font mt-10" data-aos="zoom-in-up">
                <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
                    Why Us?
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3" />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3" />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3" />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                <div className="flex justify-center">
                                    <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3" />
                                </div>
                                <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- gallery --> */}
            <section className="text-gray-700 body-font" id="gallery" data-aos="zoom-in-up">

                <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
                    Gallery
                </div>

                <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    <div className="group relative">
                        <img
                            src="https://content.jdmagicbox.com/comp/kozhikode/b6/0495px495.x495.221117211003.l5b6/catalogue/jv-flour-and-oil-mill-kozhikode-flour-mills-gdyak1k1sy.jpg?clr="
                            alt="Image 1"
                            className="aspect-[3/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                    </div>

                    <div className="group relative">
                        <img
                            src="https://healthiersteps.com/wp-content/uploads/2021/03/brown-rice-flour-bowl.jpg"
                            alt="Image 1"
                            className="aspect-[3/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                    </div>

                    <div className="group relative">
                        <img
                            src="https://glutenfreeonashoestring.com/wp-content/uploads/2017/03/Homemade-Rice-Flour-in-a-bowl-with-whisk.jpg"
                            alt="Image 1"
                            className="aspect-[3/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                    </div>
                    <div className="group relative">
                        <img
                            src="https://www.dishbydish.net/wp-content/uploads/How-to-Make-Brown-Rice-Flour-Gluten-Free-Vegan_Step3-scaled.jpg"
                            alt="Image 1"
                            className="aspect-[3/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                    </div>
                </div>

            </section>
        </main>
    )
}
