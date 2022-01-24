// import Image from "next/image";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const footerLinks = [
  {
    id: 0,
    title: "Ecosystem",
    links: [
      {
        name: "Home",
        href: "https://xp.network/",
        target: "_self",
      },
      {
        name: "Multi-Chain NFT Bridge",
        href: "https://bridge.xp.network/",
        target: "_blank",
      },
      {
        name: "XPNET Staking",
        href: "https://stake.xp.network/",
        target: "_blank",
      },
    ],
  },
  {
    id: 1,
    title: "Docs",
    links: [
      {
        name: "Whitepaper",
        href: "https://xp.network/whitepaper/",
        target: "_self",
      },
      { name: "Wiki", href: "https://xp.network/", target: "_self" },
      { name: "API", href: "/docs/API/usage", target: "_self" },
      {
        name: "GitHub",
        target: "_black",
        href: "https://github.com/XP-NETWORK",
      },
    ],
  },
  {
    id: 2,
    title: "Community",
    links: [
      {
        name: "Telegram",
        href: "https://t.me/xp_network",
        target: "_blank",
        icon: (
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.859619 6.6054L17.232 0.0798657C17.9919 -0.203917 18.6556 0.271492 18.4093 1.45928L18.4108 1.45782L15.6231 15.034C15.4165 15.9965 14.8632 16.2306 14.0891 15.7771L9.84391 12.5429L7.7963 14.582C7.56989 14.8161 7.37885 15.0135 6.94018 15.0135L7.24159 10.5476L15.1094 3.20001C15.4518 2.88843 15.033 2.7129 14.5816 3.02301L4.85861 9.35106L0.667169 7.99944C-0.242723 7.70103 -0.262533 7.05886 0.859619 6.6054Z"
              fill="#0A0A0A"
            />
          </svg>
        ),
      },
      {
        name: "Twitter",
        href: "https://twitter.com/XPNetwork_?ref_src=twsrc%5Etfw",
        target: "_blank",
        icon: (
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6923 1.89415C18.96 2.21538 18.1797 2.42831 17.3662 2.53169C18.2031 2.032 18.8419 1.24677 19.1422 0.300308C18.3619 0.765538 17.5003 1.09415 16.5822 1.27754C15.8412 0.488616 14.7852 0 13.6332 0C11.3982 0 9.59877 1.81415 9.59877 4.03815C9.59877 4.35815 9.62585 4.66585 9.69231 4.95877C6.336 4.79508 3.36615 3.18646 1.37108 0.736C1.02277 1.34031 0.818462 2.032 0.818462 2.77662C0.818462 4.17477 1.53846 5.41415 2.61169 6.13169C1.96308 6.11938 1.32677 5.93108 0.787692 5.63446C0.787692 5.64677 0.787692 5.66277 0.787692 5.67877C0.787692 7.64062 2.18708 9.27015 4.02215 9.64554C3.69354 9.73538 3.33539 9.77846 2.96369 9.77846C2.70523 9.77846 2.44431 9.76369 2.19939 9.70954C2.72246 11.3083 4.20677 12.4837 5.97169 12.5218C4.59816 13.5963 2.85415 14.2437 0.966154 14.2437C0.635077 14.2437 0.317539 14.2289 0 14.1883C1.78831 15.3415 3.90769 16 6.19323 16C13.6222 16 17.6837 9.84615 17.6837 4.512C17.6837 4.33354 17.6775 4.16123 17.6689 3.99015C18.4702 3.42154 19.1434 2.71138 19.6923 1.89415Z"
              fill="#0A0A0A"
            />
          </svg>
        ),
      },
      {
        name: "Reddit",
        href: "https://www.reddit.com/user/XP_network/",
        target: "_blank",
        icon: (
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6569 7.05338C18.7339 7.87014 18.3481 8.47616 17.7126 8.94376C17.5599 9.05601 17.5127 9.15036 17.5398 9.34525C17.7389 10.8066 17.3101 12.0875 16.3421 13.1894C15.1216 14.5784 13.5361 15.3366 11.7556 15.7353C10.5184 16.0122 9.26597 16.0714 8.00658 15.9151C6.56678 15.7353 5.1936 15.3428 3.95572 14.5674C2.87118 13.8883 1.97816 13.0275 1.45914 11.8368C1.09416 10.9994 1.00049 10.1289 1.15106 9.23162C1.16702 9.13521 1.14759 9.08218 1.05877 9.02364C0.520323 8.66554 0.12967 8.19381 0.0290574 7.54164C-0.226984 5.88266 1.2593 4.87309 2.51106 5.20227C2.87327 5.2973 3.20841 5.49357 3.55188 5.65127C3.63584 5.68984 3.69204 5.71463 3.78363 5.65265C4.78768 4.97294 5.89164 4.52807 7.07887 4.27877C7.74083 4.13966 8.40834 4.04463 9.08556 4.04945C9.21948 4.05014 9.24585 3.97852 9.27707 3.87935C9.63789 2.73824 10.0015 1.5985 10.3637 0.458083C10.4921 0.0531504 10.687 -0.0604787 11.1041 0.0283585C12.1081 0.241155 13.1121 0.450507 14.1148 0.668813C14.239 0.695671 14.3098 0.672945 14.393 0.576532C15.2444 -0.406186 16.5656 0.0428202 16.9909 0.79346C17.5224 1.73279 16.9271 2.90558 15.8301 3.08119C15.0321 3.20859 14.2418 2.70656 14.0294 1.91873C13.9843 1.75208 13.9052 1.69698 13.7463 1.66462C12.972 1.50829 12.2011 1.33819 11.4295 1.1736C11.3684 1.16052 11.306 1.15363 11.2283 1.14123C10.9049 2.13979 10.585 3.12871 10.2561 4.14379C10.4504 4.16376 10.6197 4.18167 10.789 4.19889C12.301 4.35108 13.7033 4.8173 14.9759 5.64989C15.0564 5.70223 15.1043 5.69948 15.1827 5.63612C15.8689 5.07968 16.6343 4.98121 17.4343 5.33104C18.1733 5.65678 18.5813 6.25247 18.6569 7.05338ZM12.2129 10.255C12.8839 10.2543 13.4806 9.6641 13.4778 9.00436C13.475 8.30193 12.9012 7.72758 12.2059 7.72965C11.5308 7.73172 10.9424 8.30468 10.9431 8.95822C10.9438 9.67305 11.5148 10.2557 12.2129 10.255ZM12.5126 12.6474C12.6583 12.48 12.6209 12.281 12.487 12.1495C12.301 11.9663 12.0609 11.9153 11.8743 12.0214C11.7993 12.0641 11.7306 12.1171 11.6571 12.1619C10.3713 12.9373 9.02797 13.0578 7.63605 12.4835C7.35087 12.3657 7.08858 12.1908 6.82005 12.0358C6.62021 11.9201 6.36903 11.9608 6.17752 12.1529C6.05123 12.2789 6.03527 12.4959 6.16156 12.6735C6.23303 12.7734 6.32948 12.8636 6.43078 12.9339C7.30091 13.5399 8.27928 13.7926 9.41099 13.8057C9.53381 13.7967 9.73503 13.7857 9.93626 13.7671C10.6399 13.7031 11.3108 13.5192 11.918 13.157C12.1393 13.0234 12.3419 12.8416 12.5126 12.6474ZM6.50017 10.255C7.13091 10.2536 7.73527 9.6393 7.7325 9.00161C7.72972 8.31019 7.14478 7.72965 6.45229 7.73034C5.76882 7.73034 5.18666 8.31294 5.18805 8.99541C5.19013 9.68544 5.78478 10.2563 6.50017 10.255Z"
              fill="#0A0A0A"
            />
          </svg>
        ),
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/xp-network/",
        target: "_blank",
        icon: (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1961 15.9999V15.9992H15.1999V10.0636C15.1999 7.1599 14.6115 4.9231 11.416 4.9231C9.87984 4.9231 8.84897 5.81863 8.42811 6.66763H8.38367V5.19418H5.35388V15.9992H8.50873V10.649C8.50873 9.24025 8.7601 7.87807 10.4023 7.87807C12.0203 7.87807 12.0444 9.48571 12.0444 10.7393V15.9999H15.1961Z"
              fill="#0A0A0A"
            />
            <path
              d="M0.430908 4.9231H2.89242V15.9999H0.430908V4.9231Z"
              fill="#0A0A0A"
            />
            <path
              d="M1.59999 0C0.71672 0 0 0.713379 0 1.59253C0 2.47168 0.71672 3.19998 1.59999 3.19998C2.48326 3.19998 3.19998 2.47168 3.19998 1.59253C3.19943 0.713379 2.48271 0 1.59999 0V0Z"
              fill="#0A0A0A"
            />
          </svg>
        ),
      },
      {
        name: "Discord",
        href: "https://discord.gg/g3vkcsmd38",
        target: "_blank",
        icon: (
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6081 1.42491C16.2824 0.820864 14.8607 0.375831 13.3743 0.120942C13.3472 0.116023 13.3202 0.128317 13.3063 0.152904C13.1234 0.475816 12.9209 0.897082 12.7791 1.22819C11.1804 0.990522 9.58982 0.990522 8.02388 1.22819C7.88203 0.889722 7.67215 0.475816 7.4885 0.152904C7.47455 0.129137 7.44751 0.116843 7.42044 0.120942C5.93485 0.375016 4.51322 0.820049 3.18668 1.42491C3.17519 1.42982 3.16535 1.43803 3.15882 1.44867C0.462273 5.44908 -0.276424 9.35116 0.0859561 13.2049C0.0875958 13.2237 0.0982539 13.2418 0.113012 13.2532C1.89211 14.5506 3.61548 15.3382 5.30684 15.8603C5.33391 15.8685 5.36259 15.8587 5.37982 15.8365C5.77991 15.294 6.13656 14.7219 6.44235 14.1203C6.46039 14.0851 6.44317 14.0433 6.40628 14.0294C5.84058 13.8163 5.30192 13.5565 4.78377 13.2614C4.74278 13.2376 4.7395 13.1794 4.7772 13.1516C4.88624 13.0704 4.99531 12.986 5.09943 12.9008C5.11826 12.8852 5.14451 12.8819 5.16666 12.8918C8.57071 14.4351 12.256 14.4351 15.6199 12.8918C15.642 12.8811 15.6683 12.8844 15.6879 12.9C15.7921 12.9852 15.9011 13.0704 16.011 13.1516C16.0487 13.1794 16.0462 13.2376 16.0052 13.2614C15.4871 13.5622 14.9484 13.8163 14.3819 14.0285C14.345 14.0425 14.3286 14.0851 14.3467 14.1203C14.659 14.7211 15.0157 15.2932 15.4084 15.8357C15.4248 15.8587 15.4543 15.8685 15.4814 15.8603C17.1809 15.3382 18.9043 14.5506 20.6834 13.2532C20.699 13.2418 20.7088 13.2245 20.7104 13.2057C21.1441 8.75038 19.984 4.8803 17.6351 1.44949C17.6294 1.43803 17.6196 1.42982 17.6081 1.42491ZM6.95069 10.8584C5.92583 10.8584 5.08138 9.92405 5.08138 8.77662C5.08138 7.62918 5.90946 6.69487 6.95069 6.69487C8.00009 6.69487 8.83637 7.63739 8.81996 8.77662C8.81996 9.92405 7.99189 10.8584 6.95069 10.8584ZM13.8621 10.8584C12.8373 10.8584 11.9928 9.92405 11.9928 8.77662C11.9928 7.62918 12.8209 6.69487 13.8621 6.69487C14.9115 6.69487 15.7478 7.63739 15.7314 8.77662C15.7314 9.92405 14.9115 10.8584 13.8621 10.8584Z"
              fill="#0A0A0A"
            />
          </svg>
        ),
      },
      {
        name: "Bitclout",
        href: "https://bitclout.com/u/XPnetwork",
        target: "_blank",
        icon: (
          <svg
            width="14"
            height="19"
            viewBox="0 0 14 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00005 19L0.546251 11.2858L13.4539 11.2858L7.00005 19Z"
              fill="#0A0A0A"
            />
            <path
              d="M7 4.06831L13.7857 6.78567L7 9.50302L0.214333 6.78567L7 4.06831Z"
              fill="#0A0A0A"
            />
          </svg>
        ),
      },
    ],
  },
];

