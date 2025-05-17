import Link from "next/link";
import Section from "@/app/components/Section";
import EventGallery from "@/app/components/events/EventGallery";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import EventGallerySkeleton from "../events/EventGallerySkeleton";

export default function EventSection() {
  return (
    <Section>
      <h2 className="text-5xl sm:text-4xl text-center mx-auto mb-6 leading-tight">
        Recent Events
      </h2>

      <div className="flex justify-center py-4">
        <Suspense fallback={<EventGallerySkeleton />}>
          <EventGallery range={[0, 3]} />
        </Suspense>
      </div>

      <div className="text-center mt-2">
        <Link
          className="flex justify-center items-center gap-2 text-3xl font-bold text-white mx-auto hover:underline"
          href="/events"
        >
          <span>Browse All Events</span>
          <ArrowRightIcon className="w-8 h-8" />
        </Link>
      </div>
    </Section>
  );
}
