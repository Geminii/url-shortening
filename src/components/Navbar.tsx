import { ReactComponent as LogoIcon } from "../assets/svg/logo.svg"
import { ReactComponent as BurgerIcon } from "../assets/svg/burger.svg"
import BaseButton from "./BaseButton";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative flex justify-between max-w-container pt-9 pb-5 mx-auto px-6 xl:px-0">
      <div className="flex items-center">
        <a href="/" title="Shorty">
          <LogoIcon className="text-very-dark-blue" />
        </a>

        <ul className="hidden sm:flex items-center gap-8 ml-11 text-sm text-grayish-violet font-bold">
          <li className="hover:text-very-dark-violet">
            <a href="/" title="Features">
              Features
            </a>
          </li>
          <li className="hover:text-very-dark-violet">
            <a href="/" title="Pricing">
              Pricing
            </a>
          </li>
          <li className="hover:text-very-dark-violet">
            <a href="/" title="Resources">
              Resources
            </a>
          </li>
        </ul>
      </div>

      <ul className="hidden sm:flex items-center gap-9 text-sm text-grayish-violet font-bold">
        <li className="hover:text-very-dark-violet">
          <a href="/" title="Login">
            Login
          </a>
        </li>
        <li>
          <a href="/" title="Sign Up">
            <BaseButton value="Sign Up" />
          </a>
        </li>
      </ul>

      <button className="relative block sm:hidden text-gray">
        <BurgerIcon className="text-gray" onClick={ () => setIsOpen(!isOpen) } />
      </button>

      <div 
        className={`
          absolute top-20 left-6 right-6 bg-dark-violet rounded-xl px-6 py-10 z-10 ${ isOpen ? 'visible' : 'invisible'}
        `}
      >
        <ul className="flex flex-col gap-8 text-center text-white w-full">
          <li className="hover:text-very-dark-violet">
            <a href="/" title="Features">
              Features
            </a>
          </li>
          <li className="hover:text-very-dark-violet">
            <a href="/" title="Pricing">
              Pricing
            </a>
          </li>
          <li className="hover:text-very-dark-violet">
            <a href="/" title="Resources">
              Resources
            </a>
          </li>
          <li className="h-[1px] bg-grayish-violet"></li>
          <li className="hover:text-very-dark-violet">
            <a href="/" title="Login">
              Login
            </a>
          </li>
          <li>
            <a href="/" title="Sign Up">
              <BaseButton value="Sign Up" styleName="w-full" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
