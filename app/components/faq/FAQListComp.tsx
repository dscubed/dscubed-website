import FAQItem from '@/app/components/faq/FAQItem'

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

export default function FAQListComp () {
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