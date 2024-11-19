import React from "react";
import Image from "next/image";

const BASIC_URL = process.env.BASE_PATH || "./";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  isStatic = false,
  width,
  height,
  ...restProps
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return (
    <Image
      className={className}
      src={isStatic ? imgSrc : BASIC_URL + imgSrc}
      alt={alt}
      width={width}
      height={height}
      {...restProps}
      onError={() => {
        setImgSrc("defaultNoData.png");
      }}
    />
  );
};

export { Img };
