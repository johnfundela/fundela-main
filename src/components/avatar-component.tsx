import Image from "next/image";

type Props = {
  className?: string;
  src: string;
  size?: number;
};

const AvatarComponent = ({ className, size, src }: Props) => {
  return (
    <>
      <Image
        height={size ? size : 20}
        width={size ? size : 20}
        src={src}
        style={{objectFit: "contain"}}
        className={`${className} rounded-full`}
        alt="avatar"
      ></Image>
    </>
  );
};

export default AvatarComponent;
