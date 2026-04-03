// Use the 'filter' property to set Tailwind css filters on images

import { Director, ExecMember, Team } from "./types";

export const executives: ExecMember[] = [
  {
    name: "Jake Paul",
    role: "President",
    image: "/people/2025/jake-paul.png",
  },
  {
    name: "Geoffrey Chen",
    role: "Internal Vice President",
    image: "/people/2025/geoffrey-chen.png",
  },
  {
    name: "Rania Aziz",
    role: "External Vice President",
    image: "/people/2025/rania-aziz.png",
    filter: "w-30 h-30 object-cover",
  },
  {
    name: "Eric He",
    role: "Secretary",
    image: "/people/2025/eric-he.png",
    filter: "w-30 h-30 object-cover",
  },
  {
    name: "Anthea Lee",
    role: "Treasurer",
    image: "/people/2025/anthea-lee.png",
  },
];

export const directors: Director[] = [
  {
    name: "Stanley Zaranski",
    team: "Education",
    image: "/people/2025/stanley-zaranski.png",
  },
  {
    name: "Jiacheng Zheng",
    team: "Events",
    image: "/people/2025/jiacheng-zheng.png",
  },
  {
    name: "Charmaine Yang",
    team: "Human Resources",
    image: "/people/2025/charmaine-yang.png",
  },
  {
    name: "Pavan Dev",
    team: "Human Resources",
    image: "/people/2025/pavan-dev.png",
  },
  {
    name: "Anton Huynh",
    team: "Industry",
    image: "/people/2025/anton-huynh.png",
  },
  {
    name: "Chi Nguyen",
    team: "Marketing",
    image: "/people/2025/chi-nguyen.png",
  },
  {
    name: "Tanat Chanwangsa",
    team: "Products",
    image: "/people/2025/tanat-chanwangsa.png",
  },
  {
    name: "Nathan Luo",
    team: "AI",
    image: "/people/2025/nathan-luo.png",
  },
  {
    name: "Elyse Lee",
    team: "Connect3",
    image: "/people/2025/elyse-lee.png",
  },
];

