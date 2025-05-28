import BoxWrapper from './BoxWrapper'
import status_bg from '@/assets/dashboard/status_bg.svg'
import status_bg3 from '@/assets/dashboard/status_bg3.svg'
import status_bg4 from '@/assets/dashboard/status_bg4.svg'

export default function DeviceStatus() {
  return (
    <BoxWrapper title="设备状态">
      <div className="px-[24px] py-[12px] relative  flex justify-between items-center ">
        <div
          className="flex flex-col items-center justify-center h-[68px] w-[68px]"
          style={{
            background: `url(${status_bg}) no-repeat center / 100% 100%`,
          }}
        >
          <div className="text-[#DBE4E5] text-[7px] font-['SourceHanSansCN-Regular']">总数</div>
          <div className="text-[#00E5FF] text-[11px] font-['D-DIN-Bold'] font-bold mt-[6px]">682019</div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="relative flex items-center">
            <img src={status_bg4} alt="" className="h-[14px]  object-fit absolute top-0 left-0 " />
            <div className="text-[8px] mr-[14px] ml-[12px] text-white z-10 font-['YouSheBiaoTiHei']">在线</div>
            <div className="text-[10px] text-[#00E6FF] z-10 font-['D-DIN']">264328</div>
          </div>
          <div className="relative flex items-center">
            <img src={status_bg3} alt="" className="h-[14px] object-fit absolute top-0 left-0 " />
            <div className="text-[8px] mr-[14px] ml-[12px] text-white z-10 font-['YouSheBiaoTiHei']">离线</div>
            <div className="text-[10px] text-[#D2D2D2] z-10 font-['D-DIN']">264328</div>
          </div>
          {/* <div className="relative flex items-center">
            <img src={status_bg2} alt="" className="h-8 object-fit absolute top-0 left-0 " />
            <div className="text-sm mr-6 ml-6 text-white z-10 font-['YouSheBiaoTiHei']">故障</div>
            <div className="text-lg text-[#FF5600] z-10 font-['D-DIN']">264328</div>
          </div> */}
        </div>
      </div>

    </BoxWrapper>
  )
}
