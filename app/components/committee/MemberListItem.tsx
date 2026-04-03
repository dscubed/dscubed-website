import clsx from 'clsx'
import Image from 'next/image'
import GenericAvatar from '@/app/components/committee/GenericAvatar'

interface MemberProps {
  name: string;
  image?: string;
  role: string;
  filter?: string;
  variant?: 'officer' | 'featured'; // Updated to include both options
}

export default function MemberListItem({
  name,
  image,
  role,
  filter = '',
  variant = 'officer'
}: MemberProps) {

  // Logic: Check if featured is explicitly set OR if the role is a Director/Lead
  const isFeatured = 
    variant === 'featured' || 
    role.toLowerCase().includes('director') || 
    role.toLowerCase().includes('lead');
  
  // Logic for "Featured" variant (Vertical Card with Overlay)
  if (isFeatured) {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-[189px] h-[252px] overflow-hidden rounded-2xl group bg-neutral-800">
          {image ? (
            <Image
              className={clsx("object-cover w-full h-full transition-transform duration-500 group-hover:scale-110", filter)}
              src={image}
              fill
              sizes="189px"
              alt={`${name}'s profile picture`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <GenericAvatar />
            </div>
          )}

          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.70) 100%)' }}
          />

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-3 text-start">
            <p className="text-[#5B7BFF] uppercase text-[10px] font-bold tracking-[0.15em] leading-tight">
              {role}
            </p>
            <h3 className="text-white text-[18px] font-medium font-inter leading-tight mt-0.5">
              {name}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  // Horizontal Card
  return (
    <div className="flex items-center gap-4 bg-[#1A1C20] rounded-xl p-3 w-full border border-white/5">
      <div className="flex-shrink-0 relative w-16 h-16">
        {image ? (
          <Image
            className={clsx("object-cover rounded-full", filter)}
            src={image}
            fill
            sizes="64px"
            alt={`${name}'s profile picture`}
          />
        ) : (
          <GenericAvatar />
        )}
      </div>
      <div className="flex flex-col gap-0 truncate">
        <h3 className="text-white text-base font-medium font-inter truncate">{name}</h3>
        <p className="text-[#8E9196] text-sm font-inter truncate">{role}</p>
      </div>
    </div>
  );
}