export const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const [latestCommit, SetLatestCommit] = useState<number>();

  useEffect(() => {
    fetch("https://xpvitaldata.herokuapp.com/last-commit")
      .then((res) => res.json())
      .then((latestCommit) => {
        SetLatestCommit(Date.parse(latestCommit));
      });
  }, []);

  return (
    <div className="py-10 bg-[#DADDE2] dark:bg-[#1C1E26]">
      <div className="max-w-4xl mx-auto px-4">
        <footer className="grid gap-y-10 md:gap-x-10 md:grid-cols-4 items-start">
          {/* <Link href="/"> */}
          <a className="flex items-center space-x-2">
            <img
              src={
                isDarkMode
                  ? "/assets/xp-network-dark.svg"
                  : "/assets/xp-network-light.svg"
              }
              width="120"
              alt="logo"
            />{" "}
            <span className="text-sm text-gray-500 dark:text-gray-500">
              | Docs
            </span>
          </a>
          {/* </Link> */}
          {footerLinks.map((link, i) => (
            <div key={i}>
              <h4 className="font-bold text-sm dark:text-white">
                {link.title}
              </h4>
              <div className="flex flex-col gap-y-3 mt-5">
                {link.links.map((link, i) => (
                  <a
                    href={link.href}
                    key={link.href}
                    target={link.target}
                    className="flex text-sm items-center text-gray-500 dark:text-gray-400 dark:hover:text-white hover:no-underline hover:text-black"
                  >
                    {link.icon ? <div className="w-7">{link.icon}</div> : ""}
                    {link.name}
                    {link.name == "GitHub" ? (
                      <span className="whitespace-nowrap text-xs ml-2 px-2 text-black bg-gray-200  dark:bg-gray-700 dark:text-white rounded-full">
                        <svg
                          className="inline-block mr-1 mb-1"
                          width="7"
                          height="8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="3.5" cy="4" r="3.5" fill="#1BEA6E" />
                        </svg>
                        Latest commit{" "}
                        {new Date(latestCommit).toLocaleDateString()}
                      </span>
                    ) : (
                      ""
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </footer>
      </div>
    </div>
  );
};
