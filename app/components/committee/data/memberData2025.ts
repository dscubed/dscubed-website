// Use the 'filter' property to set Tailwind css filters on images

import { CommitteeData, Director, ExecMember, ExecsDirectorsData, Team } from "./types";
import committeePhoto from "@/public/people/committee2025.jpg";

export const executives: ExecMember[] = [
  {
    name: "Michael Ren",
    role: "President",
    image: "/people/2025/michael-ren2.png",
  },
  {
    name: "Hannah Luo",
    role: "Internal Vice President",
    image: "/people/2025/hannah-luo2.png",
  },
  {
    name: "Danielle Tran",
    role: "External Vice President",
    image: "/people/2025/danielle-tran.png",
  },
  {
    name: "Rania Aziz",
    role: "Secretary",
    image: "/people/2025/rania-aziz.png",
    filter: "w-30 h-30 object-cover",
  },
  {
    name: "Shawn Kim",
    role: "Treasurer",
    image: "/people/2025/shawn-kim.png",
  },
];

export const directors: Director[] = [
  {
    name: "Jordan Chao",
    team: "Education",
    image: "/people/2025/jordan-chao.png",
  },
  {
    name: "Noah Say",
    team: "IT",
    image: "/people/2025/noah-say.png",
  },
  {
    name: "Jake Paul",
    team: "Events",
    image: "/people/2025/jake-paul.png",
  },
  {
    name: "Sarah Abusah",
    team: "Industry",
    image: "/people/2025/sarah-abusah.png",
  },
  {
    name: "Teresa Guo",
    team: "Marketing",
    image: "/people/2025/teresa-guo.jpg",
  },
  {
    name: "Nathan Luo",
    team: "AI @ DSCubed",
    image: "/people/2025/nathan-luo.png",
  },
  {
    name: "Elyse Lee",
    team: "HR",
    image: "/people/2025/elyse-lee.png",
  },
  {
    name: "Jessica Zhao",
    team: "HR",
    image: "/people/2025/ziyu-zhao.png",
  },
  {
    name: "Dhruv Chaturvedi",
    team: null,
    role: "Project Lead",
    image: "/people/2025/dhruv-chaturvedi.png",
  },
  {
    name: "Mohand Mender",
    team: null,
    role: "Undegraduate Representative",
    image: "/people/2025/mohand-mender.png",
  },
];

