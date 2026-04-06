"use client";

import { GroupHeading } from "./GroupHeading";
import MemberList from "./MemberList";
import { ProductCommitteeMember, ProductTeams } from "./data/types";

/**
 * Component for rendering members of the Products team, grouped by their specific product sub-team.
 * Expects members to have a `productTeam` field indicating which sub-team they belong to.
 * The `team` prop passed to MemberListCard will be the sub-team prefix (e.g. "C3", "IT") for styling purposes.
 */
interface SubTeamConfig {
  productTeam: ProductTeams;
  name: string; // display heading
  teamPrefix: string; // passed to MemberListCard as `team`
}

const SUB_TEAMS: SubTeamConfig[] = [
  { productTeam: "C3", name: "Connect3", teamPrefix: "C3" },
  { productTeam: "IT Products", name: "IT", teamPrefix: "IT" },
  { productTeam: "AI", name: "AI", teamPrefix: "AI" },
];

export default function ProductsMemberList({
  members,
  inView,
  delay = 0,
}: {
  members: ProductCommitteeMember[];
  inView: boolean;
  delay?: number;
}) {
  const groups = SUB_TEAMS.map((config) => ({
    ...config,
    members: members.filter((m) => m.productTeam === config.productTeam),
  })).filter((g) => g.members.length > 0);

  return (
    <>
      {groups.map((group, i) => (
        <div key={group.productTeam} className="flex flex-col gap-4 mt-4">
          <GroupHeading title={group.name} inView={inView} />
          <MemberList
            team={group.teamPrefix}
            members={group.members}
            inView={inView}
            delay={delay + i * 0.1}
          />
        </div>
      ))}
    </>
  );
}