export const teams: Team[] = [
  {
    team: "Education",
    image: "/people/2025-teams/Education-Team.JPG",
    members: [
      { name: "Adam Lu", image: "/people/2025/adam-lu.png" },
      { name: "Anhad Singh", image: "/people/2025/anhad-singh.png" },
      { name: "Daniel Nam", image: "/people/2025/daniel-nam.png" },
      { name: "Khan Vattanak", image: "/people/2025/khan-vattanak.png" },
      { name: "Nick Muir", image: "/people/2025/nick-muir.png" },
      { name: "Noah Ryan", image: "/people/2025/noah-ryan.png" },
    ],
  },
  {
    team: "Events",
    image: "/people/2025-teams/Events-Team.JPG",
    members: [
      { name: "Alyssa Lim", image: "/people/2025/alyssa-lim.png" },
      { name: "Anuk Gamage", image: "/people/2025/anuk-gamage.png" },
      { name: "Crystal Pham", image: "/people/2025/crystal-pham.png" },
      { name: "Gianna Li", image: "/people/2025/gianna-li.png" },
      { name: "Jason Lim", image: "/people/2025/jason-lim.png" },
      { name: "Meghan Wuisan", image: "/people/2025/meghan-wuisan.png" },
      { name: "Rachel Chen", image: "/people/2025/rachel-chen.png" },
      { name: "Rajit Khandelwal", image: "/people/2025/rajit-khandelwal.png" },
      { name: "Rudra Tiwari", image: "/people/2025/rudra-tiwari.png" },
      { name: "Tianyu Shen", image: "/people/2025/tianyu-shen.png" },
    ],
  },
  {
    team: "Human Resources",
    image: "/people/2025-teams/HR-Team.png",
    members: [
      { name: "Hyunjae Ha", image: "/people/2025/hyunjae-ha.png" },
      { name: "Sabrina Nguyen", image: "/people/2025/sabrina-nguyen.png" },
      { name: "Taiyo Wang", image: "/people/2025/taiyo-wang.png" },
    ],
  },
  {
    team: "Industry",
    image: "/people/2025-teams/Industry-Team.JPG",
    members: [
      { name: "Angelo Vinluan", image: "/people/2025/angelo-vinluan.png" },
      { name: "Eliza Zhang", image: "/people/2025/eliza-zhang.png" },
      { name: "Jesselyn Lim", image: "/people/2025/jesselyn-lim.png" },
      { name: "Kalkin Raheja", image: "/people/2025/kalkin-raheja.png" },
      { name: "Luca Xu", image: "/people/2025/luca-xu.png" },
      { name: "Paige Nguyen", image: "/people/2025/paige-nguyen.png" },
      { name: "Sam Bajracharya", image: "/people/2025/sam-bajracharya.png" },
      {
        name: "Thiviru Wanninayaka",
        image: "/people/2025/thiviru-wanninayaka.png",
      },
      { name: "Trisha Thakker", image: "/people/2025/trisha-thakker.png" },
    ],
  },
  {
    team: "Marketing",
    image: "/people/2025-teams/Marketing-Team.png",
    members: [
      { name: "Andre Kohli", image: "/people/2025/andre-kohli.png" },
      { name: "Jenny Yun", image: "/people/2025/jenny-yun.png" },
      { name: "Max Ivanovic", image: "/people/2025/max-ivanovic.png" },
      { name: "Olivia Wong", image: "/people/2025/olivia-wong.png" },
      { name: "Steven Lu", image: "/people/2025/steven-lu.png" },
    ],
  },
  {
    team: "Products",
    image: "/people/2025-teams/Product-Team.png",
    members: [
      {
        name: "Ishan Deshpande",
        image: "/people/2025/ishan-deshpande.png",
        productTeam: "IT",
      },
      {
        name: "Nojan Hajjehforoush",
        image: "/people/2025/nojan-hajjehforoush.png",
        productTeam: "IT",
      },
      {
        name: "Shreya Rao",
        image: "/people/2025/shreya-rao.png",
        productTeam: "IT",
      },
      {
        name: "Thomas Chen",
        image: "/people/2025/thomas-chen.png",
        productTeam: "IT",
      },
      {
        name: "Dhruv Verma",
        image: "/people/2025/dhruv-verma.png",
        productTeam: "IT",
      },
      {
        name: "George Stergiopoulos",
        image: "/people/2025/george-stergiopoulos.png",
        productTeam: "IT",
      },
      {
        name: "Ashton Lu",
        image: "/people/2025/ashton-lu.png",
        productTeam: "AI",
      },
      {
        name: "Jorvan Low",
        image: "/people/2025/jorvan-low.png",
        productTeam: "AI",
      },
      {
        name: "Achal Jhawar",
        image: "/people/2025/achal-jhawar.png",
        productTeam: "Connect3",
      },
      {
        name: "Andre Phan",
        image: "/people/2025/andre-phan.png",
        productTeam: "Connect3",
      },
      {
        name: "Emma Xu",
        image: "/people/2025/emma-xu.png",
        productTeam: "Connect3",
      },
      {
        name: "John Ling",
        image: "/people/2025/john-ling.png",
        productTeam: "Connect3",
      },
      {
        name: "Michael Tran",
        image: "/people/2025/michael-tran.png",
        productTeam: "Connect3",
      },
      {
        name: "Nirav Pandey",
        image: "/people/2025/nirav-pandey.png",
        productTeam: "Connect3",
      },
      {
        name: "Nitesh Kumar",
        image: "/people/2025/nitesh-kumar.png",
        productTeam: "Connect3",
      },
      {
        name: "Peter Nguyen",
        image: "/people/2025/peter-nguyen.png",
        productTeam: "Connect3",
      },
      {
        name: "Rasheed Mohammed",
        image: "/people/2025/rasheed-mohammed.png",
        productTeam: "Connect3",
      },
      {
        name: "Shahira Jasmine",
        image: "/people/2025/shahira-jasmine.png",
        productTeam: "Connect3",
      },
      {
        name: "Harguan Sehgal",
        image: "/people/2025/harguan-sehgal.png",
        productTeam: "Connect3",
      },
      {
        name: "Keyur Gohel",
        image: "/people/2025/keyur-gohel.png",
        productTeam: "Connect3",
      },
      {
        name: "Sri Vishwanath",
        image: "/people/2025/sri-vishwanath.png",
        productTeam: "Connect3",
      },
      {
        name: "Vishesh Manik",
        image: "/people/2025/vishesh-manik.png",
        productTeam: "Connect3",
      },
    ],
  },
];
