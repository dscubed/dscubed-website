import clsx from "clsx";
import Image from "next/image";
import GenericAvatar from "@/app/components/committee/GenericAvatar";

interface MemberProps {
  name: string;
  image?: string;
  role: string;
  filter?: string;
}

export default function MemberListItem({
  name,
  image,
  role,
  filter = "",
}: MemberProps) {
  // Horizontal Card
  return (
    <div className="flex items-center gap-4 bg-background rounded-xl p-3 w-full border border-white/5">
      <div className="flex-shrink-0 relative w-16 h-16">
        {image ? (
          <Image
            className={clsx("object-cover rounded-full", filter)}
            src={image}
            fill
            sizes="64px"
            alt={`${name}'s profile picture`}
          />
        ) : (
          <GenericAvatar />
        )}
      </div>
      <div className="flex flex-col gap-0 truncate">
        <h3 className="text-white text-base font-medium font-inter truncate">
          {name}
        </h3>
        <p className="text-[#8E9196] text-sm font-inter truncate">{role}</p>
      </div>
    </div>
  );
}
