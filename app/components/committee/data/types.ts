export interface BaseTeam {
  name?: string; // Optional name field for display purposes, defaults to team name if not provided
  team: Teams | ProductTeams | null; // if null then "name" should be used to determine team
  image?: string;
}

export interface Team extends BaseTeam {
  members: CommitteeMember[];
}

export interface CommitteeMember {
  name: string;
  image?: string;
  filter?: string;
  productTeam?: ProductTeams; // Only for Product team members, indicates which sub-team they belong to
  productRole?: C3Roles; // Only for C3 members, indicates their specific role
}

export interface ExecMember extends CommitteeMember {
  role: ExecRoles;
}

export interface Director extends CommitteeMember {
  team: Teams | ProductTeams | null; // if null then "role" should be used to determine role
  role?: string; // Optional role field e.g. "Undergraduate Representative, Project Lead"
}

export type ExecRoles =
  | "President"
  | "Vice President" // Split into Internal VP and External VP as of 2025
  | "Internal Vice President"
  | "External Vice President"
  | "Secretary"
  | "Treasurer";

export type Teams =
  | "HR"
  | "Education"
  | "Events"
  | "Industry"
  | "Marketing"
  | "Design" // Removed in 2025
  | "IT" // Merged into Product as of 2026
  | "AI @ DSCubed" // Merged into Product as of 2026
  | "Products"; // New team as of 2026, combining AI, C3 and IT

export type ProductTeams = "AI" | "C3" | "IT Products";

export type C3Roles = "Partnerships" | "Marketing" | "Design" | "Developer";
