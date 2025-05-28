import Chart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'
import { Flex } from 'antd'
import BoxWrapper from './BoxWrapper'
import typebg from '@/assets/dashboard/typebg.png'

const types = ['日', '月']

const options: ApexOptions = {
  chart: {
    type: 'area',
    height: 400,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors: ['#FFB94F '],
    width: 2,
  },
  grid: {
    borderColor: '#4f5969',
    strokeDashArray: 3,
    padding: {
      left: 10,
      right: 10,
      top: 0,
      bottom: 0,
    },
  },
  xaxis: {
    categories: ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07'],

    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style: {
        colors: 'white',
        fontSize: '1.3vh',
        fontFamily: 'D-DIN',
      },
    },
  },
  yaxis: {
    min: 0,
    tickAmount: 5,
    labels: {
      show: true,
      style: {
        colors: 'white',
        fontSize: '1.3vh',
        fontFamily: 'D-DIN',
      },
    },
  },
  fill: {
    colors: ['#FFB94F'],
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
      stops: [0, 100],
    },
  },
  tooltip: {
    enabled: false,
    x: {
      format: 'dd/MM/yy',
    },
  },
}

export default function NewData() {
  const [series] = useState<ApexAxisChartSeries>([{
    name: 'series1',
    data: [32, 30, 50, 60, 47, 56, 40],
  }])
  const [type, setType] = useState(types[0])

  return (
    <BoxWrapper title="用户增长趋势">
      <Flex className="absolute right-[6px] top-[6px]">
        {types.map((item) => {
          return (
            <div
              key={item}
              className={`text-[8px] text-[#62748C] size-[14px] flex items-center justify-center mr-[1px] ${type === item ? 'text-[#fff]' : ''} cursor-pointer`}
              onClick={() => setType(item)}
              style={{
                background: type === item ? `url(${typebg}) no-repeat center / 100% 100%` : 'linear-gradient( 180deg, rgba(48,83,106,0) 0%, rgba(48,83,106,0.5) 100%)',
              }}
            >
              {item}
            </div>
          )
        })}
      </Flex>
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        height="82%"
        className="w-full h-[20vh] !min-h-0"
      />

    </BoxWrapper>
  )
}
