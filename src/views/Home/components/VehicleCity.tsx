import Chart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'
import { Flex } from 'antd'
import BoxWrapper from './BoxWrapper'
import typebg from '@/assets/dashboard/typebg.png'

const types = ['年', '月']

export default function VehicleCity() {
  const [type, setType] = useState(types[0])

  const [series] = useState<ApexAxisChartSeries>([{
    name: '车辆统计',
    data: [400, 430, 448, 470, 540].reverse(),
  }])

  const [options] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      // height: 700,
      toolbar: {
        show: false,
      },
      redrawOnParentResize: true, // 父容器大小改变时重绘
      redrawOnWindowResize: true, // 窗口
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 2,
        barHeight: '5vh',
        borderRadiusApplication: 'end',
        colors: {
          backgroundBarColors: ['#1b394c'],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },
      },
    },
    grid: {
      borderColor: '#4f5969',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        left: 10,
        right: 1,
        top: 0,
        bottom: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['北京', '上海', '广州', '深圳', '成都'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: 'white',
          fontSize: '1.15vh',
          fontFamily: 'D-DIN',
        },
      },

      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: 'white',
          fontSize: '1.15vh',
          fontFamily: 'D-DIN',
        },
      },

    },

    fill: {
      colors: ['#3FE8DB'],
      type: 'gradient',
      gradient: {
        type: 'horizontal',
        gradientToColors: ['#55FFE0'], // 颜色数组
        opacityFrom: 0,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    tooltip: {
      // y: {
      //   formatter(val: number) {
      //     return `$ ${val} `
      //   },
      // },
    },
  })

  return (
    <BoxWrapper title="车型TOP 5">
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
        type="bar"
        width="100%"
        height="80%"
        className="w-full h-[16vh] !min-h-0"
      />
    </BoxWrapper>
  )
}
