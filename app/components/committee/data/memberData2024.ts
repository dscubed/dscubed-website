// Use the 'filter' property to set Tailwind css filters on images

import { CommitteeData, Director, ExecMember, ExecsDirectorsData, Team } from "./types";
import committeePhoto from "@/public/people/committee2024.png";

export const executives: ExecMember[] = [
  {
    name: "Nathan Luo",
    role: "President",
    image: "/people/2024/nathan-luo.png",
  },
  {
    name: "Hanshi Tang",
    role: "Vice President",
    image: "/people/2024/hanshi-tang.jpg",
  },
  {
    name: "Harshit Badam",
    role: "Secretary",
    image: "/people/2024/harshit-badam.jpg",
    filter: "contrast-[1.1] saturate-[0.7] brightness-150",
  },
  {
    name: "Georgina Qiu",
    role: "Treasurer",
    image: "/people/2024/georgina-qiu.jpg",
  },
];

export const directors: Director[] = [
  {
    name: "Daksh Agrawal",
    team: "Education",
    image: "/people/2024/daksh-agrawal.jpg",
  },
  {
    name: "Hannah Luo",
    team: "Events",
    image: "/people/2025/hannah-luo.jpg",
  },
  {
    name: "Kevin Tang",
    team: "Industry",
    image: "/people/2024/kevin-tang.jpg",
  },
  {
    name: "Michael Ren",
    team: "IT",
    image: "/people/2025/michael-ren.jpg",
  },
  {
    name: "Ryan Li",
    team: "Design",
    image: "/people/2024/ryan-li.jpg",
  },
  {
    name: "Danielle Tran",
    team: "Marketing",
    image: "/people/2025/danielle-tran.png",
  },
  // Representatives — no team affiliation, role shown directly
  {
    name: "David Ponder",
    team: null,
    role: "Graduate Representative",
    image: "/people/2024/david-ponder.jpg",
    filter: "contrast-[1.1] brightness-125",
  },
  { name: "Nan Sang", team: null, role: "Graduate Representative" },
  { name: "Harshit Badam", team: null, role: "Undergraduate Representative" },
  { name: "Jacky Liao", team: null, role: "Undergraduate Representative" },
  { name: "Rania Aziz", team: null, role: "Undergraduate Representative" },
  { name: "Dhruv Ajay", team: null, role: "Undergraduate Representative" },
];

export const teams: Team[] = [
  {
    team: "Education",
    members: [
      { name: "Mikael Sutiono", image: "/people/2024/mikael-sutiono.jpg" },
      { name: "Jongho Park" },
      { name: "Keshav Prasath" },
    ],
  },
  {
    team: "Events",
    members: [
      { name: "Nhat Anh Le", image: "/people/2024/nhat-anh-le.jpg" },
      { name: "Ayra Hani" },
      { name: "Angus Chan", image: "/people/2024/angus-chan.jpg" },
      { name: "Davyn Sumardi", image: "/people/2024/davyn-sumardi.jpg" },
      { name: "Rayan Arain" },
      { name: "Ayushi Chauhan", image: "/people/2024/ayushi-chauhan.jpg" },
      { name: "Madhumita Venkataraman" },
      { name: "Paige Meng", displayRole: "Graduate" },
    ],
  },
  {
    team: "Industry",
    members: [
      { name: "Sarah Williams" },
      { name: "Halley Dao" },
      { name: "Manan Saddi" },
      { name: "Shashank Sanjay Bhat" },
      { name: "Khushi Malhotra", image: "/people/2024/khushi-malhotra.png" },
    ],
  },
  {
    team: "Marketing",
    members: [
      { name: "Navya Malhotra" },
      { name: "Saki Hiraoka" },
      { name: "Rebecca Feng", displayRole: "Design", image: "/people/2024/rebecca-feng.jpg" },
      { name: "Danielle Tran" },
      { name: "Ryan Li" },
      { name: "Jason Wang" },
    ],
  },
];

export const execsDirectors: ExecsDirectorsData = {
  executives,
  directors,
};

export const committeeData2024: CommitteeData = {
  year: 2024,
  image: committeePhoto,
  execsDirectors,
  teams,
};
