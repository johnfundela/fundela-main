"use client";

import CommonHero from "@/components/commons/common-hero";

import Image from "next/image";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import CardComponent from "@/components/card-component";
import { blogData } from "@/components/commons/constant";
import { useParams } from "next/navigation";

export default function Blog() {
  const [md, setMd] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getParamInfo();
    // blogData.find(item => item.index === )
  });

  const getParamInfo = async () => {
    readTextFile(`/markdown/${id}.md`);
    const findBlog = blogData.find((item) => item.id == Number(id));
    setTitle(findBlog?.message || "")
    setImage(findBlog?.image.substring(1) || "");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function readTextFile(file: any) {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          const allText = rawFile.responseText;
          setMd(allText);
        }
      }
    };
    rawFile.send(null);
  }

  return (
    <>
      <CommonHero
        background={image}
        title={title}
        message={""}
        showRedirect={false}
      ></CommonHero>
      <div className="2xl:px-20 grid grid-cols-4">
        <div className="col-span-4 2xl:col-span-3 px-4 py-6">
          <CardComponent className="w-full 2xl:w-[90%]  ">
            <div className="flex justify-center">
              <div className=" w-full prose max-w-[90%]">
                <Markdown>{md}</Markdown>
              </div>
            </div>
          </CardComponent>
        </div>
        <div className="col-span-4  2xl:col-span-1">
          {blogData.map((item) => {
            if (item.id != Number(id)) {
              return (
                <a key={item.id} href={`/blog/${item.id}`}>
                  <div className="w-full flex justify-center p-4">
                    <div className="p-4 bg-white border-t-8 border-[#1F2937] text-[##1F2937] w-full">
                      <div className="p-4 font-bold">BLOG</div>
                      <p className="p-4 mb-4 text-3xl font-semibold">
                        {item.message}
                      </p>
                      <div
                        className="h-[350px]"
                        style={{ position: "relative" }}
                      >
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
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
