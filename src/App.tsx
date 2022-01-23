import IllustrationWorkingIcon from "./assets/svg/illustration-working.svg"
import { ReactComponent as LogoIcon } from "./assets/svg/logo.svg"
import { ReactComponent as BrandRecognitionIcon } from "./assets/svg/icon-brand-recognition.svg"
import { ReactComponent as DetailedRecordIcon } from "./assets/svg/icon-detailed-records.svg"
import { ReactComponent as FullyCustomizableIcon } from "./assets/svg/icon-fully-customizable.svg"
import { ReactComponent as FacebookIcon } from "./assets/svg/socials/icon-facebook.svg"
import { ReactComponent as TwitterIcon } from "./assets/svg/socials/icon-twitter.svg"
import { ReactComponent as PinterestIcon } from "./assets/svg/socials/icon-pinterest.svg"
import { ReactComponent as InstagramIcon } from "./assets/svg/socials/icon-instagram.svg"

import BaseButton from "./components/BaseButton";
import NavBar from './components/Navbar';
import UrlShortener from "./components/UrlShortener";

function App() {
  return (
    <>
      <NavBar />

      <main className="relative overflow-hidden xl:overflow-visible pt-16 max-w-container mx-auto px-6 xl:px-0 md:min-h-[400px]">
        {/* Hero Banner */}
        <div className="pt-[22rem] md:pt-0">
          <div className="text-center md:text-left md:max-w-md">
            <h1 className="font-bold text-4xl md:text-6xl text-very-dark-blue">More than just shorter links</h1>
            <p className="text-gray mt-2 md:mt-1 text-xs md:max-w-xs md:text-md lg:text-lg">
              Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>

            <div className="inline-block mt-4">
              <BaseButton value="Get Started" />
            </div>
          </div>
        </div>

        <img 
          src={ IllustrationWorkingIcon } 
          alt="Illustration Working" 
          className="absolute left-16 top-0 sm:left-24 min-w-[560px] h-[370px] md:h-auto md:left-auto md:-right-32 md:top-6 md:w-1/2" 
        />
      </main>

      <div className="bg-gray-light mt-40 px-6 xl:px-0">
        <div className="relative max-w-container mx-auto pt-44">
          <UrlShortener />
          
          <div className="text-center">
            <h2 className="text-very-dark-blue text-2xl font-bold">Advanced Statistics</h2>
            <p className="text-gray text-md pt-4 max-w-lg mx-auto">
              Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
          </div>

          <div className="py-20 flex flex-col lg:flex-row items-start gap-[30px]">
            <div className="card-stats card-stats-brand">
              <div className="card-stats__icon">
                <BrandRecognitionIcon />
              </div>
              <div className="card-stats__separator"></div>

              <h2 className="mb-5 font-bold text-very-dark-blue text-xl">Brand Recognition</h2>
              <p className="text-gray text-sm">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            
            <div className="card-stats card-stats-record mt-14">
              <div className="card-stats__icon">
                <DetailedRecordIcon />
              </div>
              <div className="card-stats__separator"></div>

              <h2 className="mb-5 font-bold text-very-dark-blue text-xl">Detailed Records</h2>
              <p className="text-gray text-sm">Gain insights into who is clicking your links. Knowing when and where  people engage with your content helps inform better decisions.</p>
            </div>

            <div className="card-stats mt-14 md:mt-18 lg:mt-24">
              <div className="card-stats__icon">
                <FullyCustomizableIcon />
              </div>

              <h2 className="mb-5 font-bold text-very-dark-blue text-xl">Fully Customizable</h2>
              <p className="text-gray text-sm">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="boost-links">
        <h2 className="text-white text-3xl mb-4">Boost your links today</h2>

        <BaseButton value="Get Started" />
      </div>

      <footer className="bg-very-dark-violet text-center md:text-left px-6 xl:px-0">
        <div className="relative max-w-container mx-auto pt-16 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 mx-auto items-start">
            <a href="/" title="Shorty" className="mx-auto mb-12 md:mx-0">
              <LogoIcon className="text-white" />
            </a>

            <div className="flex flex-col gap-y-12 md:gap-y-0 col-span-2 justify-between md:flex-row">
              <ul>
                <li className="text-white text-md font-bold mb-6">Features</li>
                <li className="text-gray text-md mb-3">
                  <a href="/" title="Link Shortening" className="hover:text-cyan">
                    Link Shortening
                  </a>
                </li>
                <li className="text-gray text-md mb-3">
                  <a href="/" title="Branded Links" className="hover:text-cyan">
                    Branded Links
                  </a>
                </li>
                <li className="text-gray text-md">
                  <a href="/" title="Analytics" className="hover:text-cyan">
                    Analytics
                  </a>
                </li>
              </ul>

              <ul>
                <li className="text-white text-md font-bold mb-6">
                  <a href="/" title="Resources" className="hover:text-cyan">
                    Resources
                  </a>
                </li>
                <li className="text-gray text-md mb-3">
                  <a href="/" title="Blog" className="hover:text-cyan">
                    Blog
                  </a>
                </li>
                <li className="text-gray text-md mb-3">
                  <a href="/" title="Developers" className="hover:text-cyan">
                    Developers
                  </a>
                </li>
                <li className="text-gray text-md">
                  <a href="/" title="Support" className="hover:text-cyan">
                    Support
                  </a>
                </li>
              </ul>

              <ul>
                <li className="text-white text-md font-bold mb-6">
                  <a href="/" title="Company" className="hover:text-cyan">
                    Company
                  </a>
                </li>
                <li className="text-gray text-md mb-3">
                  <a href="/" title="Our Team" className="hover:text-cyan">
                    Our Team
                  </a>
                </li>
                <li className="text-gray text-md mb-3">
                  <a href="/" title="Careers" className="hover:text-cyan">
                    Careers
                  </a>
                </li>
                <li className="text-gray text-md">
                  <a href="/" title="Contact" className="hover:text-cyan">
                    Contact
                  </a>  
                </li>
              </ul>
            </div>

            <div className="flex justify-center mt-12 md:mt-0 md:justify-end gap-6">
              <a href="/" target="_blank" title="Facebook">
                <FacebookIcon className="text-white hover:text-cyan" />
              </a>
              <a href="/" target="_blank" title="Twitter">
                <TwitterIcon className="text-white hover:text-cyan" />
              </a>
              <a href="/" target="_blank" title="Pinterest">
                <PinterestIcon className="text-white hover:text-cyan" />
              </a>
              <a href="/" target="_blank" title="Instagram">
                <InstagramIcon className="text-white hover:text-cyan" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
