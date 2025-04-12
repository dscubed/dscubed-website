// Use the 'filter' property to set Tailwind css filters on images

export const executives: { name: string, role: string, image?: string, filter?: string }[] = [
  {
    name: 'Michael Ren',
    role: 'President',
    image: '/people/2025/michael-ren2.png',
  },
  {
    name: 'Hannah Luo',
    role: 'Internal Vice President',
    image: '/people/2025/hannah-luo2.png',
  },
  {
    name: 'Danielle Tran',
    role: 'External Vice President',
    image: '/people/2025/danielle-tran.png',
  },
  {
    name: 'Rania Aziz',
    role: 'Secretary',
    image: '/people/2025/rania-aziz.png',
    filter: 'w-30 h-30 object-cover'
  },
  {
    name: 'Shawn Kim',
    role: 'Treasurer',
    image: '/people/2025/shawn-kim.png',
  },
]

export const directors: { name: string, role: string, image?: string, filter?: string }[] = [
  {
    name: 'Jordan Chao',
    role: 'Education Director',
    image: '/people/2025/jordan-chao.png',
  },
  {
    name: 'Noah Say',
    role: 'IT Director',
    image: '/people/2025/noah-say.png',
  },
  {
    name: 'Jake Paul',
    role: 'Events Director',
    image: '/people/2025/jake-paul.png',
  },
  {
    name: 'Sarah Abusah',
    role: 'Industry Director',
    image: '/people/2025/sarah-abusah.png',
  },
  {
    name: 'Teresa Guo',
    role: 'Marketing Director',
    image: '/people/2025/teresa-guo.jpg',
  },
  {
    name: 'Nathan Luo',
    role: 'AI @ DSCubed',
    image: '/people/2025/nathan-luo.png',
  },
  {
    name: 'Elyse Lee',
    role: 'HR Director',
    image: '/people/2025/elyse-lee.png',
  },
  {
    name: 'Jessica Zhao',
    role: 'HR Director',
    image: '/people/2025/ziyu-zhao.png',
  },
  {
    name: 'Dhruv Chaturvedi',
    role: 'Project Lead',
    image: '/people/2025/dhruv-chaturvedi.png',
  },
  {
    name: 'Mohand Mender',
    role: 'Undegraduate Representative',
    image: '/people/2025/mohand-mender.png',
  },
]

export const representatives: { name: string, role: string, image?: string, filter?: string }[] = [


]

// The default role for team members is set to '<Team name> Officer', so don't need to set it manually here

