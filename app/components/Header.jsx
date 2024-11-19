import React from "react";
import Link from "next/link";

import { Heading, Button, Img } from "./";

export default function Header({ ...props }) {
  return (
    <Header
      {...props}
      className={`${props.className} flex md:flex-col justiy-between items-center ml-1.5 gap-5 md:ml-0`}
    >
      <Img
        src="img_header_logo.png"
        width={200}
        height={64}
        alt="Logo"
        className="h-[64px] w-[200px] rounded-lg object-contain"
      />
    </Header>
  );
}
