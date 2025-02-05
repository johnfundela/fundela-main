import Image from "next/image";

type Props = {
  divClassName?: string;
  imageClass?: string;
  src: string;
};

export function ImageComponent({ divClassName, src, imageClass }: Props) {
  return (
    <div className={`relative ${divClassName} rounded-2xl`}>
      <Image
        src={`/${src}`}
        fill
        alt={src}
        className={`object-contain ${imageClass} rounded-2xl`}
      ></Image>
    </div>
  );
}
