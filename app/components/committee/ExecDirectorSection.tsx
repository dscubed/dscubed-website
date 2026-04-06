"use client";

import { Director, ExecMember, ProductTeams } from "./data/types";
import { FeaturedCardGrid } from "./FeaturedCardGrid";

const PRODUCT_TEAMS: string[] = [
  "Products",
  "AI",
  "C3",
  "IT Products",
] satisfies (ProductTeams | "Products")[];

function isProductDirector(director: Director): boolean {
  return director.team !== null && PRODUCT_TEAMS.includes(director.team);
}

function getRole(director: Director): string {
  if (director.role) {
    return director.role;
  } else if (isProductDirector(director) && director.team !== "Products") {
    return `${director.team} Lead`;
  } else if (director.team == "AI @ DSCubed") {
    return "AI @ DSCubed";
  }
  return `${director.team}`;
}

// ------------------------------------------------------------------
// ExecDirectorSection
// ------------------------------------------------------------------

export default function ExecDirectorSection({
  executives,
  directors,
}: {
  executives: ExecMember[];
  directors: Director[];
}) {
  const operationsDirectors = directors.filter((d) => !isProductDirector(d));
  const productsDirectors = directors.filter((d) => isProductDirector(d));

  return (
    <div className="flex flex-col gap-8">
      <FeaturedCardGrid
        title="EXECUTIVES"
        items={executives}
        layout={{ columns: { default: 5, lg: 3, sm: 2 } }}
      />
      <FeaturedCardGrid
        title="OPERATIONS"
        subtitle="DIRECTORS"
        items={operationsDirectors.map((d) => ({
          name: d.name,
          role: getRole(d),
          image: d.image,
        }))}
        layout={{ columns: { default: 6, lg: 4, md: 3, sm: 2 } }}
      />
      {productsDirectors.length > 0 && (
        <FeaturedCardGrid
          title="PRODUCTS"
          subtitle="DIRECTORS & LEADS"
          items={productsDirectors.map((d) => ({
            name: d.name,
            role: getRole(d),
            image: d.image,
          }))}
          layout={{ columns: { default: 6, lg: 4, md: 3, sm: 2 } }}
        />
      )}
    </div>
  );
}
