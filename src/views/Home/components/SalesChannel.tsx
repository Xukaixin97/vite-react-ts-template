import type { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'
import BoxWrapper from './BoxWrapper'

export default function SalesChannel() {
  const [series] = useState<ApexAxisChartSeries>([{
    name: '实体平台',
    data: [44, 55, 41, 67, 22, 43],
  }, {
    name: '电商平台',
    data: [13, 23, 20, 8, 13, 27],
  }, {
    name: '专营店',
    data: [11, 17, 15, 15, 21, 14],
  }])

  const [options] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '10',
        borderRadiusApplication: 'end',
      },
    },
    grid: {
      borderColor: '#4f5969',
      strokeDashArray: 3,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Oct'],
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

      tooltip: {
        enabled: false,
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
      colors: ['#2953FF', '#4DE1E9', '#3293F0'],
    },

    legend: {
      position: 'top',
      // fontFamily: 'D-DIN',
      labels: {
        colors: 'white',
      },
      markers: {
        // width: 12,
        // height: 12,
        // strokeWidth: 0,
        // strokeColor: '#fff',
        fillColors: ['#2953FF', '#4DE1E9', '#3293F0'],
        // radius: 2,
        // customHTML: undefined,
        // onClick: undefined,
        // offsetX: 0,
        // offsetY: 0,
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
    <BoxWrapper title="销售渠道分布" className="w-[370px] h-auto   relative ">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="370"
        className="mt-4"
      />
    </BoxWrapper>
  )
}
