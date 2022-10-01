import Image from "next/image";
import Profile from "../public/images/profile.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {  faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export const Intro = () => {
  return (
    <>
      <section className="p-2 grid grid-cols-auto-col-fit 2xl:block  ">
        <main className="flex sticky top-0 flex-col lg:leftside items-center justify-center p-4 lg:p-0  bg-white rounded-lg" >
          <div>
          <Image
            className="rounded-full"
            src={Profile}
            alt="profile-image"
            height={120}
            width={120}
          />
          </div>
          <h1 className="pt-2 text-xl font-extrabold"> Hubert Blaine Wolfes</h1>
          <h3 className="px-3 py-2 text-base font-medium text-gray-500 bg-gray-100 rounded-2xl">Frontend-Engineer</h3>
          <p className="w-4/6 pt-3 text-center">
          <span className="text-indigo-500">Hi, there </span>
            I do Web, Mobile and Destop Frontend development with Javascript
            ecosystem.
          </p>
          <div className="flex flex-wrap justify-center p-4 pt-3 ">
            <p className="tags">#JS</p>
            <p className="tags">#React</p>
            <p className="tags">#NextJS</p>
            <p className="tags">#Typescript</p>
            <p className="tags">#Webpack</p>
            <p className="tags">#React Native</p>
            <p className="tags">#Headless CMS</p>
            <p className="tags">#ElectronJS</p>
          </div>

          <div className="flex pt-4 lg:pt-0 space-x-6 text-3xl">

           <div>   
          <FontAwesomeIcon icon = {faFacebook} />
          </div>

          <div>
          <FontAwesomeIcon icon = {faTwitter} />
          </div>

          </div>


          <div  className="flex pt-6 lg:pt-2 space-x-6 text-lg">

           <div className="flex space-x-2">   
          <FontAwesomeIcon className="self-center" icon = {faMapMarkerAlt} />
          <span>New York, USA</span>
           </div>
           

           <div className="flex space-x-2">   
          <FontAwesomeIcon className="self-center" icon = {faGithub} />
          <span >Github</span>
           </div>
           
          </div>


          <div className="py-3 text-white bg-indigo-500 px-7 mt-6 lg:mt-2 cursor-pointer rounded-3xl">
            <Link href="mailto:csstail@gmail.com">
              <a > Email Me</a>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};
