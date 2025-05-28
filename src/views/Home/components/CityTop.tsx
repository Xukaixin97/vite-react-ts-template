import { Flex } from 'antd'
import BoxWrapper from './BoxWrapper'

export default function VehicleCity() {
  return (
    <BoxWrapper title="用户城市TOP 10">
      <div className="px-[8px] py-[10px]">
        {Array.from({ length: 10 }).map((item, index) => {
          return (
            <Flex align="center" className="w-full mb-[3px]">
              <div className="text-[8px] text-[#94FFFF] font-['YouSheBiaoTiHei'] pr-[7px] w-[20px]">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <div className="w-full">
                <Flex align="center" justify="space-between">
                  <div className="text-[#FFF] text-[6px]">成都市</div>
                  <div className="text-[#FFF] text-[6px]">7446929</div>
                </Flex>
                <div className="w-full border border-solid border-[#105E96] p-[2px] mt-[2px]">
                  <div className="w-full h-[2px] bg-[#70E5FF]"></div>
                </div>
              </div>
            </Flex>
          )
        })}
      </div>

    </BoxWrapper>
  )
}
