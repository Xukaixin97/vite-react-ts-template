import Chart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'
import { Flex } from 'antd'
import BoxWrapper from './BoxWrapper'

const types = ['日', '月']

export default function NewData() {
  const [type, setType] = useState(types[0])

  const [series] = useState<ApexAxisChartSeries>([{
    name: 'series1',
    data: [40, 40, 40, 40, 40, 40, 40],
  }, {
    name: 'series2',
    data: [32, 32, 32, 32, 32, 32, 32],
  }, {
    name: 'series3',
    data: [5, 2, 44, 12, 22, 7, 12],
  }])

  const [options] = useState<ApexOptions>({
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#D3FF75', '#4DE1E9', '#F1633B'],
      width: 2,
    },
    grid: {
      borderColor: '#4f5969',
      strokeDashArray: 7,
    },
    xaxis: {
      type: 'datetime',
      categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z'],
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
          fontSize: '14px',
          fontFamily: 'D-DIN',
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: 'white',
          fontSize: '14px',
          fontFamily: 'D-DIN',
        },
      },
    },
    fill: {
      colors: ['#D3FF75', '#4DE1E9', '#F1633B'],
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    legend: {
      position: 'top',
      // fontFamily: 'D-DIN',
      labels: {
        colors: 'white',
      },
      markers: {
        width: 12,
        height: 12,
        // strokeWidth: 0,
        // strokeColor: '#fff',
        fillColors: ['#D3FF75', '#4DE1E9', '#F1633B'],
        radius: 2,
        // customHTML: undefined,
        // onClick: undefined,
        // offsetX: 0,
        // offsetY: 0,
      },
    },
  })

  return (
    <BoxWrapper title="新增数据">
      <Flex className="absolute right-0 top-0">
        {types.map((item) => {
          return (
            <div
              key={item}
              className={`text-[8px] text-[#94FFFF] font-['YouSheBiaoTiHei'] ${type === item ? 'text-[#70E5FF]' : ''} cursor-pointer`}
              onClick={() => setType(item)}
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
        width="370"
        height="auto"
        className="mt-4"
      />

    </BoxWrapper>
  )
}
