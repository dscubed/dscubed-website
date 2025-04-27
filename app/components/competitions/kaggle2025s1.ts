export const titleCard = {
    header: '',
    descriptor: '',
    startDate: '',
    endDate: '',
  }
  
  export const infoCard = {
    header: '',
    text: '',
    image: '',
  }
  
  export const prizeCard = {
    prize1: '',
    prize2: '',
    prize3: '',
  }
  
  export const timelineCard = {
    beforeEvent: [
      {
        eventName: '',
        descriptor: '',
        location: '',
        date: '',
        time: '',
      },
      {
        eventName: '',
        descriptor: '',
        location: '',
        date: '',
        time: '',
      },
      {
        eventName: '',
        descriptor: '',
        location: '',
        date: '',
        time: '',
      },
    ],
    duringEvent: [
      {
        name: '',
        time: '',
        descriptor: '',
      },
    ],
  }
  
  export const videoCard = {
    workshopName: '',
    descriptor: '',
    date: '',
    time: '',
    videoLink: '',
  }
  
  export const frqCard = [
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
  ]


  export const credits: {
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
      members: [
        { name: 'Noah Say', role: 'IT Director', image: '/people/2025/noah-say.png'},
        { name: 'Paul Su', role: 'IT Officer', image: '/people/2025/paul-su.png'  },
        { name: 'Kaylyn Pham', role: 'IT Officer' , image: '/people/2025/kaylyn-phan.png' },
        { name: 'Animesh Pandey', role: 'IT Officer', image: '/people/2025/animesh-pandey.png' },
        { name: 'Irene Chiam', role: 'IT Officer', image: '/people/2025/irene-chiam.png' },
        { name: 'Lachlan Chue', role: 'IT Officer', image: '/people/2025/lachlan-chue.png' },
      ],
    },
  ]