import ActiveVehicle from './components/ActiveVehicle'
import ActiveUser from './components/ActiveUser'
import CurrentTime from './components/CurrentTime'
import DeviceStatus from './components/DeviceStatus'
import Title from './components/Title'
import VehicleCity from './components/VehicleCity'
import NewUserTrend from './components/NewUserTrend'
import NewVehicleTrend from './components/NewVehicleTrend'
import CityTop from './components/CityTop'
import TotalSummary from './components/TotalSummary2'
import BMAP from './components/Map'
import BottomBg from '@/assets/dashboard/bottom_bg.png'
import MainBg from '@/assets/dashboard/main_bg.png'

function Home() {
  return (

    <div
      className="w-full h-screen relative bg-[#081F3E]"
      style={{
        background: `url(${MainBg}) no-repeat center / 100% 100%`,
      }}
    >
      <BMAP />

      <>
        <header className="w-full absolute top-0 left-0">
          <Title />
          <CurrentTime />
        </header>

        <section about="left panel" className="flex flex-col justify-between gap-[1.3vh]  w-auto  absolute top-[10.5vh] left-[14px] z-50">
          <DeviceStatus />
          <NewVehicleTrend />
          <ActiveVehicle />
          <VehicleCity />

          {/* <NewData /> */}
          {/* <NewData /> */}
        </section>

        <section about="right panel" className="flex flex-col justify-between gap-[1.3vh]  w-auto  absolute top-[10.5vh] right-[14px] z-50">
          <NewUserTrend />
          <ActiveUser />
          <CityTop />
          {/* <VehicleCity />
          <SalesChannel /> */}
        </section>

        <section about="TotalSummary" className="absolute top-[12.3vh] left-[50%] translate-x-[-50%] z-50 ">
          <TotalSummary />
        </section>

        <section about="AlarmList" className="w-[calc(100%-52rem)]   absolute  bottom-6  left-[50%] translate-x-[-50%] z-50 ">
          {/* <AlarmList /> */}
        </section>
      </>
      <div className="absolute w-[51.3vw] bottom-[0.66vh] left-[50%] translate-x-[-50%]">
        <img src={BottomBg} width="100%" />
      </div>
    </div>
  )
}

export default Home
