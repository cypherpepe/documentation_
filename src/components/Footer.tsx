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
        href: "https://docs.xp.network/docs/Whitepaper2.0/introduction/",
        target: "_self",
      },
      { name: "Wiki", href: "https://wiki.xp.network/", target: "_self" },
      {
        name: "API",
        href: "https://docs.xp.network/docs/API/usage",
        target: "_self",
      },
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
        <footer className="grid gap-y-10 md:gap-x-20 md:grid-cols-4 items-start">
          {/* <Link href="/"> */}
          <a className="flex -translate-y-2 items-center space-x-1">
            {isDarkMode ? (
              <svg
                className="dark:text-white"
                width="182"
                height="36"
                viewBox="0 0 182 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.2993 12.1951C41.535 12.1951 41.5958 12.256 41.6642 12.3472L44.7282 16.4376H44.8347L47.7922 12.37C47.8759 12.2636 48.0051 12.2027 48.1724 12.2027H50.0275C50.2176 12.2027 50.286 12.37 50.1947 12.4765L46.0435 17.6921L50.6661 23.5007C50.7726 23.6528 50.7118 23.7973 50.5141 23.7973H48.6437C48.4765 23.7973 48.3244 23.7364 48.218 23.5844L44.7662 18.9466H44.6598L41.3677 23.5692C41.2385 23.7212 41.094 23.8049 40.9191 23.8049H39.064C38.912 23.8049 38.8283 23.6756 38.9348 23.5312L43.4889 17.7377L39.3834 12.5221C39.2997 12.37 39.3377 12.2027 39.5354 12.2027H41.2993V12.1951Z"
                  fill="white"
                />
                <path
                  d="M59.6529 12.1951C62.1847 12.1951 64.017 14.0275 64.017 16.3464C64.017 18.7337 62.1847 20.5204 59.6529 20.5204H55.9731V23.5007C55.9731 23.6908 55.8894 23.7973 55.7146 23.7973H54.3308C54.1407 23.7973 54.0343 23.6908 54.0343 23.5007V12.4993C54.0343 12.3092 54.1407 12.2027 54.3308 12.2027H59.6529V12.1951ZM59.6529 18.7109C61.2039 18.7109 62.0782 17.7073 62.0782 16.3464C62.0782 15.0082 61.2039 14.0046 59.6529 14.0046H55.9731V18.7109H59.6529Z"
                  fill="white"
                />
                <path
                  d="M68.0845 21.1362C68.8524 21.1362 69.5139 21.7749 69.5139 22.5428C69.5139 23.3107 68.8524 23.9721 68.0845 23.9721C67.3166 23.9721 66.678 23.3107 66.678 22.5428C66.678 21.7749 67.3166 21.1362 68.0845 21.1362Z"
                  fill="white"
                />
                <path
                  d="M82.3476 23.7973C82.1955 23.7973 82.0739 23.7364 81.9827 23.6072L78.1736 18.7945L75.3453 14.9018L75.2388 14.9246L75.3681 18.3763V23.5083C75.3681 23.6984 75.2617 23.8049 75.0488 23.8049H73.7106C73.5434 23.8049 73.4521 23.6984 73.4521 23.5083V12.4993C73.4521 12.3092 73.5358 12.2027 73.7259 12.2027H74.9803C75.1932 12.2027 75.3605 12.2636 75.4669 12.4156L79.5573 17.5248L82.1119 21.0602L82.2184 21.0374L82.0663 17.6084V12.4993C82.0663 12.3092 82.1727 12.2027 82.3628 12.2027H83.7009C83.891 12.2027 83.9746 12.3092 83.9746 12.4993V23.5083C83.9746 23.6984 83.891 23.8049 83.7009 23.8049H82.3476V23.7973Z"
                  fill="white"
                />
                <path
                  d="M96.9073 12.1951C97.0594 12.1951 97.2038 12.3244 97.2038 12.4917V13.7081C97.2038 13.8602 97.0518 13.9818 96.9073 13.9818H90.1787V16.8558H96.3067C96.4968 16.8558 96.6032 16.9622 96.6032 17.1523V18.3687C96.6032 18.5588 96.4968 18.6425 96.3067 18.6425H90.1787V21.9878H97.1202C97.3103 21.9878 97.3939 22.0714 97.3939 22.2463V23.5007C97.3939 23.6908 97.3103 23.7973 97.1202 23.7973H88.5213C88.3312 23.7973 88.2476 23.6908 88.2476 23.5007V12.4993C88.2476 12.3092 88.3312 12.2027 88.5213 12.2027H96.9073V12.1951Z"
                  fill="white"
                />
                <path
                  d="M110.699 12.1951C110.889 12.1951 110.996 12.3016 110.996 12.4917V13.7081C110.996 13.8982 110.889 14.0046 110.699 14.0046H106.761V23.5007C106.761 23.6528 106.654 23.7973 106.464 23.7973H105.126C104.936 23.7973 104.83 23.6908 104.83 23.5007V14.0046H100.891C100.701 14.0046 100.595 13.8982 100.595 13.7081V12.4917C100.595 12.3016 100.701 12.1951 100.891 12.1951H110.699Z"
                  fill="white"
                />
                <path
                  d="M115.664 12.1951C115.854 12.1951 115.96 12.256 116.006 12.408L118.69 21.5392H118.796L121.374 12.408C121.419 12.256 121.526 12.1951 121.67 12.1951H123.099C123.252 12.1951 123.358 12.256 123.396 12.408L126.034 21.5392H126.141L128.802 12.4308C128.847 12.2788 128.954 12.1951 129.098 12.1951H130.672C130.862 12.1951 130.931 12.2788 130.862 12.4689L127.243 23.5388C127.182 23.706 127.053 23.7973 126.878 23.7973H125.114C124.947 23.7973 124.841 23.7136 124.772 23.5236L122.43 15.3732H122.324L120.005 23.5464C119.959 23.7136 119.853 23.8049 119.709 23.8049H117.922C117.732 23.8049 117.603 23.7212 117.542 23.5464L113.9 12.4308C113.839 12.2788 113.9 12.1951 114.09 12.1951H115.664Z"
                  fill="white"
                />
                <path
                  d="M139.742 12.0279C143.103 12.0279 145.726 14.5369 145.726 18.0114C145.726 21.4632 143.11 23.9721 139.742 23.9721C136.382 23.9721 133.759 21.4632 133.759 18.0114C133.759 14.5369 136.374 12.0279 139.742 12.0279ZM135.713 18.0114C135.713 20.3987 137.355 22.1626 139.735 22.1626C142.122 22.1626 143.757 20.3987 143.757 18.0114C143.757 15.6089 142.114 13.8374 139.735 13.8374C137.355 13.8374 135.713 15.6013 135.713 18.0114Z"
                  fill="white"
                />
                <path
                  d="M155.176 12.1951C157.708 12.1951 159.563 14.0275 159.563 16.3464C159.563 17.9658 158.689 19.3267 157.351 20.011L159.29 23.4627C159.396 23.6528 159.29 23.8049 159.054 23.8049H157.503C157.313 23.8049 157.161 23.6528 157.077 23.5083L155.526 20.5052C155.465 20.528 155.359 20.528 155.23 20.528H151.504V23.5083C151.504 23.6984 151.421 23.8049 151.23 23.8049H149.892C149.657 23.8049 149.573 23.6528 149.573 23.5083V12.4993C149.573 12.3092 149.679 12.2027 149.87 12.2027H155.176V12.1951ZM155.176 18.7109C156.727 18.7109 157.625 17.7073 157.625 16.3464C157.625 15.0082 156.727 14.0046 155.176 14.0046H151.497V18.7109H155.176Z"
                  fill="white"
                />
                <path
                  d="M165.243 12.1951C165.433 12.1951 165.539 12.3016 165.539 12.4917V17.6008L171.029 12.4308C171.181 12.2788 171.393 12.1951 171.644 12.1951H173.56C173.75 12.1951 173.834 12.3852 173.69 12.5373L168.58 17.1979L173.963 23.4323C174.115 23.5844 174.024 23.7973 173.796 23.7973H172.093C171.834 23.7973 171.622 23.7136 171.454 23.5236L167.174 18.46L165.532 19.7829V23.5083C165.532 23.6984 165.425 23.8049 165.235 23.8049H163.897C163.707 23.8049 163.6 23.6984 163.6 23.5083V12.4993C163.6 12.3092 163.707 12.2027 163.897 12.2027H165.243V12.1951Z"
                  fill="white"
                />
                <path
                  d="M22.193 29.0737L19.6764 26.5571C18.9617 25.8424 17.8061 25.8424 17.099 26.5571L14.5824 29.0737C13.8449 29.8112 12.6437 29.8112 11.9062 29.0737L10.6897 27.8572L14.5444 24.0025C16.6656 21.8813 20.1022 21.8813 22.2234 24.0025L26.0781 27.8572L24.8616 29.0737C24.1317 29.8112 22.9381 29.8112 22.193 29.0737Z"
                  fill="#F75471"
                />
                <path
                  d="M8.53058 25.6904L7.3141 24.4739C6.57661 23.7364 6.57661 22.5352 7.3141 21.7977L9.83068 19.2811C10.5454 18.5664 10.5454 17.4108 9.83068 16.7037L7.3141 14.1871C6.57661 13.4496 6.57661 12.2484 7.3141 11.5109L8.53058 10.2944L12.3853 14.1491C14.5065 16.2703 14.5065 19.7069 12.3853 21.8281L8.53058 25.6904Z"
                  fill="#F75471"
                />
                <path
                  d="M18.422 13.5485C17.0306 13.5485 15.6393 13.0239 14.5825 11.9595L10.7278 8.10475L11.9443 6.88828C12.6817 6.1508 13.883 6.1508 14.6205 6.88828L17.1371 9.40486C17.8442 10.1119 19.0074 10.1119 19.7145 9.40486L22.2311 6.88828C22.9685 6.1508 24.1698 6.1508 24.9073 6.88828L26.1238 8.10475L22.2691 11.9595C21.2047 13.0087 19.8133 13.5485 18.422 13.5485Z"
                  fill="#F75471"
                />
                <path
                  d="M28.283 25.66L24.4283 21.8053C22.3071 19.6841 22.3071 16.2475 24.4283 14.1263L28.283 10.2716L29.4995 11.4881C30.237 12.2256 30.237 13.4268 29.4995 14.1643L26.9829 16.6809C26.2682 17.3956 26.2682 18.5512 26.9829 19.2583L29.4995 21.7749C30.237 22.5124 30.237 23.7136 29.4995 24.4511L28.283 25.66Z"
                  fill="#F75471"
                />
              </svg>
            ) : (
              <svg
                className="dark:text-white"
                width="182"
                height="36"
                viewBox="0 0 182 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.2993 12.1951C41.535 12.1951 41.5958 12.256 41.6642 12.3472L44.7282 16.4376H44.8347L47.7922 12.37C47.8759 12.2636 48.0051 12.2027 48.1724 12.2027H50.0275C50.2176 12.2027 50.286 12.37 50.1947 12.4765L46.0435 17.6921L50.6661 23.5007C50.7726 23.6528 50.7118 23.7973 50.5141 23.7973H48.6437C48.4765 23.7973 48.3244 23.7364 48.218 23.5844L44.7662 18.9466H44.6598L41.3677 23.5692C41.2385 23.7212 41.094 23.8049 40.9191 23.8049H39.064C38.912 23.8049 38.8283 23.6756 38.9348 23.5312L43.4889 17.7377L39.3834 12.5221C39.2997 12.37 39.3377 12.2027 39.5354 12.2027H41.2993V12.1951Z"
                  fill="white"
                />
                <path
                  d="M59.6529 12.1951C62.1847 12.1951 64.017 14.0275 64.017 16.3464C64.017 18.7337 62.1847 20.5204 59.6529 20.5204H55.9731V23.5007C55.9731 23.6908 55.8894 23.7973 55.7146 23.7973H54.3308C54.1407 23.7973 54.0343 23.6908 54.0343 23.5007V12.4993C54.0343 12.3092 54.1407 12.2027 54.3308 12.2027H59.6529V12.1951ZM59.6529 18.7109C61.2039 18.7109 62.0782 17.7073 62.0782 16.3464C62.0782 15.0082 61.2039 14.0046 59.6529 14.0046H55.9731V18.7109H59.6529Z"
                  fill="white"
                />
                <path
                  d="M68.0845 21.1362C68.8524 21.1362 69.5139 21.7749 69.5139 22.5428C69.5139 23.3107 68.8524 23.9721 68.0845 23.9721C67.3166 23.9721 66.678 23.3107 66.678 22.5428C66.678 21.7749 67.3166 21.1362 68.0845 21.1362Z"
                  fill="white"
                />
                <path
                  d="M82.3476 23.7973C82.1955 23.7973 82.0739 23.7364 81.9827 23.6072L78.1736 18.7945L75.3453 14.9018L75.2388 14.9246L75.3681 18.3763V23.5083C75.3681 23.6984 75.2617 23.8049 75.0488 23.8049H73.7106C73.5434 23.8049 73.4521 23.6984 73.4521 23.5083V12.4993C73.4521 12.3092 73.5358 12.2027 73.7259 12.2027H74.9803C75.1932 12.2027 75.3605 12.2636 75.4669 12.4156L79.5573 17.5248L82.1119 21.0602L82.2184 21.0374L82.0663 17.6084V12.4993C82.0663 12.3092 82.1727 12.2027 82.3628 12.2027H83.7009C83.891 12.2027 83.9746 12.3092 83.9746 12.4993V23.5083C83.9746 23.6984 83.891 23.8049 83.7009 23.8049H82.3476V23.7973Z"
                  fill="white"
                />
                <path
                  d="M96.9073 12.1951C97.0594 12.1951 97.2038 12.3244 97.2038 12.4917V13.7081C97.2038 13.8602 97.0518 13.9818 96.9073 13.9818H90.1787V16.8558H96.3067C96.4968 16.8558 96.6032 16.9622 96.6032 17.1523V18.3687C96.6032 18.5588 96.4968 18.6425 96.3067 18.6425H90.1787V21.9878H97.1202C97.3103 21.9878 97.3939 22.0714 97.3939 22.2463V23.5007C97.3939 23.6908 97.3103 23.7973 97.1202 23.7973H88.5213C88.3312 23.7973 88.2476 23.6908 88.2476 23.5007V12.4993C88.2476 12.3092 88.3312 12.2027 88.5213 12.2027H96.9073V12.1951Z"
                  fill="white"
                />
                <path
                  d="M110.699 12.1951C110.889 12.1951 110.996 12.3016 110.996 12.4917V13.7081C110.996 13.8982 110.889 14.0046 110.699 14.0046H106.761V23.5007C106.761 23.6528 106.654 23.7973 106.464 23.7973H105.126C104.936 23.7973 104.83 23.6908 104.83 23.5007V14.0046H100.891C100.701 14.0046 100.595 13.8982 100.595 13.7081V12.4917C100.595 12.3016 100.701 12.1951 100.891 12.1951H110.699Z"
                  fill="white"
                />
                <path
                  d="M115.664 12.1951C115.854 12.1951 115.96 12.256 116.006 12.408L118.69 21.5392H118.796L121.374 12.408C121.419 12.256 121.526 12.1951 121.67 12.1951H123.099C123.252 12.1951 123.358 12.256 123.396 12.408L126.034 21.5392H126.141L128.802 12.4308C128.847 12.2788 128.954 12.1951 129.098 12.1951H130.672C130.862 12.1951 130.931 12.2788 130.862 12.4689L127.243 23.5388C127.182 23.706 127.053 23.7973 126.878 23.7973H125.114C124.947 23.7973 124.841 23.7136 124.772 23.5236L122.43 15.3732H122.324L120.005 23.5464C119.959 23.7136 119.853 23.8049 119.709 23.8049H117.922C117.732 23.8049 117.603 23.7212 117.542 23.5464L113.9 12.4308C113.839 12.2788 113.9 12.1951 114.09 12.1951H115.664Z"
                  fill="white"
                />
                <path
                  d="M139.742 12.0279C143.103 12.0279 145.726 14.5369 145.726 18.0114C145.726 21.4632 143.11 23.9721 139.742 23.9721C136.382 23.9721 133.759 21.4632 133.759 18.0114C133.759 14.5369 136.374 12.0279 139.742 12.0279ZM135.713 18.0114C135.713 20.3987 137.355 22.1626 139.735 22.1626C142.122 22.1626 143.757 20.3987 143.757 18.0114C143.757 15.6089 142.114 13.8374 139.735 13.8374C137.355 13.8374 135.713 15.6013 135.713 18.0114Z"
                  fill="white"
                />
                <path
                  d="M155.176 12.1951C157.708 12.1951 159.563 14.0275 159.563 16.3464C159.563 17.9658 158.689 19.3267 157.351 20.011L159.29 23.4627C159.396 23.6528 159.29 23.8049 159.054 23.8049H157.503C157.313 23.8049 157.161 23.6528 157.077 23.5083L155.526 20.5052C155.465 20.528 155.359 20.528 155.23 20.528H151.504V23.5083C151.504 23.6984 151.421 23.8049 151.23 23.8049H149.892C149.657 23.8049 149.573 23.6528 149.573 23.5083V12.4993C149.573 12.3092 149.679 12.2027 149.87 12.2027H155.176V12.1951ZM155.176 18.7109C156.727 18.7109 157.625 17.7073 157.625 16.3464C157.625 15.0082 156.727 14.0046 155.176 14.0046H151.497V18.7109H155.176Z"
                  fill="white"
                />
                <path
                  d="M165.243 12.1951C165.433 12.1951 165.539 12.3016 165.539 12.4917V17.6008L171.029 12.4308C171.181 12.2788 171.393 12.1951 171.644 12.1951H173.56C173.75 12.1951 173.834 12.3852 173.69 12.5373L168.58 17.1979L173.963 23.4323C174.115 23.5844 174.024 23.7973 173.796 23.7973H172.093C171.834 23.7973 171.622 23.7136 171.454 23.5236L167.174 18.46L165.532 19.7829V23.5083C165.532 23.6984 165.425 23.8049 165.235 23.8049H163.897C163.707 23.8049 163.6 23.6984 163.6 23.5083V12.4993C163.6 12.3092 163.707 12.2027 163.897 12.2027H165.243V12.1951Z"
                  fill="white"
                />
                <path
                  d="M22.193 29.0737L19.6764 26.5571C18.9617 25.8424 17.8061 25.8424 17.099 26.5571L14.5824 29.0737C13.8449 29.8112 12.6437 29.8112 11.9062 29.0737L10.6897 27.8572L14.5444 24.0025C16.6656 21.8813 20.1022 21.8813 22.2234 24.0025L26.0781 27.8572L24.8616 29.0737C24.1317 29.8112 22.9381 29.8112 22.193 29.0737Z"
                  fill="#F75471"
                />
                <path
                  d="M8.53058 25.6904L7.3141 24.4739C6.57661 23.7364 6.57661 22.5352 7.3141 21.7977L9.83068 19.2811C10.5454 18.5664 10.5454 17.4108 9.83068 16.7037L7.3141 14.1871C6.57661 13.4496 6.57661 12.2484 7.3141 11.5109L8.53058 10.2944L12.3853 14.1491C14.5065 16.2703 14.5065 19.7069 12.3853 21.8281L8.53058 25.6904Z"
                  fill="#F75471"
                />
                <path
                  d="M18.422 13.5485C17.0306 13.5485 15.6393 13.0239 14.5825 11.9595L10.7278 8.10475L11.9443 6.88828C12.6817 6.1508 13.883 6.1508 14.6205 6.88828L17.1371 9.40486C17.8442 10.1119 19.0074 10.1119 19.7145 9.40486L22.2311 6.88828C22.9685 6.1508 24.1698 6.1508 24.9073 6.88828L26.1238 8.10475L22.2691 11.9595C21.2047 13.0087 19.8133 13.5485 18.422 13.5485Z"
                  fill="#F75471"
                />
                <path
                  d="M28.283 25.66L24.4283 21.8053C22.3071 19.6841 22.3071 16.2475 24.4283 14.1263L28.283 10.2716L29.4995 11.4881C30.237 12.2256 30.237 13.4268 29.4995 14.1643L26.9829 16.6809C26.2682 17.3956 26.2682 18.5512 26.9829 19.2583L29.4995 21.7749C30.237 22.5124 30.237 23.7136 29.4995 24.4511L28.283 25.66Z"
                  fill="#F75471"
                />
              </svg>
            )}
            <span className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-500">
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
                    {link.icon ? (
                      <div className="w-5 mr-2 flex justify-center">
                        {link.icon}
                      </div>
                    ) : (
                      ""
                    )}
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
