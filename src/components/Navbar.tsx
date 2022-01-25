// import Link from "next/link";
// import Image from "next/image";
import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import useToggle from "../hooks/useToggle";
import React from "react";

export const Navbar = () => {
  const { isDarkMode, toggle } = useDarkMode();
  const [latestCommit, SetLatestCommit] = useState<number>();
  const [menuOpen, toggleMenu] = useToggle(true);

  useEffect(() => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark", isDarkMode);

    fetch("https://xpvitaldata.herokuapp.com/last-commit")
      .then((res) => res.json())
      .then((latestCommit) => {
        SetLatestCommit(Date.parse(latestCommit));
      });
  }, [isDarkMode, menuOpen]);

  useEffect(() => {
    document.querySelector("#menu").classList.toggle("hidden");
  }, [menuOpen]);

  return (
    <nav className="w-full dark:text-white relative">
      <div className="flex py-4 flex-col items-start md:flex-row md:space-x-12 md:items-center">
        <a
          href="https://docs.xp.network"
          // className="flex space-x-2 justify-center hover:no-underline"
          className="dark:text-white"
        >
          {isDarkMode ? (
            <svg
              width="152"
              height="38"
              viewBox="0 0 152 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0271 25.8603L10.1203 32.7415L16.5406 37.6882C17.0802 38.1039 17.8545 38.1039 18.3941 37.6882L34.1309 25.5863L26.7454 19.9121L19.0271 25.8603ZM16.3349 26.1897L13.4732 23.9843L13.4691 23.9923L0.000162336 13.7695C0.000150891 13.7719 0.000147076 13.7743 0.000147076 13.7767L0.000146961 15.0982L0.000143146 15.1005L0.000146279 22.8995L0.000142348 24.2234C0.000142308 24.6853 0.211297 25.101 0.563222 25.3782L8.95603 31.8445L16.3349 26.1897ZM0.704565 12.513L8.07525 18.1758L16.5406 11.6518C16.6152 11.5944 16.6943 11.5449 16.7766 11.5033L24.8758 5.29637L18.3941 0.311823C17.8545 -0.103902 17.0802 -0.103902 16.5406 0.311823L0.704565 12.513ZM26.0547 6.20298L18.6686 11.8634L27.9289 19L27.9227 19.0048L34.9275 24.3865C34.9322 24.34 34.9346 24.2932 34.9346 24.2465L34.9346 22.902L34.9346 22.8995L34.9346 13.7536C34.9346 13.3147 34.7234 12.8759 34.3715 12.5988L26.0547 6.20298Z"
                fill="white"
              />
              <path
                opacity="0.9"
                d="M47.6925 14.118H45.4287L48.8324 19.5726L45.386 25.0271H47.6659L50.0948 21.0587H50.1801L52.6091 25.0271H54.8995L51.4851 19.5726L54.8463 14.118H52.5931L50.1801 18.113H50.0948L47.6925 14.118ZM56.8477 25.0271H58.8239V21.341H60.9119C63.4315 21.341 64.7845 19.8282 64.7845 17.7295C64.7845 15.6468 63.4475 14.118 60.9386 14.118H56.8477V25.0271ZM58.8239 19.7164V15.7693H60.635C62.1158 15.7693 62.771 16.5683 62.771 17.7295C62.771 18.8907 62.1158 19.7164 60.6456 19.7164H58.8239ZM67.5409 25.1443C68.1695 25.1443 68.7075 24.6223 68.7128 23.9724C68.7075 23.3332 68.1695 22.8112 67.5409 22.8112C66.8911 22.8112 66.3637 23.3332 66.369 23.9724C66.3637 24.6223 66.8911 25.1443 67.5409 25.1443ZM80.2037 14.118H78.2382V21.5541H78.1423L73.0073 14.118H71.2389V25.0271H73.2151V17.5963H73.3056L78.4459 25.0271H80.2037V14.118ZM82.807 25.0271H89.9448V23.3705H84.7833V20.3929H89.5347V18.7363H84.7833V15.7746H89.9022V14.118H82.807V25.0271ZM91.889 15.7746H95.2608V25.0271H97.221V15.7746H100.593V14.118H91.889V15.7746ZM105.017 25.0271H106.966L109.155 17.3726H109.241L111.425 25.0271H113.374L116.453 14.118H114.328L112.362 22.14H112.266L110.162 14.118H108.229L106.13 22.1347H106.029L104.063 14.118H101.938L105.017 25.0271ZM127.435 19.5726C127.435 16.0463 125.283 13.9689 122.423 13.9689C119.557 13.9689 117.41 16.0463 117.41 19.5726C117.41 23.0935 119.557 25.1762 122.423 25.1762C125.283 25.1762 127.435 23.0988 127.435 19.5726ZM125.448 19.5726C125.448 22.0548 124.202 23.4025 122.423 23.4025C120.649 23.4025 119.397 22.0548 119.397 19.5726C119.397 17.0903 120.649 15.7427 122.423 15.7427C124.202 15.7427 125.448 17.0903 125.448 19.5726ZM129.754 25.0271H131.73V21.0321H133.743L135.885 25.0271H138.09L135.73 20.7018C137.014 20.1851 137.69 19.0878 137.69 17.607C137.69 15.5243 136.348 14.118 133.844 14.118H129.754V25.0271ZM131.73 19.3914V15.7693H133.541C135.016 15.7693 135.677 16.4458 135.677 17.607C135.677 18.7682 135.016 19.3914 133.551 19.3914H131.73ZM139.959 25.0271H141.936V21.7778L143.145 20.3503L146.399 25.0271H148.775L144.519 19.0132L148.738 14.118H146.325L142.069 19.1304H141.936V14.118H139.959V25.0271Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="152"
              height="38"
              viewBox="0 0 152 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.027 25.8603L10.1201 32.7415L16.5405 37.6882C17.0801 38.1039 17.8543 38.1039 18.394 37.6882L34.1308 25.5863L26.7453 19.9121L19.027 25.8603ZM16.3348 26.1897L13.4731 23.9843L13.469 23.9923L4.02653e-05 13.7695C2.8821e-05 13.7719 2.50061e-05 13.7743 2.50059e-05 13.7767L2.48903e-05 15.0982L2.10754e-05 15.1005L2.42083e-05 22.8995L2.02779e-05 24.2234C2.02375e-05 24.6853 0.211175 25.101 0.5631 25.3782L8.95591 31.8445L16.3348 26.1897ZM0.704443 12.513L8.07513 18.1758L16.5405 11.6518C16.6151 11.5944 16.6941 11.5449 16.7765 11.5033L24.8757 5.29637L18.394 0.311823C17.8544 -0.103902 17.0801 -0.103902 16.5405 0.311823L0.704443 12.513ZM26.0546 6.20298L18.6685 11.8634L27.9288 19L27.9226 19.0048L34.9273 24.3865C34.932 24.34 34.9344 24.2932 34.9344 24.2465L34.9344 22.902L34.9344 22.8995L34.9345 13.7536C34.9345 13.3147 34.7233 12.8759 34.3714 12.5988L26.0546 6.20298Z"
                fill="#0E1220"
              />
              <path
                opacity="0.9"
                d="M47.6925 14.1179H45.4287L48.8324 19.5724L45.386 25.027H47.6659L50.0948 21.0586H50.1801L52.6091 25.027H54.8995L51.4851 19.5724L54.8463 14.1179H52.5931L50.1801 18.1129H50.0948L47.6925 14.1179ZM56.8477 25.027H58.8239V21.3409H60.9119C63.4315 21.3409 64.7845 19.8281 64.7845 17.7294C64.7845 15.6467 63.4475 14.1179 60.9386 14.1179H56.8477V25.027ZM58.8239 19.7163V15.7692H60.635C62.1158 15.7692 62.771 16.5682 62.771 17.7294C62.771 18.8906 62.1158 19.7163 60.6456 19.7163H58.8239ZM67.5409 25.1442C68.1695 25.1442 68.7075 24.6221 68.7128 23.9723C68.7075 23.3331 68.1695 22.8111 67.5409 22.8111C66.8911 22.8111 66.3637 23.3331 66.369 23.9723C66.3637 24.6221 66.8911 25.1442 67.5409 25.1442ZM80.2037 14.1179H78.2382V21.554H78.1423L73.0073 14.1179H71.2389V25.027H73.2151V17.5962H73.3056L78.4459 25.027H80.2037V14.1179ZM82.807 25.027H89.9448V23.3704H84.7833V20.3927H89.5347V18.7361H84.7833V15.7745H89.9022V14.1179H82.807V25.027ZM91.889 15.7745H95.2608V25.027H97.221V15.7745H100.593V14.1179H91.889V15.7745ZM105.017 25.027H106.966L109.155 17.3725H109.241L111.425 25.027H113.374L116.453 14.1179H114.328L112.362 22.1399H112.266L110.162 14.1179H108.229L106.13 22.1346H106.029L104.063 14.1179H101.938L105.017 25.027ZM127.435 19.5724C127.435 16.0462 125.283 13.9687 122.423 13.9687C119.557 13.9687 117.41 16.0462 117.41 19.5724C117.41 23.0934 119.557 25.1761 122.423 25.1761C125.283 25.1761 127.435 23.0987 127.435 19.5724ZM125.448 19.5724C125.448 22.0547 124.202 23.4023 122.423 23.4023C120.649 23.4023 119.397 22.0547 119.397 19.5724C119.397 17.0902 120.649 15.7425 122.423 15.7425C124.202 15.7425 125.448 17.0902 125.448 19.5724ZM129.754 25.027H131.73V21.0319H133.743L135.885 25.027H138.09L135.73 20.7017C137.014 20.185 137.69 19.0877 137.69 17.6069C137.69 15.5241 136.348 14.1179 133.844 14.1179H129.754V25.027ZM131.73 19.3913V15.7692H133.541C135.016 15.7692 135.677 16.4457 135.677 17.6069C135.677 18.7681 135.016 19.3913 133.551 19.3913H131.73ZM139.959 25.027H141.936V21.7777L143.145 20.3501L146.399 25.027H148.775L144.519 19.0131L148.738 14.1179H146.325L142.069 19.1303H141.936V14.1179H139.959V25.027Z"
                fill="#040D27"
              />
            </svg>
          )}
        </a>
        <div
          id="menu"
          className={
            "flex md:flex flex-col w-full mt-8 md:mt-0 md:flex-row items-start space-y-5 md:space-y-0 md:space-x-10"
          }
        >
          <a
            className="md:inline text-sm dark:hover:text-white hover:no-underline hover:opacity-50"
            href="https://xp.network/whitepaper/"
          >
            Whitepaper
          </a>
          <a
            className="md:inline text-sm dark:hover:text-white hover:no-underline hover:opacity-50"
            href="https://xp.network/api/"
          >
            API
          </a>
          <a
            className="md:inline text-sm dark:hover:text-white hover:no-underline hover:opacity-50"
            href="https://xp.network"
          >
            Home
          </a>
          <a
            target="_blank"
            className="md:inline text-sm dark:hover:text-white hover:no-underline hover:opacity-50"
            href="https://github.com/xp-network"
          >
            GitHub
            <span className="text-xs ml-2 px-2 text-black bg-gray-200  dark:bg-gray-700 dark:text-white rounded-full">
              <svg
                className="inline-block mr-1 mb-1"
                width="7"
                height="8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="4" r="3.5" fill="#1BEA6E" />
              </svg>
              Latest commit {new Date(latestCommit).toLocaleDateString()}
            </span>
          </a>
        </div>
      </div>
      <button
        className="absolute flex space-x-2 items-center top-5 right-3 dark:text-white md:hidden"
        onClick={toggleMenu}
      >
        {menuOpen && (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6.28491" width="9" height="2" rx="1" fill="currentColor" />
            <rect
              x="0.284912"
              y="12"
              width="15"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="0.284912"
              y="6"
              width="15"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        )}
        <span>MENU</span>
        {!menuOpen && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.40994 6.99915L12.7099 2.70915C12.8982 2.52084 13.004 2.26545 13.004 1.99915C13.004 1.73285 12.8982 1.47745 12.7099 1.28915C12.5216 1.10084 12.2662 0.995056 11.9999 0.995056C11.7336 0.995056 11.4782 1.10084 11.2899 1.28915L6.99994 5.58915L2.70994 1.28915C2.52164 1.10084 2.26624 0.995056 1.99994 0.995056C1.73364 0.995056 1.47824 1.10084 1.28994 1.28915C1.10164 1.47745 0.995847 1.73285 0.995847 1.99915C0.995847 2.26545 1.10164 2.52084 1.28994 2.70915L5.58994 6.99915L1.28994 11.2891C1.19621 11.3821 1.12182 11.4927 1.07105 11.6146C1.02028 11.7364 0.994141 11.8671 0.994141 11.9991C0.994141 12.1312 1.02028 12.2619 1.07105 12.3837C1.12182 12.5056 1.19621 12.6162 1.28994 12.7091C1.3829 12.8029 1.4935 12.8773 1.61536 12.928C1.73722 12.9788 1.86793 13.0049 1.99994 13.0049C2.13195 13.0049 2.26266 12.9788 2.38452 12.928C2.50638 12.8773 2.61698 12.8029 2.70994 12.7091L6.99994 8.40915L11.2899 12.7091C11.3829 12.8029 11.4935 12.8773 11.6154 12.928C11.7372 12.9788 11.8679 13.0049 11.9999 13.0049C12.132 13.0049 12.2627 12.9788 12.3845 12.928C12.5064 12.8773 12.617 12.8029 12.7099 12.7091C12.8037 12.6162 12.8781 12.5056 12.9288 12.3837C12.9796 12.2619 13.0057 12.1312 13.0057 11.9991C13.0057 11.8671 12.9796 11.7364 12.9288 11.6146C12.8781 11.4927 12.8037 11.3821 12.7099 11.2891L8.40994 6.99915Z"
              fill="#212226"
            />
          </svg>
        )}
      </button>
      <div className="btn absolute top-5 right-28 md:right-5">
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            checked={isDarkMode}
            onClick={toggle}
            className="toggle-checkbox absolute block w-5 h-5 rounded-full border bg-white appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
      </div>
    </nav>
  );
};
