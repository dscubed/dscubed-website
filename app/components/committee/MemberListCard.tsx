import clsx from "clsx";
import Image from "next/image";
import GenericAvatar from "@/app/components/committee/GenericAvatar";

interface MemberProps {
  name: string;
  image?: string;
  filter?: string;
  team?: string;
  displayRole?: string | null; // undefined = "Officer", null = team name only, string = custom role
  role?: string; // direct override (used by credits page)
}

/**
 * Card component for displaying a committee member in a list view (e.g. within MemberList or ProductsMemberList).
 * Uses `displayRole` and `team` to compute the role text to display, with the following logic:
 * - If `displayRole` is undefined, show "Team Officer" (e.g. "Marketing Officer")
 * - If `displayRole` is null, show just the team name (e.g. "Marketing")
 * - If `displayRole` is a string, show "Team displayRole" (e.g. "Marketing Lead")
 */
function getDisplayRole(
  team: string | undefined,
  displayRole: string | null | undefined,
): string {
  if (!team) return "";
  if (displayRole === null) return team;
  return `${team} ${displayRole ?? "Officer"}`;
}

export default function MemberListCard({
  name,
  image,
  filter = "",
  team,
  displayRole,
  role,
}: MemberProps) {
  const computedRole = role ?? getDisplayRole(team, displayRole);

  return (
    <div className="flex sm:flex-col items-center gap-4 bg-background rounded-xl p-3 w-full border border-white/5">
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
      <div className="flex flex-col gap-0 truncate sm:text-center">
        <h3 className="text-white text-base sm:text-sm font-medium font-inter truncate">
          {name}
        </h3>
        <p className="text-[#8E9196] text-sm sm:text-xs font-inter truncate">
          {computedRole}
        </p>
      </div>
    </div>
  );
}
