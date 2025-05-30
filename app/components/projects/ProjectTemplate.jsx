// components/ProjectTemplate.jsx

import Navbar from "../Navbar";

export default function ProjectTemplate() {
  return (
    <div>
        <Navbar></Navbar>

        <div className="grid grid-cols-2 gap-2 p-5 pl-20 pb-20">
            <div className="mt-40">
                <h1 className="text-[80px] leading-[100%] tracking-[0%] font-akira-expanded font-extrabold text-left mx-auto mb-8 uppercase">
                    Projects Title
                </h1>
                <h2 className="font-akira-expanded font-bold text-[25px] leading-[100%] tracking-[0%] mb-20">
                    Your Subtitle Here
                </h2>
                <p className="font-inter font-normal text-[24px] leading-[100%] tracking-[0%] leading-[32px] ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>

                  <a href="/test" target="_blank" rel="noopener noreferrer">
                    <button className="mt-6 mb-10 bg-white text-black font-[800] text-[25px] leading-[100%] tracking-[0%] font-akira-expanded px-14 py-4 rounded-full w-max block text-left">
                        Dataset
                    </button>
                </a>

            </div>

            <img
                src="events/opengraph-image.jpg"
                className="w-full h-full object-cover"
                />
            <div>

            </div>
        </div>

        <div className="bg-[#2A2A2A] py-12 mt">
            <div className="flex justify-center gap-48 text-white text-[30px] font-akira-expanded font-[800] underline decoration-solid decoration-[1px] underline-offset-[2px]">
                <a href="#report" className="cursor-pointer">Report</a>
                <a href="#documentation" className="cursor-pointer">Documentation</a>
                <a href="#notes" className="cursor-pointer">Notes</a>
            </div>

        </div>

        <div className="px-20 py-16 mt-10">
        <h1
            id="report"
            className="pt-20 -mt-20 font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6 uppercase"
        >
            Report
        </h1>
        <p
            className="font-akira-expanded font-extrabold text-[30px] leading-[100%] tracking-[0%] uppercase mb-20"
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>

        <h1
            id="documentation"
            className="font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6 uppercase"
        >
            Documentation
        </h1>
        <p
            className="font-akira-expanded font-extrabold text-[30px] leading-[100%] tracking-[0%] uppercase mb-20"
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>

        <h1
            id="notes"
            className="font-akira-expanded font-extrabold text-[50px] leading-[100%] tracking-[0%] mb-6 uppercase"
        >
            Notes
        </h1>
        <p
            className="font-akira-expanded font-extrabold text-[30px] leading-[100%] tracking-[0%] uppercase"
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        </div>
        


    </div>
  )
}
