"use client";
import Splide from "@splidejs/splide";
import { Intersection } from "@splidejs/splide-extension-intersection";
import { useEffectOnce } from "@/app/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "@splidejs/splide/css/core";
import data from "@/app/components/home/galleryData";

export default function GallerySlides() {
  useEffectOnce(() => {
    var splide = new Splide(".splide", {
      type: "loop",
      padding: "40px",
      gap: "10px",
      interval: 4000,
      autoplay: "pause",
      intersection: {
        inView: {
          autoplay: true,
        },
        outView: {
          autoplay: false,
        },
      },
      arrows: true,
    });
    splide.mount({ Intersection });
  }, []);

  return (
    <div className="splide cursor-grab" role="group" aria-label="Gallery carousel">
      <div className="splide__track rounded-md">
        <ul className="splide__list">
          {data.map((item, index) => (
            <li className="splide__slide" key={index}>
              <Image
                className="rounded-2xl object-cover w-full aspect-video sm:aspect-[4/3] xs:aspect-[3/4]"
                src={item.src}
                width={640}
                height={360}
                alt={item.description}
              ></Image>
            </li>
          ))}
        </ul>
      </div>
      <div className="splide__arrows flex justify-center mt-6 gap-4">
        <button className="splide__arrow splide__arrow--prev flex w-12 h-12 rounded-full text-text-secondary hover:text-text-primary transition">
          <ChevronLeftIcon className="m-auto w-8"></ChevronLeftIcon>
        </button>
        <button className="splide__arrow splide__arrow--next flex w-12 h-12 rounded-full text-text-secondary hover:text-text-primary transition">
          <ChevronRightIcon className="m-auto w-8"></ChevronRightIcon>
        </button>
      </div>
    </div>
  );
}
