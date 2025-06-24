import type { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'
import BoxWrapper from './BoxWrapper'

export default function VehicleType() {
  const [series] = useState<ApexNonAxisChartSeries>([44, 55, 41, 17, 15])

  const [options] = useState<ApexOptions>({
    chart: {
      type: 'donut',
      height: '200px',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.9,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '2px',
              fontFamily: 'PangMenZhengDao',
              color: '#fff',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '20px',
              fontFamily: 'Arial, sans-serif',
              color: '#fff',

              offsetY: 10,
              formatter(val) {
                return `${val}%`
              },
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '24px',
              fontFamily: 'YouSheBiaoTiHei',
              color: '#fff',
              formatter(w) {
                return `${w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0)}`
              },
            },
          },
        },
      },
    },
    stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: ['#113448'],
      width: 8,
      dashArray: 0,
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
    fill: {
      colors: ['#D4E3F1', '#F4AD4A', '#FF599E', '#169AFC', '#41F8F3'],
      // type: 'gradient',
      // gradient: {
      //   shadeIntensity: 1,
      //   opacityFrom: 0.8,
      //   opacityTo: 1,
      //   stops: [0, 100],
      // },
    },
    legend: {
      position: 'right',
      // fontFamily: 'D-DIN',
      labels: {
        colors: 'white',
      },
      markers: {
        // width: 12,
        // height: 12,
        // strokeWidth: 0,
        // strokeColor: '#fff',
        fillColors: ['#D4E3F1', '#F4AD4A', '#FF599E', '#169AFC', '#41F8F3'],
        // radius: 2,
        // customHTML: undefined,
        // onClick: undefined,
        // offsetX: 0,
        // offsetY: 0,
      },
      //   /*
      //  * @param {string} seriesName - The name of the series corresponding to the legend
      //  * @param {object} opts - Contains additional information as below
      //  * opts: {
      //  *   seriesIndex
      //  *   w: {
      //  *     config,
      //  *     globals
      //  *   },
      //  * }
      // */
      formatter(val, opts) {
        return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`
      },
    },
  })

  return (
    <BoxWrapper title="车型分布">
      <Chart
        options={options}
        series={series}
        type="donut"
        width={370}
      />

    </BoxWrapper>
  )
}
