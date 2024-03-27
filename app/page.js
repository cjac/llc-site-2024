import Image from "next/image";
import logo from './/public/whitelogo.svg';
import lightbulb from './/public/lightbulb.png';
import trophy from './/public/trophy.png';
import team from './/public/team.png';
import abledesktop from './/public/desktop-size.png'
import ablemobile from './/public/mobile-size.png'
import bizdesktop from './/public/prototypebiz-desktop.png'
import bizmobile from './/public/prototypebiz-mobile.png'
import aboutme from './/public/aboutme.png'
import rightCurve from './/public/rightCurve.svg'

export default function Home() {
  return (
    <main className="bg-black bg-cover">
     <section className="min-h-screen min-w-full">

    {/* Nav section */}

      <nav className="flex flex-col text-white text-center py-10 mb-12 lg:flex-row lg:w-11/12 lg:mx-auto">

      <div className="flex my-auto max-w-96 mx-auto lg:mx-0">
        <Image className="resize px-4 h-10 sm:h-16 2xl:h-14" src={logo} />
      </div>
        
      <div>
        <ul className="flex justify-evenly py-10 lg:gap-6 lg:mx-6 xl:gap-14 xl:mx-14 2xl:mr-60">
            <div><a className="cursor-pointer text-xs sm:text-base md:text-lg lg:text-xl lg:px-3" href="#Portfolio">Portfolio</a></div>
            <div><a className="cursor-pointer text-xs sm:text-base md:text-lg lg:text-xl lg:px-3" href="#AboutUs">About</a></div>
            <div><a className="cursor-pointer text-xs sm:text-base md:text-lg lg:text-xl lg:px-3" 
            href="https://www.linkedin.com/in/angela-taylor-78430538/">LinkedIn</a></div>
            <div><a className="cursor-pointer text-xs sm:text-base md:text-lg lg:text-xl lg:px-3" 
            href="https://github.com/angelataylorllc/">GitHub</a></div>
          </ul>
      </div>


      <div className="flex flex-grow justify-center lg:h-9 lg:my-auto ">
        <a className="bg-indigo-500 whitespace-nowrap px-4 py-1 rounded-md" href="mailto:hello@angelataylorllc.com">Contact us</a>
      </div>

      </nav>

      {/* Intro Text Section */}

      <div className="flex flex-col bg-[url('.//public/striped-circle.svg')] 
      bg-no-repeat sm:bg-left-top lg:bg-right-top bg-[length:636px_636px] py-10  overflow-visible ">
        
        <div className="flex font-bold text-3xl px-5 text-center w-5/6 mx-auto sm:text-5xl sm:w-11/12 sm:leading-relaxed sm:text-left md:pr-10 md:px-6 
        md:text-4xl lg:w-6/12 lg:text-6xl lg:mx-20 xl:leading-normal 2xl:text-8xl 2xl:w-auto">
          <h1 className="text-white"><span className="bg-gradient-to-r from-indigo-500  to-fuchsia-500 inline-block text-transparent bg-clip-text">
            Transforming</span> Your Ideas into Reality</h1>
        </div>
        
        <div className="w-5/6 mx-auto sm:flex sm:flex-col md:flex-row md:my-8 md:w-11/12 lg:my-auto xl:my-10 xl:px-2 2xl:my-1">
          <div className="flex my-auto sm:mt-12 sm:mb-8 md:mr-8 xl:m-auto">
            <a className="bg-indigo-500 text-white text-center -mt-8 rounded-md invisible whitespace-nowrap sm:visible sm:px-6 sm:py-3 
            lg:w-40 lg:h-12 2xl:text-xl" 
            href="mailto:hello@angelataylorllc.com">Work with us</a>
          </div>

          <div className="flex text-gray-400 text-center text-xl px-6 sm:px-0 md:pr-18 lg:pt-9 lg:w-7/12 lg:mx-20 xl:text-2xl xl:text-left xl:p-0 xl:mx-auto 
          2xl:text-3xl">
            <p>At Angela Taylor LLC, we're passionate about transforming ideas into digital reality. 
              With expertise in website and mobile application development, we empower small businesses 
              to thrive in the digital landscape.</p>
          </div>

        </div>
      <div className="overflow-hidden">
        <Image className="ml-auto  invisible -mt-6 md:visible sm:-mt-36 sm:-mb-36" src={rightCurve} />
      </div>


      </div>

    {/* Features Section */}

      <div className="flex flex-col pb-14 lg:flex-row lg:mx-12 lg:mt-36 lg:mb-36">

        <div className="flex flex-col flex-1 px-3 py-6 ">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={lightbulb} />
            </div>
            <h1 className="text-white text-base sm:text-xl font-bold m-auto p-2 whitespace-nowrap text-center 2xl:text-3xl">Creative Solutions</h1>
            <p className="text-gray-400 text-base p-3 text-center 2xl:text-xl" >Tailored websites and apps 
            reflecting your brand.</p>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-3 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={trophy} />
            </div>
            <h1 className="text-white text-base sm:text-xl font-bold m-auto p-2 whitespace-nowrap 2xl:text-3xl">Results-Driven</h1>
            <p className="text-gray-400 text-base p-3 text-center 2xl:text-xl" >We focus on deliverying tangible 
            results for your business.</p>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-3 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={team} />
            </div>
            <h1 className="text-white text-base sm:text-xl font-bold m-auto p-2 whitespace-nowrap lg:flex lg:flex-nowrap 2xl:text-3xl">Crafting Success Together</h1>
            <p className="text-gray-400 text-base p-3 text-center 2xl:text-xl" >Our skilled team collaborates 
            with you to shape a beautifully crafted digital product.</p>
          </div>
        </div>
      </div>
      
      {/* Project Example Section */}

      <h1 className="text-white text-3xl font-bold text-center py-6 lg:text-5xl xl:text-7xl xl:my-10">Portfolio</h1> 

      <div id="Portfolio" className="flex flex-col w-5/6 mx-auto">

        <div className="flex flex-col border-fuchsia-900 border-2 m-4 py-6">
          <div>
            <h1 className="text-white text-2xl font-bold text-center py-6 lg:text-5xl">AbleNFTMint</h1> 
          </div>
       
        <div className="flex ">

        <div className=" lg:flex lg:flex-col m-2 mx-auto lg:px-10">
              <h2 className="text-white text-lg font-bold text-center py-4 lg:py-8 lg:text-2xl">Mobile - 280px</h2>
              <Image className="border-l-indigo-900 border-2 w-72 pb-10" src={ablemobile} />
            </div>

          <div className="invisible w-0 lg:w-full -mb-96  lg:-mb-0 lg:visible lg:flex lg:flex-1 lg:flex-col lg:px-10">
              <h2 className="text-white text-lg font-bold text-center py-4 lg:py-8 lg:text-2xl">Desktop - 1920px</h2>
              <Image className="border-indigo-900 border-2 pb-10 mx-auto" src={abledesktop} />
            </div>



        </div>

        </div>

      <div className="flex flex-col border-fuchsia-900 border-2 m-4 py-6">
        <div>
            <h1 className="text-white text-2xl font-bold text-center py-6 lg:text-5xl">Collier Technologies</h1>
        </div>
     
        <div className="flex ">

        <div className=" lg:flex lg:flex-col m-2 mx-auto lg:px-10">
              <h2 className="text-white text-lg font-bold text-center py-4 lg:py-8 lg:text-2xl">Mobile - 280px</h2>
              <Image className="border-l-indigo-900 border-2 w-72 pb-10" src={bizmobile} />
            </div>

          <div className="invisible w-0 lg:w-full -mb-96  lg:-mb-0 lg:visible lg:flex lg:flex-1 lg:flex-col lg:px-10">
              <h2 className="text-white text-lg font-bold text-center py-4 lg:py-8 lg:text-2xl">Desktop - 1920px</h2>
              <Image className="border-l-indigo-900 border-2 pb-10 mx-auto" src={bizdesktop} />
            </div>


        </div>

      </div>



      </div>
      
    {/* Contact Purple Box Section */}

    <div className="flex flex-col mt-16 pb-16 lg:w-9/12 lg:mx-auto">

      <div className="bg-gradient-to-r from-indigo-500  to-fuchsia-500 rounded-md
        h-80 lg:h-96 ">

        <p className="text-gray-300 text-center text-base sm:text-lg pt-16 px-2 lg:pt-24 pb-4 lg:text-2xl 2xl:text-5xl">
          Want to work with us? Let's talk</p>

        <h1 className="text-white font-bold text-lg px-2 sm:text-2xl text-center py-6 lg:text-3xl lg:pb-10 2xl:text-4xl">
          hello@angelataylorllc.com</h1>

        <div className="flex justify-center">
          <a className="bg-white px-4 py-2 rounded-md lg:text-lg xl:text-xl" href="mailto:hello@angelataylorllc.com">Contact Us</a>
        </div>

      </div>

    </div>

    {/* Footer Section */}

    <div className="flex flex-col lg:flex-row lg:justify-between lg:w-9/12 lg:mx-auto lg:py-20">

      <div className="flex flex-col w-5/6 mx-auto lg:w-7/12 lg:mr-6">

        <div className="flex max-w-96 sm:mx-auto lg:mx-0 lg:mb-4 2xl:my-8">
          <Image className="resize my-2 h-12 sm:h-16" src={logo} />  
        </div>

        <div id="AboutUs" className="2xl:my-6">
          <h1 className="text-gray-300 text-xl mx-2 my-4 font-semibold sm:h-9 sm:pl-6 xl:pl-0 xl:text-2xl">About Us</h1>
        </div>

        <div>
          <p className="text-gray-400 mx-2 my-4 sm:h-9 sm:pl-6 lg:mx-4 xl:pl-0 xl:text-xl 2xl:mr-8 2xl:leading-relaxed">At Angela Taylor LLC, we're your dedicated digital 
            partners. Our team is on a mission to empower small businesses through innovative websites and 
            mobile applications. With a focus on collaboration and tailored solutions, we turn your vision into 
            a digital reality. Our commitment is to provide not just services, but a personalized journey to success. 
            Join us at Angela Taylor LLC, where your digital aspirations take center stage.</p>
        </div>
        
      </div>
        
        <div className="flex flex-1 justify-center pb-10 m-8 sm:mt-36 lg:mx-0 lg:mt-8 2xl:mt-0">
          <Image className="resize lg:w-full xl:w-5/6 2xl:w-4/6 " src={aboutme} />
        </div>

    </div>

     </section>
    </main>
  );
}


