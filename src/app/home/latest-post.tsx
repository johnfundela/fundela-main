"use client";

import CarouselComponent from "@/components/carousel-component";
import { blogData } from "@/components/commons/constant";
import Image from "next/image";

type ProgramType = {
  id: number;
  image: string;
  tags: string[];
  message: string;
  name: string;
  avatar: string;
  date: string;
};

const LatestPost = () => {
  return (
    <div className="p-6 pt-20 pb-20">
      <div className="flex-col  mb-6">
        <span className="text-3xl font-semibold" style={{ color: "#1F2937" }}>Latest Post</span>
      </div>
      <CarouselComponent
        data={blogData}
        template={(item: ProgramType) => (
          <a href={`/blog/${item.id}`}>
            <div className="w-full flex justify-center">
              <div className="p-4 bg-white border-t-8 border-[##1F2937] text-[##1F2937] md:w-10/12">
                <div className="p-4 font-bold">BLOG</div>
                <p className="p-4 mb-4 text-3xl font-semibold">
                  {item.message}
                </p>
                <div className="h-[350px]" style={{ position: "relative" }}>
                  <Image
                    src={item.image}
                    alt={item.image}
                    fill
                    style={{ objectFit: "cover" }}
                  ></Image>
                </div>
              </div>
            </div>
          </a>
        )}
      ></CarouselComponent>
    </div>
  );
};

export default LatestPost;
