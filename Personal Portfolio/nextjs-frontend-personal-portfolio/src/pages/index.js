
import { Site } from "../components/Site";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode , faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faTeamspeak } from "@fortawesome/free-brands-svg-icons";

 const Home = () => {
  return (
    <>
    <Site>
    <section className="mt-6 ">
   <p>
   I am a Frontend Engineer from USA-New York who is quick learner and loves to create UI with <span className="text-indigo-500 font-medium">Javascript Ecosystem</span> along with best practices which helps to keep code scalable and easy to debug and maintain.
   </p>

   <main className="mt-12 ">
   <h2 className="text-2xl font-black pb-6">I'm doing</h2>
    <section className="">
      <main className="grid grid-cols-1 md:gap-4 gap-y-4  md:grid-cols-2  ">
      <div className="bg-gray-50 w-11/12 md:w-full  rounded-xl p-6 flex space-x-6 ">
        <div className="text-5xl text-indigo-600 self-center">
        <div><FontAwesomeIcon  icon = {faLaptopCode} /></div>
        </div>
        <div>
          <h4 className="font-medium">Frontend Development</h4>
          <p className="text-light">
                      Able to create Awesome UI for web, desktop and mobile using JS ecosystem
                      <br />
                <strong className="font-medium text-gray-500 text-sm">HTML, CSS, JS, React/NextJS, React-Native, Electron</strong>
            </p>
        </div>
      </div>
      <div className="bg-gray-50 w-11/12 md:w-full  rounded-xl p-6 flex space-x-6 ">
        <div className="text-5xl text-indigo-600 self-center">
        <div><FontAwesomeIcon  icon = {faFigma} /></div>
        </div>
        <div>
          <h4 className="font-medium">Web, Mobile & Desktop Design </h4>
          <p className="text-light">
                      Able to create Awesome UI Design for web, desktop and mobile using Figma and AdobeXD
                      <br />
                <strong className="font-medium text-gray-500 text-sm">Figma, AdobeXs, Invision, Sketch</strong>
            </p>
        </div>
      </div>

      <div className="bg-gray-50 w-11/12 md:w-full  rounded-xl p-6 flex space-x-6 ">
        <div className="text-5xl text-indigo-600 self-center">
        <div><FontAwesomeIcon  icon = {faMobileAlt} /></div>
        </div>
        <div>
          <h4 className="font-medium">Responsive Design</h4>
          <p className="text-light">
          Able to create responsive design at a professional level
                      <br />
                <strong className="font-medium text-gray-500 text-sm">Mobile-size, Desktop-size, Tablet-size</strong>
            </p>
        </div>
      </div>

      <div className="bg-gray-50 w-11/12 md:w-full  rounded-xl p-6 flex space-x-6">
        <div className="text-5xl text-indigo-600 self-center">
        <div><FontAwesomeIcon  icon = {faTeamspeak} /></div>
        </div>
        <div>
          <h4 className="font-medium">Strong Support</h4>
          <p className="text-light">
          Able to communicate ideas in a brief way in multiple language
                      <br />
                <strong className="font-medium text-gray-500 text-sm">English, Hindi, Spanish</strong>
            </p>
        </div>
      </div>
      </main>
    </section>
   </main>
    </section>
    </Site>
    </>
  )
}

export default Home;