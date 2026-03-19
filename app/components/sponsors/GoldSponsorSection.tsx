import Section from "@/app/components/Section";
import { gold } from "@/app/components/sponsors/sponsorData";
import SponsorCard from "@/app/components/sponsors/SponserCard";
import type { Sponsor } from "@/app/components/sponsors/sponsorData";

export default function GoldSponsorSection() {
  return (
    <Section>
      <h3 className="text-2xl text-center">Gold Sponsors</h3>
      <div className="flex justify-center lg:flex-col gap-4">
        {gold.map((item: Sponsor, index) => (
          <SponsorCard
            color="var(--gold)"
            name={item.name}
            category={item.category}
            image={item.image}
            link={item.link}
            filter={item.filter || ""}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
}
