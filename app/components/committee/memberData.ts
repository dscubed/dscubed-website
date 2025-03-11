// Use the 'filter' property to set Tailwind css filters on images

export const executives: { name: string, role: string, image?: string, filter?: string }[] = [
  {
    name: 'Michael Ren',
    role: 'President',
    image: '/people/2024/michael-ren.jpg',
  },
  {
    name: 'Hannah Luo',
    role: 'Internal Vice President',
    image: '',
  },
  {
    name: 'Danielle Tran',
    role: 'External Vice President',
    image: '',
  },
  {
    name: 'Rania Aziz',
    role: 'Secretary',
    image: '',
    filter: 'contrast-[1.1] saturate-[0.7] brightness-150',
  },
  {
    name: 'Shawn Kim',
    role: 'Treasurer',
    image: '',
  },
]

export const directors: { name: string, role: string, image?: string, filter?: string }[] = [
  {
    name: 'Jordan Chao',
    role: 'Education Director',
    image: '',
  },
  {
    name: 'Noah Say',
    role: 'IT Director',
    image: '',
  },
  {
    name: 'Jake Paul',
    role: 'Events Director',
    image: '',
  },
  {
    name: 'Sarah Abusah',
    role: 'Industry Director',
    image: '',
  },
  {
    name: '',
    role: 'Design Director',
    image: '',
  },
  {
    name: 'Teresa Guo',
    role: 'Marketing Director',
    image: '',
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
    image: '',
  },
  {
    name: 'Jessica Zhao',
    role: 'HR Director',
    image: '',
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