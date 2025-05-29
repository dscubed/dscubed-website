"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Section from "@/app/components/Section";
import FlipNumbers from "react-flip-numbers";
import membersImage from "@/public/home/fruits.jpg";
import degreesImage from "@/public/home/degree.jpg";
import eventsImage from "@/public/home/time.jpg";
import workshopsImage from "@/public/home/books.jpg";

// Statistics (currently taken from old AboutSection)
const stats = [
  {
    id: "members",
    image: membersImage,
    number: 400,
    title: "Active Members",
    description:
      "As a prominent club at The University of Melbourne, with more than 400 members, we cater to diverse interests with events tailored for data hungry people like you.",
  },
  {
    id: "degrees",
    image: degreesImage,
    number: 7,
    title: "Degrees",
    description:
      "Our vibrant community comprises members from seven diverse majors—connect with individuals across various academic realms and broaden your horizons.",
  },
  {
    id: "events",
    image: eventsImage,
    number: 48,
    title: "Planned Events",
    description:
      "Embark on an exciting journey with our lineup of 48 planned events, ranging from competitions to careers night—join us to learn, connect, and forge new friendships.",
  },
  {
    id: "workshops",
    image: workshopsImage,
    number: 10,
    title: "Workshop Sessions",
    description:
      "Data science can be tough, but we are here to help. Join our ten student-lead workshops this year covering R, statistics, probability, and more.",
  },
];

export default function StatsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStatRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Element is considered visible when 60% visible
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.index);
          setActiveIndex(index);
        }
      });
    }, options);

    const statElements = document.querySelectorAll(".stat-block");
    statElements.forEach((statEl) => {
      if (observerRef.current) {
        observerRef.current.observe(statEl);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const formatNumber = (num: number) => {
    if (num < 10) {
      return `00${num}`;
    }
    if (num < 100) {
      return `0${num}`;
    }
    return `${num}`;
  };

  return (
    <Section>
      <div className="grid grid-cols-[1fr,1fr] lg:grid-cols-1 lg:gap-20 sm:gap-10">
        <div>
          <div className="sticky max-w-sm sm:max-w-none top-[calc(102.55px+20px)]">
            {/* <h2 className="text-5xl sm:text-4xl !leading-tight mb-10">
              Club Statistics
            </h2> */}
            <div className="flex flex-col items-center">
              <FlipNumbers
                height={60}
                width={40}
                color="var(--color-text-primary)"
                background="var(--color-background-secondary)"
                play
                perspective={500}
                duration={2}
                numbers={formatNumber(stats[activeIndex].number)}
              />
              <h3 className="text-2xl mt-6">{stats[activeIndex].title}</h3>
              <p className="text-text-secondary text-xl leading-relaxed mt-4">
                {stats[activeIndex].description}
                {/* We can alternatively use a general description on the left side
                and more specific text for the right side - up to marketing */}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-20 sm:gap-10 max-w-xl lg:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col gap-4 rounded-md stat-block"
              data-index={index}
              ref={index === activeIndex ? activeStatRef : null}
            >
              <Image
                className="rounded-2xl object-cover w-full aspect-video"
                src={stat.image}
                alt=""
              />
              <h3 className="text-4xl mt-2">{formatNumber(stat.number)}</h3>
              <h4 className="text-xl">{stat.title}</h4>
              <p className="text-xl lg:text-lg leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
