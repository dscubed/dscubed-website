import Link from "next/link";
import Section from "@/app/components/Section";
import EventGallery from "@/app/components/events/EventGallery";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import EventGallerySkeleton from "../events/EventGallerySkeleton";
import { MotionH2, MotionDiv } from "./MotionDiv";

export default function EventSection() {
  return (
    <Section>
      <MotionH2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-4xl text-center mx-auto mb-5 leading-tight"
      >
        Our Events
      </MotionH2>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Suspense fallback={<EventGallerySkeleton />}>
          <EventGallery range={[0, 3]} />
        </Suspense>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex"
      >
        <Link className="flex gap-2 text-xl text-theme mx-auto" href="/events">
          <span className="my-auto">Browse All Events</span>
          <ArrowRightIcon className="w-6 h-6 my-auto" />
        </Link>
      </MotionDiv>
    </Section>
  );
}
