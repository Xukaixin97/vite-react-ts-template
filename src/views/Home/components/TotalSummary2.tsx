import { Flex } from 'antd'
import Car from '@/assets/dashboard/car.png'
import User from '@/assets/dashboard/user.png'
import CarBg from '@/assets/dashboard/carbg.png'

function TotalSummary() {
  return (
    <Flex align="center" justify="space-between " className="w-[52vw] gap-[25px] text-center">
      <Flex className="w-full">
        <img src={Car} alt="" className="w-[60px] h-[60px]" />
        <Flex
          className="py-[10px] -ml-[13px] w-full pl-[20px] pr-[18px]"
          style={{
            background: `url(${CarBg}) no-repeat center / 100% 100%`,
          }}
          align="center"
          justify="space-between"
        >
          <div>
            <div className="text-[#00FFEA] text-[15px] font-[D-DIN]">18874</div>
            <div className="text-[#FFF] text-[7px] mt-[3px]">30日新激活车辆</div>
          </div>
          <div>
            <div className="text-[#00FFEA] text-[15px] font-[D-DIN]">18874</div>
            <div className="text-[#FFF] text-[7px] mt-[3px]">今日激活数</div>
          </div>
          <div>
            <div className="text-[#F64B8D] text-[15px] font-[D-DIN]">18874</div>
            <div className="text-[#FFF] text-[7px] mt-[3px]">当前故障数</div>
          </div>
        </Flex>
      </Flex>
      <Flex className="w-full">
        <Flex
          className="-mr-[13px] w-full pr-[22px] pl-[18px]"
          style={{
            background: `url(${CarBg}) no-repeat center / 100% 100%`,
          }}
          align="center"
          justify="space-between"
        >
          <div>
            <div className="text-[#FF9844] text-[15px] font-[D-DIN]">346588</div>
            <div className="text-[#FFF] text-[7px] mt-[3px]">注册用户数</div>
          </div>
          <div>
            <div className="text-[#FF9844] text-[15px] font-[D-DIN]">18874</div>
            <div className="text-[#FFF] text-[7px] mt-[3px]">30日新增用户</div>
          </div>
          <div>
            <div className="text-[#FF9844] text-[15px] font-[D-DIN]">345</div>
            <div className="text-[#FFF] text-[7px] mt-[3px]">今日激活用户</div>
          </div>
        </Flex>
        <img src={User} alt="" className="w-[60xp] h-[60px]" />
      </Flex>
    </Flex>
  )
}

export default TotalSummary
