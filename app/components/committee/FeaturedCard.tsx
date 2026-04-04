import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import GenericAvatar from "@/app/components/committee/GenericAvatar";
import { ExecMember } from "./data/types";

// Use the 'filter' prop to set Tailwind css filters on the image

// if role is External Vice President or Internal Vice President, split into two lines for better display
function splitLine(role: string): boolean {
  if (role == "External Vice President" || role == "Internal Vice President") {
    return true;
  }
  return false;
}

export default function FeaturedCard({
  name,
  role,
  image,
  filter = "",
  className = "",
}: {
  name: string;
  role: string;
  image?: string | StaticImageData;
  filter?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-lg bg-background transition-all duration-300 hover:scale-105 group",
        className,
      )}
    >
      {image ? (
        <Image
          className={clsx(
            "object-cover w-full h-full absolute inset-0",
            filter,
          )}
          src={image}
          fill
          alt={`${name}'s profile picture`}
          priority={true}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <GenericAvatar className="w-32 h-32" />
        </div>
      )}
      {/* Stronger, taller gradient overlay */}
      <div className="absolute inset-0 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black/70 via-black/30 to-black/0" />
      </div>
      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-3 flex flex-col items-start z-10">
        <span className="uppercase text-accent font-bold text-base lg:text-sm sm:text-xs tracking-wide mb-1 drop-shadow-md">
          {splitLine(role) ? (
            <>
              {role.split(" ")[0]} <br /> {role.split(" ")[1]}{" "}
              {role.split(" ")[2]}
            </>
          ) : (
            role
          )}
        </span>
        <span className="text-white text-xl lg:text-lg sm:text-base drop-shadow-md leading-tight tracking-wide">
          {name}
        </span>
      </div>
    </div>
  );
}
