import { YearSelector } from "./YearSelector";

export function CommitteePageHeader() {
  return (
    <div className="flex sm:flex-col items-center sm:items-start gap-6 sm:gap-2">
      <h1 className="text-4xl sm:text-2xl font-medium text-white">
        DSCubed Committee
      </h1>
      <YearSelector />
    </div>
  );
}
