// Use the 'filter' property to set Tailwind css filters on images

import {
  CommitteeData,
  Director,
  ExecMember,
  ExecsDirectorsData,
  Team,
} from "./types";

import execsPhoto from "@/public/people/2026-teams/2026-execs.png";
import committeePhoto from "@/public/people/committee2026.png";

export const executives: ExecMember[] = [
  {
    name: "Jake Paul",
    role: "President",
    image: "/people/2026/jake-paul.png",
  },
  {
    name: "Geoffrey Chen",
    role: "Internal Vice President",
    image: "/people/2026/geoffrey-chen.png",
  },
  {
    name: "Rania Aziz",
    role: "External Vice President",
    image: "/people/2026/rania-aziz.png",
    filter: "w-30 h-30 object-cover",
  },
  {
    name: "Eric He",
    role: "Secretary",
    image: "/people/2026/eric-he.png",
    filter: "w-30 h-30 object-cover",
  },
  {
    name: "Anthea Lee",
    role: "Treasurer",
    image: "/people/2026/anthea-lee.png",
  },
];

export const directors: Director[] = [
  {
    name: "Stanley Zaranski",
    team: "Education",
    image: "/people/2026/stanley-zaranski.png",
  },
  {
    name: "Jiacheng Zheng",
    team: "Events",
    image: "/people/2026/jiacheng-zheng.png",
  },
  {
    name: "Charmaine Yang",
    team: "HR",
    image: "/people/2026/charmaine-yang.png",
  },
  {
    name: "Pavan Dev",
    team: "HR",
    image: "/people/2026/pavan-dev.png",
  },
  {
    name: "Anton Huynh",
    team: "Industry",
    image: "/people/2026/anton-huynh.png",
  },
  {
    name: "Chi Nguyen",
    team: "Marketing",
    image: "/people/2026/chi-nguyen.png",
  },
  {
    name: "Tanat Chanwangsa",
    team: "Products",
    image: "/people/2026/tanat-chanwangsa.png",
  },
  {
    name: "Nathan Luo",
    team: "AI",
    image: "/people/2026/nathan-luo.png",
  },
  {
    name: "Elyse Lee",
    team: "C3",
    image: "/people/2026/elyse-lee.png",
  },
];

