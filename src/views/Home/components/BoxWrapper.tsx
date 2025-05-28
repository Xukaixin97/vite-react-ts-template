import type { ReactNode } from 'react'
import box_bg from '@/assets/dashboard/box_bg.png'
import box_title_bg from '@/assets/dashboard/box_title_bg.svg'

export default function BoxWrapper({ title, children, className }: { title: string, className?: string, children: ReactNode }) {
  return (
    <div
      className={`w-[208px] h-auto  relative ${className}  backdrop-blur  `}
      style={{
        background: `url(${box_bg}) no-repeat center / 100% 100%, rgba(34,67,115,0.6)`,
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-black/30  " />
      <img src={box_title_bg} alt="box_bg" className="w-auto h-[19px] absolute left-0 object-fit " />
      <div
        className="text-[11px]  ml-[18px] h-[19px]  flex items-center z-50"
      >
        <span style={{
          background: 'linear-gradient(to bottom, #FFFFFF, #6EC9FF)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontFamily: 'YouSheBiaoTiHei',
        }}
        >
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}
