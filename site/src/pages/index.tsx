import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PegLogo from '../components/images/peg_logo'
import BlokLogo from '../components/images/blok_logo'
import FeatureTable from '../components/featureTable/featureTable';
import ShareIcon from '../components/images/share_icon'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`KMKfw`}
      // ${siteConfig.title}
      description="Keyboard Firmware Powered By Python">
      {/* <HomepageHeader /> */}
      <div id="tailwind">
        <main>
          <div className="bg-base-200">
            <div className="container flex flex-col w-full items-center py-[8rem]">
              <div className="w-[60%] md:w-[50%]">
                <img src="./img/kmk_logo.svg" alt="kmk logo" />
              </div>
              <h2 className='font-thin mt-[5rem] mb-[1.5rem]'>Keyboard Firmware Powered By Python</h2>
              <div className="flex items-center flex-col sm:flex-row">
                <Link
                  to="/docs/Getting_Started/">
                  <button className="btn btn-success btn-outline sm:mr-4 btn-sm md:btn-normal mb-2 sm:mb-0">
                    Getting Started
                  </button>
                </Link>
                <Link
                  to="/docs/Officially_Supported_Microcontrollers/">
                  <button className="btn btn-outline sm:mr-4 btn-sm md:btn-normal mb-2 sm:mb-0">
                    Compatible Controllers
                  </button>
                </Link>
                <iframe src="https://ghbtns.com/github-btn.html?user=KMKfw&repo=kmk_firmware&type=star&count=true" scrolling="0" width="90" height="20" title="GitHub"></iframe>

              </div>
            </div>
          </div>
          <div className="sticky-top top-0 bg-gray-700" data-theme='dark'>
            <div className="container flex flex-col sm:flex-row justify-between md:justify-around">
              <div className="flex sm:flex-col justify-between sm:justify-center py-[1.5rem] items-center sm:items-start">
                <h3 className='font-sans font-normal text-[1.4rem] text-slate-200 mb-2'>Official Flashing Program</h3>
                <a className='flex w-[8.5rem] flex' href="https://peg.software/">
                  <PegLogo />
                  <span className="ml-1">
                    <ShareIcon />
                  </span>
                </a>
              </div>
              <div className="flex sm:flex-col justify-between sm:justify-center py-[1.5rem] items-center sm:items-start">
                <h3 className='font-sans font-normal text-[1.4rem] text-slate-200 mb-2'>Works Out of The Box</h3>
                <a className='flex w-[7.5rem]' href="https://boardsource.xyz/store/628b95b494dfa308a6581622">
                  <BlokLogo />
                  <span className="ml-1">
                    <ShareIcon />
                  </span>
                </a>
              </div>
              {/* <div className="flex items-center py-[1rem]">
                <button className='btn btn-outline outline outline-[white] outline-1 outline-solid'><a className='link text-white no-underline' href="#">View All Compatible Devices</a></button>
              </div> */}

            </div>

          </div>
          <div className="mb-[4rem]">
            <div className="container mx-auto pt-[4rem] sm:pt-[5rem]">
              <h3 className='text-center font-light text-[3.5rem] mb-[3rem] font-sans' style={{ color: 'var(--ifm-color-primary-lighter)' }}>
                Features
              </h3>
              <FeatureTable />

            </div>

            {/* <div className="container flex flex-col py-[6rem]">
              <div className="flex w-full">
                <div className="flex flex-col items-start flex-1 mr-[5rem]">
                  <div className="flex flex-col">
                    <h3 className='font-light text-[3.5rem] mb-2 font-sans' style={{ color: 'var(--ifm-color-primary-lighter)' }}>The easiest to use keyboard firmware.</h3>
                    <h4 className='text-left font-light text-[1.2rem] max-w-[80%]'>Setup your board and create your keymap from within an easy to use GUI. No programming knowledge required. Peg will handle the KMK for you.</h4>
                  </div>
                  <div className="flex w-full items-center mt-[3rem] mb-[1.5rem]">
                    <div className="flex flex-col w-[30%]">
                      <PegLogo />
                    </div>
                    <div className="flex ml-[2rem]">
                      <a href="https://peg.software/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                        <button className="btn btn-sm btn-outline btn-success">Download</button>
                      </a>
                      <a href="https://peg.software/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                        <button className="btn btn-sm btn-outline ml-[1rem]">Learn More</button>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-wrap mt-3 ml-[.55rem] ">
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.25rem] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-[.9rem]'>LED Configuration</p>
                      </div>
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.25rem] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-[.9rem]'>OLED Configuration</p>
                      </div>
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.25rem] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-[.9rem]'>Rotary Encoder Support</p>
                      </div>
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.25rem] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-[.9rem]'>Custom Keycodes</p>
                      </div>
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.25rem] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-[.9rem]'>Drag and Drop Mapping</p>
                      </div>
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.25rem] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-[.9rem]'>Share/Download Features</p>
                      </div>
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.25rem] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-[.9rem]'>Full Code Injection</p>
                      </div>
                      <div className="flex items-center mr-4">

                        <a className='text-[.9rem]' href='https://peg.software/features' style={{ color: 'var(--ifm-color-primary-lighter)' }}>See All</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-start mt-[1.5rem] pl-[3.5rem] w-full">
                    <div className="line h-full w-[.1rem] rounded rounded-full bg-base-content"></div>
                    <div className="flex w-full">
                      <div className="flex flex-col justify-center w-[15rem] ml-3">
                        <p className='mb-1'>Out of The Box Functionality</p>
                        <a href="https://boardsource.xyz/store/628b95b494dfa308a6581622" target="_blank" rel="noopener noreferrer">
                          <button className='btn btn-sm btn-outline'>Learn More</button>
                        </a>
                      </div>
                      <div className="flex w-[8rem]">
                        <BlokLogo />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 max-w-[50%]">
                  <div className="mockup-code flex flex-col flex-1">
                    <div className="text-[1.75rem]" style={{ color: 'var(--ifm-color-primary-lighter)' }}>
                      <pre className='px-11 text-left'><code>Hackable by Default</code></pre>
                    </div>
                    <pre className='px-11 text-left'>
                      <code>
                        Developers or users interested in learning programming can work in a modern development environment. KMKfw, CircuitPython, and Python are easy to learn making it fast and enjoyable to implement new features.
                      </code>
                    </pre>
                    <pre className='px-11 text-left'>
                      <code>
                        All code running on your board lives within a single main.py file, and you can do anything from within that file. Make a change or add a new feature? Simply save the file and test it immediately on your device. No need to re-compile.
                      </code>
                    </pre>
                    <pre className='px-11 text-left mb-[2.5rem]'>
                      <code>
                        Isn't C.
                      </code>
                    </pre>
                    <div className="flex w-full justify-end pr-[4rem]">
                      <img className='h-[6.5rem]' src="./img/kmk_logo_skeleton_k.svg" alt="" />
                    </div>


                  </div>


                </div>

              </div>


          
            </div> */}






          </div>
          <div className="container mx-auto flex justify-center flex-col items-center mb-[5rem]">
            <h3 className='font-light text-[3.5rem] mb-2 font-sans text-center' style={{ color: 'var(--ifm-color-primary-lighter)' }}>The easiest to use keyboard firmware.</h3>
            <Link
              to="/docs/Getting_Started/">
              <button className="btn btn-outline mt-[3rem]">
                Getting Started
              </button>
            </Link>

          </div>
          {/* <HomepageFeatures /> */}
        </main>
      </div >
    </Layout >
  );
}
