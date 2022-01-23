// import Link from "next/link";
// import Image from "next/image";
import React from "react";

export const Repo = ({ name, link }: RepoProps) => {
  return (
    // <div>
    // <Link href={link}>
    <a
      href={link}
      className="flex text-black dark:text-white bg-white dark:bg-[#323545] w-full p-5 rounded-xl space-x-4 items-center"
      target="_blank"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 0C6.7 0 0 6.7 0 15C0 21.6 4.3 27.2 10.3 29.2C11.1 29.3 11.3 28.9 11.3 28.5V25.9C7.1 26.8 6.2 23.9 6.2 23.9C5.5 22.2 4.5 21.7 4.5 21.7C3.1 20.8 4.6 20.8 4.6 20.8C6.1 20.9 6.9 22.3 6.9 22.3C8.2 24.6 10.4 23.9 11.3 23.5C11.4 22.5 11.8 21.9 12.3 21.5C9 21.1 5.5 19.8 5.5 14.1C5.5 12.5 6.1 11.1 7 10.1C6.8 9.7 6.3 8.2 7.1 6.1C7.1 6.1 8.4 5.7 11.2 7.6C12.4 7.3 13.7 7.1 15 7.1C16.3 7.1 17.6 7.3 18.8 7.6C21.7 5.7 22.9 6.1 22.9 6.1C23.7 8.2 23.2 9.7 23 10.1C24 11.1 24.5 12.5 24.5 14.1C24.5 19.9 21 21.1 17.7 21.5C18.2 22 18.7 22.9 18.7 24.3V28.4C18.7 28.8 19 29.3 19.7 29.1C25.7 27.1 29.9 21.5 29.9 14.9C30 6.7 23.3 0 15 0Z"
          fill="black"
        />
      </svg>

      <div className="w-full">{name}</div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <path
            d="M6.27244 17.7276C5.06329 16.5184 5.06329 14.5526 6.27244 13.3435L9.10087 10.5151L7.75736 9.17156L4.92894 12C2.97732 13.9516 2.97732 17.1194 4.92894 19.0711C6.88055 21.0227 10.0484 21.0227 12 19.0711L14.8284 16.2426L13.4849 14.8991L10.6565 17.7276C9.44735 18.9367 7.48159 18.9367 6.27244 17.7276ZM9.87868 15.5355L15.5355 9.87867L14.1213 8.46445L8.46447 14.1213L9.87868 15.5355ZM12 4.92892L9.17158 7.75735L10.5151 9.10085L13.3435 6.27242C14.5527 5.06327 16.5184 5.06327 17.7276 6.27242C18.9367 7.48158 18.9367 9.44733 17.7276 10.6565L14.8991 13.4849L16.2426 14.8284L19.0711 12C21.0227 10.0484 21.0227 6.88054 19.0711 4.92892C17.1195 2.97731 13.9516 2.97731 12 4.92892Z"
            fill="white"
          />
        </g>
      </svg>
    </a>
    // </Link>
    // </div>
  );
};

export interface RepoProps {
  name: string;
  link: string;
}
