import Section from "@/app/components/Section";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function WhatWeDoSection() {
  return (
    <Section className="!mt-8">
      <Link
        className="flex items-center justify-between relative py-6 px-8 border-2 border-border text-xl xs:text-lg rounded-3xl z-10 bg-background-secondary mb-32 sm:mb-16 w-full hover:bg-btn-background transition-colors"
        href="/visualiser"
      >
        <span>Explore word embeddings visualiser</span>
        <ArrowRightIcon className="w-7 h-7 xs:w-6 xs:h-6 stroke-[0.2]" />
      </Link>

      <h2 className="text-5xl sm:text-4xl">What We Do</h2>

      <div className="grid grid-cols-4 gap-8 lg:grid-cols-2 lg:gap-y-16 xs:grid-cols-1">
        <div className="space-y-4">
          <svg className="w-auto h-16" width="80" height="77" viewBox="0 0 80 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.35" d="M56.6668 25.6724H50.0002V9.83903H30.0002V25.6724H23.3335V3.17236H56.6668V25.6724Z" fill="black"/>
            <path opacity="0.35" d="M80 18.1851H0V76.4934H80V18.1851Z" fill="black"/>
            <path d="M56.6668 23.1724H50.0002V7.33903H30.0002V23.1724H23.3335V0.672363H56.6668V23.1724Z" fill="#0037FF"/>
            <path d="M80 14.8516H0V73.1599H80V14.8516Z" fill="#0075FF"/>
            <path opacity="0.35" d="M80 42.339L40 51.5057L0 42.339V18.1724H80V42.339Z" fill="black"/>
            <path d="M80 39.006L40 48.1727L0 39.006V14.8394H80V39.006Z" fill="#52AFFF"/>
            <path opacity="0.35" d="M45.8332 44.8335H34.1665V56.5002H45.8332V44.8335Z" fill="black"/>
            <path d="M45.8332 42.3335H34.1665V54.0002H45.8332V42.3335Z" fill="#A4E2F1"/>
          </svg>

          <h3 className="text-lg">Industry Opportunities</h3>
          <p className="text-lg text-text-secondary">
            Kick-start your career in data science through our industry opportunities! We regularly host networking events with industry leaders and skill-building workshops. Members also gain early insights into internships and exclusive job listings through our newsletter.
          </p>
        </div>

        <div className="space-y-4">
          <svg className="w-auto h-16" width="70" height="74" viewBox="0 0 70 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.35" d="M70 0H0V70H70V0Z" fill="#FF1200"/>
            <path d="M70 6.6665H0V69.9998H70V6.6665Z" fill="#B730E1"/>
            <path d="M70 0H0V15H70V0Z" fill="#0075FF"/>
            <path opacity="0.35" d="M70 15H0V18.3333H70V15Z" fill="black"/>
            <path opacity="0.35" d="M70 70H0V73.3333H70V70Z" fill="black"/>
            <path opacity="0.35" d="M23.4075 41.6384L12.2233 45.9384L23.4075 50.2384V56.0834L5 48.7942V43.0834L23.4075 35.7942V41.6384ZM37.7217 28.9067H43.6025L32.2483 63.0034H26.4033L37.7217 28.9067ZM46.5925 41.6384V35.7934L65 43.0826V48.7934L46.5925 56.0834V50.2384L57.7792 45.9384L46.5925 41.6384Z" fill="black"/>
            <path d="M23.4075 38.3049L12.2233 42.6049L23.4075 46.9049V52.7499L5 45.4607V39.7499L23.4075 32.4607V38.3049ZM37.7217 25.5732H43.6025L32.2483 59.6699H26.4033L37.7217 25.5732ZM46.5925 38.3049V32.4599L65 39.7491V45.4599L46.5925 52.7499V46.9049L57.7792 42.6049L46.5925 38.3049Z" fill="#F6A3FF"/>
            <path opacity="0.35" d="M9.99984 12.5002C11.8408 12.5002 13.3332 11.0078 13.3332 9.16683C13.3332 7.32588 11.8408 5.8335 9.99984 5.8335C8.15889 5.8335 6.6665 7.32588 6.6665 9.16683C6.6665 11.0078 8.15889 12.5002 9.99984 12.5002Z" fill="black"/>
            <path opacity="0.35" d="M21.6668 12.5002C23.5078 12.5002 25.0002 11.0078 25.0002 9.16683C25.0002 7.32588 23.5078 5.8335 21.6668 5.8335C19.8259 5.8335 18.3335 7.32588 18.3335 9.16683C18.3335 11.0078 19.8259 12.5002 21.6668 12.5002Z" fill="black"/>
            <path d="M9.99984 10.8332C11.8408 10.8332 13.3332 9.34079 13.3332 7.49984C13.3332 5.65889 11.8408 4.1665 9.99984 4.1665C8.15889 4.1665 6.6665 5.65889 6.6665 7.49984C6.6665 9.34079 8.15889 10.8332 9.99984 10.8332Z" fill="#A4E2F1"/>
            <path d="M21.6668 10.8332C23.5078 10.8332 25.0002 9.34079 25.0002 7.49984C25.0002 5.65889 23.5078 4.1665 21.6668 4.1665C19.8259 4.1665 18.3335 5.65889 18.3335 7.49984C18.3335 9.34079 19.8259 10.8332 21.6668 10.8332Z" fill="#A4E2F1"/>
          </svg>

          <h3 className="text-lg">Technical Workshops</h3>
          <p className="text-lg text-text-secondary">
            Through hands-on sessions in Python, data analysis, ML, and AI, DSCubed members gain practical skills, grow in confidence, and connect with peers in a supportive, collaborative learning environment.
          </p>
        </div>

        <div className="space-y-4">
          <svg className="w-auto h-16" width="88" height="73" viewBox="0 0 88 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.35" d="M72.3335 31.1665C77.8563 31.1665 82.3335 26.6894 82.3335 21.1665C82.3335 15.6437 77.8563 11.1665 72.3335 11.1665C66.8106 11.1665 62.3335 15.6437 62.3335 21.1665C62.3335 26.6894 66.8106 31.1665 72.3335 31.1665Z" fill="black"/>
            <path d="M72.3335 28.6665C77.8563 28.6665 82.3335 24.1894 82.3335 18.6665C82.3335 13.1437 77.8563 8.6665 72.3335 8.6665C66.8106 8.6665 62.3335 13.1437 62.3335 18.6665C62.3335 24.1894 66.8106 28.6665 72.3335 28.6665Z" fill="#FFC1BF"/>
            <path d="M87.3335 69.4998H57.3335V46.1665C57.3335 37.8823 64.0493 31.1665 72.3335 31.1665C80.6177 31.1665 87.3335 37.8823 87.3335 46.1665V69.4998Z" fill="#0037FF"/>
            <path opacity="0.35" d="M87.3332 69.5H60.6665V72.8333H87.3332V69.5Z" fill="black"/>
            <path opacity="0.35" d="M15.6665 31.1665C21.1894 31.1665 25.6665 26.6894 25.6665 21.1665C25.6665 15.6437 21.1894 11.1665 15.6665 11.1665C10.1437 11.1665 5.6665 15.6437 5.6665 21.1665C5.6665 26.6894 10.1437 31.1665 15.6665 31.1665Z" fill="black"/>
            <path d="M15.6665 28.6665C21.1894 28.6665 25.6665 24.1894 25.6665 18.6665C25.6665 13.1437 21.1894 8.6665 15.6665 8.6665C10.1437 8.6665 5.6665 13.1437 5.6665 18.6665C5.6665 24.1894 10.1437 28.6665 15.6665 28.6665Z" fill="#FFC1BF"/>
            <path d="M30.6665 69.4998H0.666504V46.1665C0.666504 37.8823 7.38234 31.1665 15.6665 31.1665C23.9507 31.1665 30.6665 37.8823 30.6665 46.1665V69.4998Z" fill="#0037FF"/>
            <path opacity="0.35" d="M44.0002 26.1668C50.4435 26.1668 55.6668 20.9435 55.6668 14.5002C55.6668 8.05684 50.4435 2.8335 44.0002 2.8335C37.5568 2.8335 32.3335 8.05684 32.3335 14.5002C32.3335 20.9435 37.5568 26.1668 44.0002 26.1668Z" fill="black"/>
            <path d="M44.0002 23.6668C50.4435 23.6668 55.6668 18.4435 55.6668 12.0002C55.6668 5.55684 50.4435 0.333496 44.0002 0.333496C37.5568 0.333496 32.3335 5.55684 32.3335 12.0002C32.3335 18.4435 37.5568 23.6668 44.0002 23.6668Z" fill="#FFC1BF"/>
            <path d="M60.6668 69.4998H27.3335V42.8082C27.3335 33.6173 34.7952 26.1665 44.0002 26.1665C53.2052 26.1665 60.6668 33.6173 60.6668 42.8082V69.4998Z" fill="#52AFFF"/>
            <path opacity="0.35" d="M60.6668 69.5H27.3335V72.8333H60.6668V69.5Z" fill="black"/>
            <path opacity="0.35" d="M27.3332 69.5H0.666504V72.8333H27.3332V69.5Z" fill="black"/>
          </svg>

          <h3 className="text-lg">Student Networking</h3>
          <p className="text-lg text-text-secondary">
            DSCubed connects passionate students in Data Science and AI through social events, workshops, and competitions, fostering a supportive community that builds valuable connections with peers and industry professionals.
          </p>
        </div>

        <div className="space-y-4">
          <svg className="w-auto h-16" width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.35" d="M61.0706 95.2206L64.1665 82.8331L77.2623 82.1123L48.929 47.1123L32.7373 60.2206L61.0706 95.2206Z" fill="black"/>
            <path opacity="0.35" d="M18.929 95.2206L15.8331 82.8331L2.7373 82.1123L31.0706 47.1123L47.2623 60.2206L18.929 95.2206Z" fill="black"/>
            <path d="M61.0706 91.8876L64.1665 79.5001L77.2623 78.7793L48.929 43.7793L32.7373 56.8876L61.0706 91.8876Z" fill="#0075FF"/>
            <path d="M18.929 91.8876L15.8331 79.5001L2.7373 78.7793L31.0706 43.7793L47.2623 56.8876L18.929 91.8876Z" fill="#0075FF"/>
            <path opacity="0.35" d="M80 43.6665L72.2058 52.299L74.645 63.6715L63.57 67.2365L60.005 78.3115L48.6325 75.8723L40 83.6665L31.3675 75.8723L19.995 78.3115L16.43 67.2365L5.355 63.6715L7.79417 52.299L0 43.6665L8.47167 34.3573L6.0325 22.984L16.43 20.0965L19.995 9.0215L31.3675 11.4607L40 3.6665L48.6325 11.4607L60.005 9.0215L63.57 20.0965L73.495 22.5115L71.055 33.884L80 43.6665Z" fill="black"/>
            <path d="M80 40.3335L72.2058 48.966L74.645 60.3385L63.57 63.9035L60.005 74.9785L48.6325 72.5393L40 80.3335L31.3675 72.5393L19.995 74.9785L16.43 63.9035L5.355 60.3385L7.79417 48.966L0 40.3335L7.79417 31.701L5.355 20.3285L16.43 16.7635L19.995 5.6885L31.3675 8.12766L40 0.333496L48.6325 8.12766L60.005 5.6885L63.57 16.7635L74.645 20.3285L72.2058 31.701L80 40.3335Z" fill="#FFA400"/>
            <path opacity="0.35" d="M40 71.1665C55.1878 71.1665 67.5 58.8543 67.5 43.6665C67.5 28.4787 55.1878 16.1665 40 16.1665C24.8122 16.1665 12.5 28.4787 12.5 43.6665C12.5 58.8543 24.8122 71.1665 40 71.1665Z" fill="black"/>
            <path d="M40 67.8335C55.1878 67.8335 67.5 55.5213 67.5 40.3335C67.5 25.1457 55.1878 12.8335 40 12.8335C24.8122 12.8335 12.5 25.1457 12.5 40.3335C12.5 55.5213 24.8122 67.8335 40 67.8335Z" fill="#FFC400"/>
            <path opacity="0.35" d="M36.6743 37.9933L29.1826 40.815V32.6467L44.4668 27H45.0026V60.3333H36.6743V37.9933Z" fill="black"/>
            <path d="M36.6743 34.6598L29.1826 37.4815V29.3132L44.4668 23.6665H45.0026V56.9998H36.6743V34.6598Z" fill="#FFEC76"/>
          </svg>

          <h3 className="text-lg">Datathons</h3>
          <p className="text-lg text-text-secondary">
            We support friendly competition at DSCubed by hosting various Datathons throughout the year, including our semesterly flagship Kaggle Competition, and annual Inter-uni Datathon in collaboration with other Australian Universities.
          </p>
        </div>
      </div>
    </Section>
  );
}