export const teams: Team[] = [
  {
    team: "Education",
    image: "/people/2026-teams/2026-education.png",
    members: [
      { name: "Adam Lu", image: "/people/2026/adam-lu.png" },
      { name: "Anhad Singh", image: "/people/2026/anhad-singh.png" },
      { name: "Daniel Nam", image: "/people/2026/daniel-nam.png" },
      { name: "Khan Vattanak", image: "/people/2026/khan-vattanak.png" },
      { name: "Nick Muir", image: "/people/2026/nick-muir.png" },
      { name: "Noah Ryan", image: "/people/2026/noah-ryan.png" },
    ],
  },
  {
    team: "Events",
    image: "/people/2026-teams/2026-events.png",
    members: [
      { name: "Alyssa Lim", image: "/people/2026/alyssa-lim.png" },
      { name: "Anuk Gamage", image: "/people/2026/anuk-gamage.png" },
      { name: "Crystal Pham", image: "/people/2026/crystal-pham.png" },
      { name: "Gianna Li", image: "/people/2026/gianna-li.png" },
      { name: "Jason Lim", image: "/people/2026/jason-lim.png" },
      { name: "Meghan Wuisan", image: "/people/2026/meghan-wuisan.png" },
      { name: "Rachel Chen", image: "/people/2026/rachel-chen.png" },
      { name: "Rajit Khandelwal", image: "/people/2026/rajit-khandelwal.png" },
      { name: "Rudra Tiwari", image: "/people/2026/rudra-tiwari.png" },
      { name: "Tianyu Shen", image: "/people/2026/tianyu-shen.png" },
    ],
  },
  {
    team: "HR",
    image: "/people/2026-teams/2026-hr.png",
    members: [
      { name: "Hyunjae Ha", image: "/people/2026/hyunjae-ha.png" },
      { name: "Sabrina Nguyen", image: "/people/2026/sabrina-nguyen.png" },
      { name: "Taiyo Wang", image: "/people/2026/taiyo-wang.png" },
    ],
  },
  {
    team: "Industry",
    image: "/people/2026-teams/2026-industry.png",
    members: [
      { name: "Angelo Vinluan" },
      { name: "Eliza Zhang", image: "/people/2026/eliza-zhang.png" },
      { name: "Jesselyn Lim", image: "/people/2026/jesselyn-lim.png" },
      { name: "Kalkin Raheja", image: "/people/2026/kalkin-raheja.png" },
      { name: "Luca Xu", image: "/people/2026/luca-xu.png" },
      { name: "Paige Nguyen" },
      { name: "Sam Bajracharya", image: "/people/2026/sam-bajracharya.png" },
      {
        name: "Thiviru Wanninayaka",
        image: "/people/2026/thiviru-wanninayaka.png",
      },
      { name: "Trisha Thakker", image: "/people/2026/trisha-thakker.png" },
    ],
  },
  {
    team: "Marketing",
    image: "/people/2026-teams/2026-marketing.png",
    members: [
      { name: "Andre Kohli", image: "/people/2026/andre-kohli.png" },
      { name: "Jenny Yun", image: "/people/2026/jenny-yun.png" },
      { name: "Max Ivanovic", image: "/people/2026/max-ivanovic.png" },
      { name: "Olivia Wong", image: "/people/2026/olivia-wong.png" },
      { name: "Steven Lu", image: "/people/2026/steven-lu.png" },
    ],
  },
  {
    team: "Products",
    image: "/people/2026-teams/2026-products.png",
    members: [
      {
        name: "Ishan Deshpande",
        image: "/people/2026/ishan-deshpande.png",
        productTeam: "IT Products",
      },
      {
        name: "Nojan Hajjehforoush",
        image: "/people/2026/nojan-hajjehforoush.png",
        productTeam: "IT Products",
      },
      {
        name: "Shreya Rao",
        image: "/people/2026/shreya-rao.png",
        productTeam: "IT Products",
      },
      {
        name: "Thomas Chen",
        image: "/people/2026/thomas-chen.png",
        productTeam: "IT Products",
      },
      {
        name: "Dhruv Verma",
        image: "/people/2026/dhruv-verma.png",
        productTeam: "IT Products",
      },
      {
        name: "George Stergiopoulos",
        image: "/people/2026/george-stergiopoulos.png",
        productTeam: "IT Products",
      },
      {
        name: "Ashton Lu",
        image: "/people/2026/ashton-lu.png",
        productTeam: "AI",
        displayRole: "Engineer",
      },
      {
        name: "Jorvan Low",
        image: "/people/2026/jorvan-low.png",
        productTeam: "AI",
        displayRole: "Engineer",
      },
      {
        name: "Achal Jhawar",
        image: "/people/2026/achal-jhawar.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "Andre Phan",
        image: "/people/2026/andre-phan.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "Emma Xu",
        image: "/people/2026/emma-xu.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "John Ling",
        image: "/people/2026/john-ling.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "Michael Tran",
        image: "/people/2026/michael-tran.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "Nirav Pandey",
        image: "/people/2026/nirav-pandey.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "Nitesh Palai",
        image: "/people/2026/nitesh-palai.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "Peter Nguyen",
        image: "/people/2026/peter-nguyen.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "Rasheed Mohammed",
        image: "/people/2026/rasheed-mohammed.png",
        productTeam: "C3",
        displayRole: "Developer",
      },
      {
        name: "Shahira Jasmine",
        image: "/people/2026/shahira-jasmine.png",
        productTeam: "C3",
        displayRole: "Design",
      },
      {
        name: "Harguan Sehgal",
        image: "/people/2026/harguan-sehgal.png",
        productTeam: "C3",
        displayRole: "Marketing",
      },
      {
        name: "Keyur Gohel",
        image: "/people/2026/keyur-gohel.png",
        productTeam: "C3",
        displayRole: "Partnerships",
      },
      {
        name: "Sri Ram Vishwanath",
        image: "/people/2026/sri-ram-vishwanath.png",
        productTeam: "C3",
        displayRole: "Partnerships",
      },
      {
        name: "Vishesh Manik",
        image: "/people/2026/vishesh-manik.png",
        productTeam: "C3",
        displayRole: "Partnerships",
      },
    ],
  },
];

export const execsDirectors: ExecsDirectorsData = {
  executives,
  directors,
  image: execsPhoto,
};

export const committeeData2026: CommitteeData = {
  year: 2026,
  image: committeePhoto,
  execsDirectors: execsDirectors,
  teams,
};
