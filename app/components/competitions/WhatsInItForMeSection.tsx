export default function WhatsInItForMeSection() {
  return (
    <section className="flex flex-col items-center text-center px-5 py-10 max-w-screen-xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">WHY THIS IS FOR YOU</h1>
      <p className="text-lg font-medium pb-12">
        Gain practical experience and career-boosting opportunities
      </p>

      {/* Features */}
      <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-center gap-x-20 gap-y-10 text-left">
        {/* Item 1 */}
        <div className="flex flex-col">
          <img
            src="/competitions/ArtificialIntelligence.svg"
            alt="ML applications"
            className="w-16 h-16 mb-4 saturate-0 dark:invert"
          />
          <p className="text-lg max-w-[20rem] leading-relaxed">
            Gain hands-on experience with real-world ML applications
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col">
          <img
            src="/competitions/Teamwork.svg"
            alt="Teamwork"
            className="w-16 h-16 mb-4 saturate-0 dark:invert"
          />
          <p className="text-lg max-w-[20rem] leading-relaxed">
            Build teamwork and problem-solving through collaboration
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col">
          <img
            src="/competitions/Project.svg"
            alt="Project portfolio"
            className="w-16 h-16 mb-4 saturate-0 dark:invert"
          />
          <p className="text-lg max-w-[20rem] leading-relaxed">
            Add a unique, data-driven project to your portfolio
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col">
          <img
            src="/competitions/Diploma.svg"
            alt="Certificate"
            className="w-16 h-16 mb-4 saturate-0 dark:invert"
          />
          <p className="text-lg max-w-[20rem] leading-relaxed">
            Stand out to recruiters with a verified certificate and practical
            experience
          </p>
        </div>
      </div>
    </section>
  );
}
