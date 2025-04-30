import FAQItem from '@/app/components/competitions/FAQ/FAQItem'
import dynamic from 'next/dynamic'

// Dynamically import motion to avoid "use client" issues
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })

const data = [
  {
    question: 'Can I compete in a team?',
    answer: 'Yes! You can compete in teams of up to 3 members or participate individually. If you don’t have a team but would like one, we’ll help match you with others on the day.',
  },
  {
    question: 'What if I don’t have any prior experience?',
    answer: 'No problem! We’ll host several workshops to equip you with the skills needed to tackle real-world challenges. Additionally, our Education Officers will be available on the day to provide support and guidance. Also, feel free to drop in any questions in our Discord server below!',
  },
  {
    question: 'Can I attend online?',
    answer: 'Unfortunately, no. The Kaggle Competition is an in-person event due to logistical reasons. Plus, there will be food and networking opportunities!',
  },
  {
    question: 'How do I sign up?',
    answer: 'You can sign up through our Linktree or other registration links provided on our social media.',
  },
  {
    question: 'What are the prizes?',
    answer: 'Check out our prize details on Instagram or scroll up our competitions page on our website for the full breakdown of what’s up for grabs!',
  },
  {
    question: 'What if I missed out?',
    answer: 'Don’t worry! Keep an eye on our Instagram page and Discord announcements for updates on future competitions. You’re also welcome to attend our workshops to build your skills and prepare for the next event!',
  },
]

export default function FAQList () {
  return (
    <MotionDiv
      className="flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {data.map((item, index) => (
        <FAQItem
          question={item.question}
          answer={item.answer}
          key={index}
        />
      ))}
    </MotionDiv>
  )
}
