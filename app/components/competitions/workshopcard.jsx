export default function WorkshopCard({
  title,
  subtitle,
  description,
  image,
  date,
  time,
}) {
  return (
    <div className="flex-1 min-w-[18rem] max-w-[28rem] bg-[#1e1e1e] text-white rounded-xl border border-[#333] p-6 flex flex-col gap-4 shadow-md">
      <div>
        <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold">{title}</h3>
        <h4 className="text-[clamp(1.125rem,1.8vw,1.25rem)] font-semibold">
          {subtitle}
        </h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="rounded-md w-full h-auto object-cover"
      />
      <div className="text-sm text-white font-semibold">
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
