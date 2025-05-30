import clsx from 'clsx'

export default function Section ({
  id,
  className, 
  children, 
  ...props 
}: {
  id?: string,
  className?: string,
  children?: React.ReactNode
}) {
  return (
    <section {...props} id={id} className={clsx('px-5 my-40 sm:my-24', className)}>
      <div className="flex flex-col gap-10 max-w-screen-xl lg:max-w-[500px] mx-auto">
        {children}
      </div>
    </section>
  )
}