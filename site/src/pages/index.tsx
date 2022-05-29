import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PegLogo from '../components/images/peg_logo'
import BlokLogo from '../components/images/blok_logo'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`KMKfw`}
      // ${siteConfig.title}
      description="Keyboard Firmware Powered By Python">
      {/* <HomepageHeader /> */}
      <div id="tailwind">
        <div className="bg-base-200">
          <div className="container flex flex-col w-full items-center py-[8rem]">
            <div className="w-[50%]">
              <img src="./img/kmk_logo.svg" alt="kmk logo" />
            </div>
            <h2 className='font-thin mt-[5rem] mb-[1.5rem]'>Keyboard Firmware Powered By Python</h2>
            <div className="flex items-center">
              <Link

                to="/docs/Getting_Started/">
                <button className="btn btn-success btn-outline mr-4">

                  Getting Started

                </button>
              </Link>

              <Link

                to="/docs/Officially_Supported_Microcontrollers/">
                <button className="btn btn-outline mr-4">

                  Compatible Controllers
                </button>

              </Link>

              <iframe src="https://ghbtns.com/github-btn.html?user=KMKfw&repo=kmk_firmware&type=star&count=true" scrolling="0" width="150" height="20" title="GitHub"></iframe>

            </div>
          </div>
        </div>

        <main>
          <div className="">
            <div className="container flex flex-col py-[6rem]">
              {/* <div className="w-[50%]">
                <img src="./img/kmk_logo_skeleton_k.svg" alt="" />
              </div> */}
              <div className="gap-[6rem] flex w-full">
                <div className="flex flex-col items-start flex-1">
                  <div className="flex flex-col">
                    <h3 className='font-light text-[3.5rem] mb-2' style={{ color: 'var(--ifm-color-primary-lighter)' }}>The easiest to use keyboard firmware.</h3>
                    <h4 className='text-left mb-10 font-light text-[1.2rem] max-w-[80%]'>Setup your board and create your keymap from within an easy to use GUI. No programming knowledge required. Peg will handle the KMK for you.</h4>
                  </div>

                  <div className="flex w-full items-center">
                    <div className="flex flex-col w-[35%]">
                      <PegLogo />
                    </div>
                    <div className="flex flex-1 ml-[4rem]">
                      <a href="https://peg.software/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                        <button className="btn btn-sm btn-outline btn-success">Download</button>
                      </a>
                      <a href="https://peg.software/" target="_blank" rel="noopener noreferrer" className="flex w-full">
                        <button className="btn btn-sm btn-outline ml-2">Learn More</button>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col mt-[2rem] justify-between w-full">
                    <div className="flex flex">
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.5rem] w-[2.5rem] stroke-base-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p>Guided New Board Setup</p>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.5rem] w-[2.5rem] stroke-base-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p>No Programming Knowledge Required</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap mt-3 ml-[.55rem] w-full">
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
                    {/* <div className="link link-primary mt-1">View All Peg Features</div> */}
                  </div>
                  <div className="flex flex-1 w-full items-center justify-start pl-[3.5rem] pt-[2rem]">
                    <div className="line h-full w-[.15rem] rounded rounded-full bg-base-content"></div>
                    <div className="flex w-full">
                      <div className="flex flex-col items-start px-[2rem]">
                        <p className='mb-1'>Out Of The Box Functionality</p>
                        <a href="https://boardsource.xyz/store/628b95b494dfa308a6581622" target="_blank" rel="noopener noreferrer">
                          <button className='btn btn-sm btn-outline'>Learn More</button>
                        </a>
                      </div>
                      <div className="flex h-[3.75rem]">
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
                  {/* <div className="w-full"> */}

                  {/* </div> */}

                </div>

              </div>


              {/* <div className="flex">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[3rem] w-[2.5rem] stroke-base-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="" stroke-width="1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className='font-light text-[1.3rem]'>Get Up and Running Quickly</h4>
                  </div>

                </div>
              </div> */}
              {/* <p>KMK is extremely easy to use, no matter your experience level.</p> */}

              {/* <div className="mt-3 gap-20 flex w-full bg-red-200">
                <div className="flex flex-col flex-1">
                  <h4 className='text-[1.2rem] font-normal'>No Experience Required</h4>
                  <div className="w-[60%]">
                    <PegLogo />
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque et voluptates dolor eos! Corrupti natus similique eligendi fuga consequuntur odio vel, hic sequi nesciunt vero reprehenderit in iste nostrum?</p>
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className='text-[1.2rem] font-normal'>Advanced Users</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque et voluptates dolor eos! Corrupti natus similique eligendi fuga consequuntur odio vel, hic sequi nesciunt vero reprehenderit in iste nostrum?</p>
                </div>
              </div> */}
            </div>
            <div className="container mx-auto pt-[5rem]">
              <h3 className='text-center font-light text-[3.5rem] mb-2' style={{ color: 'var(--ifm-color-primary-lighter)' }}>
                Features
              </h3>
            </div>
          </div>
          {/* <HomepageFeatures /> */}
        </main>
      </div >
    </Layout >
  );
}
