import { YearSelector } from "./YearSelector";

export function CommitteePageHeader() {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-5xl mb-5 sm:text-4xl">DSCubed Committee</h1>
      <YearSelector />
    </div>
  );
}
