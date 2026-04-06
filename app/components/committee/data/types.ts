/**
 * Base configuration for any team.
 * @template TTeam - Specifies the underlying team identifier type.
 */
export interface BaseTeam<TTeam = Teams | null> {
  name?: string; // Optional name field for display purposes, defaults to team name if not provided
  team: TTeam; // if null then "name" should be used to determine team
  image?: string;
}

/**
 * A specialized team containing product members, all grouped under "Products".
 */
export interface ProductTeam extends BaseTeam<"Products"> {
  team: "Products"; // Product teams are all under the "Products" umbrella for directors, but members specify their specific product team in the `productTeam` field
  members: ProductCommitteeMember[];
}

/**
 * A standard, operational team that groups operations committee members.
 */
export interface OperationsTeam extends BaseTeam<Teams | null> {
  members: OperationsCommitteeMember[];
}

/**
 * Represents any valid team structure, either Product-based or Operations-based.
 */
export type Team = ProductTeam | OperationsTeam;

/**
 * Base properties required for any committee member role.
 */
export interface BaseCommitteeMember {
  name: string;
  image?: string;
  filter?: string;
  displayRole?: string | null; // undefined = fallback to "Officer", null = team name only, string = custom role
}

/**
 * Committee member belonging to a standard Operations team.
 */
export type OperationsCommitteeMember = BaseCommitteeMember;

/**
 * Committee member belonging to a Product team.
 */
export interface ProductCommitteeMember extends BaseCommitteeMember {
  productTeam: ProductTeams; // Product team members must explicitly specify which sub-product team they belong to
}

/**
 * Represents any active committee member.
 */
export type CommitteeMember =
  | OperationsCommitteeMember
  | ProductCommitteeMember;

/**
 * A member holding an Executive position (e.g. President, Treasurer).
 */
export interface ExecMember extends BaseCommitteeMember {
  role: ExecRoles;
}

/**
 * A member holding a Director position within any team.
 */
export interface Director extends BaseCommitteeMember {
  team: Teams | ProductTeams | "Products" | null; // if null then "role" should be used to determine role
  role?: string; // Optional role field e.g. "Undergraduate Representative, Project Lead"
}

/** Represents an official executive position title. */
export type ExecRoles =
  | "President"
  | "Vice President" // Split into Internal VP and External VP as of 2025
  | "Internal Vice President"
  | "External Vice President"
  | "Secretary"
  | "Treasurer";

/** Shared list of standard, operational team names. */
export type Teams =
  | "HR"
  | "Education"
  | "Events"
  | "Industry"
  | "Marketing"
  | "Design" // Removed in 2025
  | "IT" // Merged into Product as of 2026
  | "AI @ DSCubed"; // Merged into Product as of 2026

/** Exclusive list of recognized product sub-teams. */
export type ProductTeams = "AI" | "C3" | "IT Products";
