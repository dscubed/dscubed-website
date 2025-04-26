import FAQItem from '@/app/components/competitions/FAQ/FAQItem'

const data = [
  {
    question: 'Can I compete in a team?',
    answer: 'Yes! You can compete in teams of up to 3 members or participate individually. If you don’t have a team but would like one, we’ll help match you with others on the day.',
  },
  {
    question: 'What if I don’t have any prior experience?',
    answer: 'No problem! We’ll host several workshops to equip you with the skills needed to tackle real-world challenges. Additionally, our Education Officers will be available on the day to provide support and guidance.',
  },
  {
    question: 'Can I attend online?',
    answer: 'Unfortunately, no. The Kaggle Competition is an in-person event due to logistical reasons. Plus, there will be food and networking opportunities!',
  },
  {
    question: 'How do I sign up?',
    answer: 'You can sign up through our Linktree (link in bio) or other registration links provided on our social media.',
  },
  {
    question: 'What are the prizes?',
    answer: 'Check out our prize details on Instagram for the full breakdown of what’s up for grabs!',
  },
]

export default function FAQList () {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <FAQItem
          question={item.question}
          answer={item.answer}
          key={index}
        />
      ))}
    </div>
  )
}