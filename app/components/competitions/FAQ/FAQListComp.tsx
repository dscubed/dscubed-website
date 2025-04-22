import FAQItem from '@/app/components/competitions/FAQ/FAQItem'

const data = [
  {
    question: 'q',
    answer: 'a'
  },
  {
    question: 'q',
    answer: 'a'
  },
  {
    question: 'q',
    answer: 'a'
  },
  {
    question: 'q',
    answer: 'a'
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