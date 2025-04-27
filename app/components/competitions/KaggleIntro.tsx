export default function KaggleIntro() {
  return (
    <div className="flex flex-row md:flex-col px-5 max-w-screen-xl mx-auto gap-x-8 gap-y-8">
      {/* Left Text */}
      <div className="flex flex-col w-1/2 md:w-full justify-center">
        <h1 className="flex items-center text-3xl font-bold mb-4">
          WHAT’S&nbsp;
          <img
            src="/competitions/KaggleLogo.svg"
            alt="Kaggle Logo"
            className="ml-1 h-8 inline-block align-middle translate-y-[2px]"
          />
        </h1>

        <p className="text-lg leading-relaxed">
          Kaggle is the world’s leading platform for data science and machine
          learning. It hosts real-world datasets, challenges and competitions
          where individuals and teams build solutions to complex problems. For
          our flagship competition, we source Kaggle datasets to provide you
          with practical, industry-relevant experience.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex flex-col w-1/2 md:w-full justify-center">
        <img
          src={'/competitions/KagglePicture.jpg'}
          className="rounded-lg shadow"
        ></img>
      </div>
    </div>
  );
}
