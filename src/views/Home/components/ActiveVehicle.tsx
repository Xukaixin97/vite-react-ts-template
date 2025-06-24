import type { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'
import { Flex } from 'antd'
import BoxWrapper from './BoxWrapper'
import typebg from '@/assets/dashboard/typebg.png'

const types = ['日', '月']

export default function DeviceStatus() {
  const [type, setType] = useState(types[0])

  const [series] = useState<ApexAxisChartSeries>([{
    name: 'Net Profit',
    data: [1, 2, 3, 4, 5, 4, 3],
  }])

  const [options] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      // height: '100px',
      // minHeight: 100,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '10',
        borderRadiusApplication: 'end',
      },
    },
    grid: {
      borderColor: '#4f5969',
      strokeDashArray: 3,
      padding: {
        left: 10,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    dataLabels: {
      enabled: false,
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
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
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
      colors: ['#3FE8DB'],
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#55FFE0'], // 颜色数组
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    // tooltip: {
    //   y: {
    //     formatter(val: number) {
    //       return `$ ${val} thousands`
    //     },
    //   },
    // },
  })

  return (
    <BoxWrapper title="车辆激活统计">
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
        height="82%"
        className="w-full h-[20vh] !min-h-0"
      />
    </BoxWrapper>
  )
}
