// Use the 'filter' property to set Tailwind css filters on images

export const executives: { name: string, role: string, image?: string, filter?: string }[] = [
  {
    name: 'Michael Ren',
    role: 'President',
    image: '/people/2025/michael-ren.jpg',
  },
  {
    name: 'Hannah Luo',
    role: 'Internal Vice President',
    image: '/people/2025/hannah-luo.jpg',
  },
  {
    name: 'Danielle Tran',
    role: 'External Vice President',
    image: '/people/2025/danielle-tran.png',
  },
  {
    name: 'Rania Aziz',
    role: 'Secretary',
    image: '/people/2025/rania_aziz.jpg',
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
    image: '',
  },
  {
    name: 'Sarah Abusah',
    role: 'Industry Director',
    image: '/people/2025/sarah-abusah.png',
  },
  {
    name: 'Jamie Marks',
    role: 'Design Director',
    image: '/people/2025/jamie-marks.png',
  },
  {
    name: 'Teresa Guo',
    role: 'Marketing Director',
    image: '/people/2025/teresa-guo.jpg',
  },
  {
    name: 'Pranav Jayanty',
    role: 'Portfolio Director',
    image: '',
  },
  {
    name: 'Elyse Lee',
    role: 'HR Director',
    image: '',
  },
  {
    name: 'Jessica Zhao',
    role: 'HR Director',
    image: '/people/2025/ziyu-zhao.jpg',
  },
  {
    name: 'Dhruv Chaturvedi',
    role: 'Project Lead',
    image: '',
  },
]

export const representatives: { name: string, role: string, image?: string, filter?: string }[] = [
  {
    name: 'David Ponder',
    role: 'Graduate Representative',
    image: '/people/2024/david-ponder.jpg',
    filter: 'contrast-[1.1] brightness-125',
  },
  {
    name: 'Nan Sang',
    role: 'Graduate Representative',
    // image: '',
  },
  {
    name: 'Harshit Badam',
    role: 'Undergraduate Representative',
    // image: '',
  },
  {
    name: 'Jacky Liao',
    role: 'Undergraduate Representative',
    // image: '',
  },
  {
    name: 'Rania Aziz',
    role: 'Undergraduate Representative',
    // image: '',
  },
  {
    name: 'Dhruv Ajay',
    role: 'Undergraduate Representative',
    // image: '',
  },
]

// The default role for team members is set to '<Team name> Officer', so don't need to set it manually here

export const teams: { 
  name: string, 
  members: {
    name: string,
    role?: string, 
    image?: string,
    filter?: string
  }[] 
}[] = [
  {
    name: 'Education',
    members: [
      {
        name: 'Mikael Sutiono',
        image: '/people/2024/mikael-sutiono.jpg',
      },
      {
        name: 'Jongho Park',
        // image: '',
      },
      {
        name: 'Keshav Prasath',
        // image: '',
      },
    ],
  },
  {
    name: 'Events',
    members: [
      {
        name: 'Nhat Anh Le',
        image: '/people/2024/nhat-anh-le.jpg',
      },
      {
        name: 'Ayra Hani',
        // image: '',
      },
      {
        name: 'Angus Chan',
        image: '/people/2024/angus-chan.jpg',
      },
      {
        name: 'Davyn Sumardi',
        image: '/people/2024/davyn-sumardi.jpg',
      },
      {
        name: 'Rayan Arain',
        // image: '',
      },
      {
        name: 'Ayushi Chauhan',
        image: '/people/2024/ayushi-chauhan.jpg',
      },
      {
        name: 'Madhumita Venkataraman',
        // image: '',
      },
      {
        name: 'Paige Meng',
        role: 'Graduate Officer',
        // image: '',
      },
    ],
  },
  {
    name: 'Industry',
    members: [
      {
        name: 'Sarah Williams',
        // image: '',
      },
      {
        name: 'Halley Dao',
        // image: '',
      },
      {
        name: 'Manan Saddi',
        // image: '',
      },
      {
        name: 'Shashank Sanjay Bhat',
        // image: '',
      },
      {
        name: 'Khushi Malhotra',
        image: '/people/2024/khushi-malhotra.png',
      },
    ],
  },
  {
    name: 'Marketing',
    members: [
      {
        name: 'Navya Malhotra',
        // image: '',
      },
      {
        name: 'Saki Hiraoka',
        // image: '',
      },
      {
        name: 'Rebecca Feng',
        role: 'Design Director',
        image: '/people/2024/rebecca-feng.jpg',
      },
      {
        name: 'Danielle Tran',
        // image: '',
      },
      {
        name: 'Ryan Li',
        // image: '',
      },
      {
        name: 'Jason Wang',
        // image: '',
      }
    ],
  },
  // {
  //   name: 'IT',
  //   members: [
  //     {
  //       name: '',
  //       image: '',
  //     },
  //   ]
  // },
]