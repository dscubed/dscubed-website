import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import GenericAvatar from "@/app/components/committee/GenericAvatar";

// Use the 'filter' prop to set Tailwind css filters on the image

export default function MemberCard({
  name,
  role,
  image,
  filter = "",
}: {
  name: string;
  role: string;
  image?: string | StaticImageData;
  filter?: string;
}) {
  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-background transition-all duration-300 hover:scale-105 group">
      {image ? (
        <Image
          className={clsx(
            "object-cover w-full h-full absolute inset-0",
            filter
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
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/90 via-black/60 to-black/0" />
      </div>
      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col items-start z-10">
        <span className="uppercase text-blue-400 font-bold text-sm tracking-widest mb-1 drop-shadow-md">
          {role}
        </span>
        <span className="text-white font-semibold text-2xl drop-shadow-md leading-tight">
          {name}
        </span>
      </div>
    </div>
  );
}
