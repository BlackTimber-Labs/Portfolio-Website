import Image from 'next/image';
import ecom from "../public/images/ecom.png";
import app from "../public/images/app.png";
import agency from "../public/images/agency.png";
import blog from "../public/images/blog.jpg";
import Link from 'next/link';

import { Site } from "../components/Site";
const Portfolio = () => {
  return (
    <>
      <Site>
        <section className="mt-6  ">
          <p className="text-center text-lg font-medium">
            All Projects
          </p>
          <section className="">

         <main className="md:grid  md:justify-items-center md:justify-center place-items-center flex justify-center items-center space-y-4 flex-col md:gap-4 md:gap-y-4 md:grid-cols-2 ">

         <div className=" w-11/12 md:w-full  rounded-xl p-6   ">
        <div className="">
        <div ><Image placeholder="blur" src={ecom} alt="ecom" width="368" height="362"  /></div>
        </div>
        <div>
          <h4 className="font-medium text-xl">Ecommerce</h4>
          <strong className="font-medium text-gray-500 text-sm">HTML, CSS, JS, React/NextJS, React-Native, Electron</strong>
            <div className="flex space-x-4 mt-2">
              <Link  href="https://csstail.com"><a className="p-2 font-medium bg-gray-50 text-indigo-700 hover:text-indigo-500">Get Code</a></Link>
              <Link href="https://csstail.com"><a className="p-2 font-medium bg-gray-50 text-indigo-700 hover:text-indigo-500">See Live</a></Link>
              </div>
        </div>
      </div>
      <div className=" w-11/12 md:w-full  rounded-xl p-6  ">
        <div className="">
        <div ><Image placeholder="blur" src={app} alt="ecom" width="368" height="362"  /></div>
        </div>
        <div>
          <h4 className="font-medium text-xl">App-Promotion-Landingpage</h4>
          <strong className="font-medium text-gray-500 text-sm">HTML, CSS, JS, React/NextJS, React-Native, Electron</strong>
            <div className="flex space-x-4 mt-2">
              <Link  href="https://csstail.com"><a className="p-2 font-medium bg-gray-50 text-indigo-700 hover:text-indigo-500">Get Code</a></Link>
              <Link href="https://csstail.com"><a className="p-2 font-medium bg-gray-50 text-indigo-700 hover:text-indigo-500">See Live</a></Link>
              </div>
        </div>
      </div>

      <div className=" w-11/12 md:w-full  rounded-xl p-6  ">
        <div className="">
        <div ><Image placeholder="blur" src={blog} alt="ecom" width="368" height="362"  /></div>
        </div>
        <div>
          <h4 className="font-medium text-xl">Blog-App</h4>
          <strong className="font-medium text-gray-500 text-sm">HTML, CSS, JS, React/NextJS, React-Native, Electron</strong>
            <div className="flex space-x-4 mt-2">
              <Link  href="https://csstail.com"><a className="p-2 font-medium bg-gray-50 text-indigo-700 hover:text-indigo-500">Get Code</a></Link>
              <Link href="https://csstail.com"><a className="p-2 font-medium bg-gray-50 text-indigo-700 hover:text-indigo-500">See Live</a></Link>
              </div>
        </div>
      </div>

      <div className=" w-11/12 md:w-full  rounded-xl p-6  ">
        <div className="">
        <div ><Image placeholder="blur" src={agency} alt="ecom" width="368" height="362"  /></div>
        </div>
        <div>
          <h4 className="font-medium text-xl">Digital Agency</h4>
          <strong className="font-medium text-gray-500 text-sm">HTML, CSS, JS, React/NextJS, React-Native, Electron</strong>
            <div className="flex space-x-4 mt-2">
              <Link  href="https://csstail.com"><a className="p-2 font-medium bg-gray-50 text-indigo-700 hover:text-indigo-500">Get Code</a></Link>
              <Link href="https://csstail.com"><a className="p-2 font-medium bg-gray-50 text-indigo-700 hover:text-indigo-500">See Live</a></Link>
              </div>
        </div>
      </div>
        </main>

        </section>
        </section>
      </Site>
    </>
  );
};

export default Portfolio;