export const teams: {
  name: string,
  image?: string,
  members: {
    name: string,
    role?: string,
    image?: string,
    filter?: string
  }[]
}[] = [
  {
    name: 'IT',
    image: '/people/2025-teams/IT-Team.JPG',
    members: [
      { name: 'Paul Su', role: 'IT Officer', image: '/people/2025/paul-su.png'  },
      { name: 'Jamie Marks', role: 'IT Officer', image: '/people/2025/jamie-marks.png'},
      { name: 'Kaylyn Pham', role: 'IT Officer' , image: '/people/2025/kaylyn-phan.png' },
      { name: 'Animesh Pandey', role: 'IT Officer', image: '/people/2025/animesh-pandey.png' },
      { name: 'Ishan Deshpande', role: 'IT Officer' /* image: '' */ },
      { name: 'Tanat Chanwangsa', role: 'IT Officer', image: '/people/2025/tanat-chanwangsa.png' },
      { name: 'Irene Chiam', role: 'IT Officer', image: '/people/2025/irene-chiam.png' },
      { name: 'Dhruv Verma', role: 'IT Officer', image: '/people/2025/dhruv-verma.png'},
      { name: 'Lachlan Chue', role: 'IT Officer', image: '/people/2025/lachlan-chue.png' },
      { name: 'Eddie Li', role: 'IT Officer' /* image: '' */ },
      { name: 'Simon Nguyen', role: 'IT Officer', image: '/people/2025/simon-nguyen.png' },
    ],
  },
  {
    name: 'Marketing', // Includes Graphic Designers based on typical structure
    image: '/people/2025-teams/Marketing-Team.png',
    members: [
      { name: 'Terry Yu', role: 'Marketing Designer', image: '/people/2025/terry-yu.png' },
      { name: 'Eric Qiu', role: 'Marketing Officer', image: '/people/2025/eric-qiu.png' },
      { name: 'Wan Azlan', role: 'Marketing Officer', image: '/people/2025/azlan-wan.png' },
      { name: 'Stephanie Doan', role: 'Marketing Officer', image: '/people/2025/stephanie-doan.png' },
      { name: 'Rudra Tiwa', role: 'Marketing Officer' /* image: '' */ },
      { name: 'Chi Nguyen', role: 'Marketing Officer', image: '/people/2025/chi-nguyen.png' },
      { name: 'Carmen Wong', role: 'Marketing Officer', image: '/people/2025/carmen-wong.png' },
      { name: 'Addie Nguyen', role: 'Marketing Officer', image: '/people/2025/addie-nguyen.png' },
    ],
  },
  {
    name: 'Events',
    image: '/people/2025-teams/Events-Team.JPG',
    members: [
      { name: 'Charmaine Yang', role: 'Events Officer', image: '/people/2025/charmaine-yang.png'},
      { name: 'Hayden Ma', role: 'Events Officer' /* image: '' */ },
      { name: 'Angus Chan', role: 'Events Officer', image: '/people/2025/angus-chan.png' }, 
      { name: 'Pavan Dev', role: 'Events Officer', image: '/people/2025/pavan-dev.png' },
      { name: 'Anthea Lee', role: 'Events Officer', image: '/people/2025/anthea-lee.png'},
      { name: 'Eric He', role: 'Events Officer', image: '/people/2025/eric-he.png' },
      { name: 'Jiacheng Zheng', role: 'Events Officer', image: '/people/2025/jiacheng-zheng.png' },
      { name: 'Soaham Chauhan', role: 'Marketing Officer', image: '/people/2025/soaham-chauhan.png' },
      { name: 'Damien Trinh', role: 'Industry Officer' /* image: '' */ },
    ],
  },
  {
    name: 'Industry',
    image: '/people/2025-teams/Industry-Team.JPG',
    members: [
      { name: 'Chris Gee', role: 'Industry Officer', image: '/people/2025/chris-gee.png' },
      { name: 'Ruby Nguyen', role: 'Industry Officer' /* image: '' */ },
      { name: 'Anton Huynh', role: 'Industry Officer', image: '/people/2025/anton-huynh.png'},
      { name: 'Jesselyn Lim', role: 'Industry Officer', image: '/people/2025/jesselyn-lim.png' },
      { name: 'Ethan Cheng', role: 'Industry Officer', image: '/people/2025/ethan-cheng.png' },
      { name: 'Andy Li', role: 'Industry Officer', image: '/people/2025/andy-li.png' },
      { name: 'Gurshan Nanda', role: 'Industry Officer' /* image: '' */ },
      { name: 'Paige Nguyen', role: 'Industry Officer' /* image: '' */ },
      { name: 'Dharani Baskaran', role: 'Industry Officer' /* image: '' */ },
    ],
  },
  {
    name: 'Education',
    image: '/people/2025-teams/Education-Team.JPG',
    members: [
      { name: 'Mark Sesuraj', role: 'Education Officer' , image: '/people/2025/mark-sesuraj.png' },
      { name: 'Bike Pham', role: 'Education Officer', image: '/people/2025/bike-pham.png' },
      { name: 'Nick Muir', role: 'Education Officer', image: '/people/2025/nick-muir.png' },
      { name: 'Aditya Yadav', role: 'Education Officer', image: '/people/2025/aditya-yadav.png' },
      { name: 'Keith Howan', role: 'Education Officer', image: '/people/2025/keith-howan.png' },
      { name: 'Stanley', role: 'Education Officer', image: '/people/2025/stanley-zaranski.png' },
      { name: 'Frank Ngo', role: 'Education Officer', image: '/people/2025/frank-ngo.png' },
    ],
  },
  {
    name: 'AI',
    image: "/people/2025-teams/AI-Team.JPG",
    members: [
      { name: 'Henry Routson', role: 'AI @ DSCubed' /* image: '' */ },
      { name: 'Leo Liao', role: 'AI @ DSCubed' /* image: '' */ },
      { name: 'Aishwary Shee', role: 'AI @ DSCubed' /* image: '' */ },
      { name: 'Shayomi Sudarshan', role: 'AI @ DSCubed' /* image: '' */ },
      { name: 'Lorraine Sanares', role: 'AI @ DSCubed' /* image: '' */ },
    ],
  },
];