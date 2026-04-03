import { YearSelector } from "./YearSelector";

export function CommitteePageHeader() {
  return (
    <div className="flex items-center gap-6">
      <h1 className="text-[40px] font-medium text-white">DSCubed Committee</h1>
      <YearSelector />
    </div>
  );
}