export const teams: Team[] = [
  {
    team: "HR",
    image: "/people/2025-teams/HR-Team.png",
    members: [
      { name: "Ojas Manocha", image: "/people/2025/ojas-manocha.png" },
      { name: "Prathiksha Ashok", image: "/people/2025/prathiksha-ashok.png" },
    ],
  },
  {
    team: "IT",
    image: "/people/2025-teams/IT-Team.JPG",
    members: [
      { name: "Paul Su", image: "/people/2025/paul-su.png" },
      { name: "Zim Do", image: "/people/2025/zim-do.jpeg" },
      { name: "Jamie Marks", image: "/people/2025/jamie-marks.png" },
      { name: "Kaylyn Pham", image: "/people/2025/kaylyn-phan.png" },
      { name: "Animesh Pandey", image: "/people/2025/animesh-pandey.png" },
      { name: "Geoffrey Chen", image: "/people/2025/geoffrey-chen.png" },
      { name: "Ishan Deshpande", image: "/people/2025/ishan-deshpande.png" },
      { name: "Tanat Chanwangsa", image: "/people/2025/tanat-chanwangsa.png" },
      { name: "Irene Chiam", image: "/people/2025/irene-chiam.png" },
      { name: "Dhruv Verma", image: "/people/2025/dhruv-verma.png" },
      { name: "Lachlan Chue", image: "/people/2025/lachlan-chue.png" },
      { name: "Eddie Li", image: "/people/2025/eddie-li.png" },
      { name: "Simon Nguyen", image: "/people/2025/simon-nguyen.png" },
    ],
  },
  {
    team: "Marketing",
    image: "/people/2025-teams/Marketing-Team.png",
    members: [
      { name: "Terry Yu", image: "/people/2025/terry-yu.png" },
      { name: "Eric Qiu", image: "/people/2025/eric-qiu.png" },
      { name: "Wan Azlan", image: "/people/2025/azlan-wan.png" },
      { name: "Stephanie Doan", image: "/people/2025/stephanie-doan.png" },
      { name: "Rudra Tiwari", image: "/people/2025/rudra-tiwa.png" },
      { name: "Chi Nguyen", image: "/people/2025/chi-nguyen.png" },
      { name: "Carmen Wong", image: "/people/2025/carmen-wong.png" },
      { name: "Addie Nguyen", image: "/people/2025/addie-nguyen.png" },
    ],
  },
  {
    team: "Events",
    image: "/people/2025-teams/Events-Team.JPG",
    members: [
      { name: "Charmaine Yang", image: "/people/2025/charmaine-yang.png" },
      { name: "Hayden Ma" },
      { name: "Angus Chan", image: "/people/2025/angus-chan.png" },
      { name: "Pavan Dev", image: "/people/2025/pavan-dev.png" },
      { name: "Anthea Lee", image: "/people/2025/anthea-lee.png" },
      { name: "Eric He", image: "/people/2025/eric-he.png" },
      { name: "Jiacheng Zheng", image: "/people/2025/jiacheng-zheng.png" },
      { name: "Soaham Chauhan", image: "/people/2025/soaham-chauhan.png" },
      { name: "Damien Trinh", image: "/people/2025/damien-trinh.png" },
    ],
  },
  {
    team: "Industry",
    image: "/people/2025-teams/Industry-Team.JPG",
    members: [
      { name: "Chris Gee", image: "/people/2025/chris-gee.png" },
      { name: "Anton Huynh", image: "/people/2025/anton-huynh.png" },
      { name: "Jesselyn Lim", image: "/people/2025/jesselyn-lim.png" },
      { name: "Ethan Cheng", image: "/people/2025/ethan-cheng.png" },
      { name: "Andy Li", image: "/people/2025/andy-li.png" },
      { name: "Paige Nguyen", image: "/people/2025/paige-nguyen.png" },
      { name: "Dharani Baskaran", image: "/people/2025/dharani-baskaran.png" },
    ],
  },
  {
    team: "Education",
    image: "/people/2025-teams/Education-Team.JPG",
    members: [
      { name: "Mark Sesuraj", image: "/people/2025/mark-sesuraj.png" },
      { name: "Bike Pham", image: "/people/2025/bike-pham.png" },
      { name: "Nick Muir", image: "/people/2025/nick-muir.png" },
      { name: "Aditya Yadav", image: "/people/2025/aditya-yadav.png" },
      { name: "Keith Howan", image: "/people/2025/keith-howan.png" },
      { name: "Stanley", image: "/people/2025/stanley-zaranski.png" },
      { name: "Frank Ngo", image: "/people/2025/frank-ngo.png" },
    ],
  },
  {
    team: "AI @ DSCubed",
    image: "/people/2025-teams/AI-Team.JPG",
    members: [
      { name: "Henry Routson", image: "/people/2025/henry-routson.png" },
      { name: "Leo Liao" },
      { name: "Pranav Jayanty", image: "/people/2025/pranav-jayanty.png" },
      { name: "Lorraine Sanares", image: "/people/2025/lorraine-sanares.png" },
      { name: "Even Zhang", image: "/people/2025/yiwen.png" },
      { name: "Antione Dulauroy", image: "/people/2025/antione-dulauroy.png" },
      { name: "Alina Noor" },
    ],
  },
];

export const execsDirectors: ExecsDirectorsData = {
  executives,
  directors,
  image: "/people/2025-teams/Execs-Directors.png",
};

export const committeeData2025: CommitteeData = {
  year: 2025,
  image: committeePhoto,
  execsDirectors,
  teams,
};
