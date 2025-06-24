import type { FC } from 'react'
import styles from './Map.module.less'

interface IProps { }
const BMAP: FC<IProps> = () => {
  const mapRef = useRef(null)

  useMount(() => {
    const map = new BMapGL.Map(mapRef.current)
    map.setMapStyleV2({
      styleId: 'd4fc9935a386752f493407d4785f02a8',
    })
    // map.centerAndZoom(new BMapGL.Point(116.404, 39.925), 8)
    // map.setMinZoom(4)
    // map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19)
    map.enableScrollWheelZoom()

    // map.addEventListener('zoomend', (e) => {
    //   // console.log(map.getZoom(), map.getCenter())
    // })
    // 画一层荧光透明模板
    // const bd = new BMapGL.Boundary()
    // bd.get('北京', (rs) => {
    //   console.log(rs)
    //   const count = rs.boundaries.length // 行政区域的点有多少个
    //   const pointArray = []
    //   for (let i = 0; i < count; i++) {
    //     const path = []
    //     const str = rs.boundaries[i].replace(' ', '')
    //     const points = str.split(';')
    //     for (let j = 0; j < points.length; j++) {
    //       const lng = points[j].split(',')[0]
    //       const lat = points[j].split(',')[1]
    //       path.push(new BMapGL.Point(lng, lat))
    //     }
    //     const prism = new BMapGL.Prism(path, 5000, {
    //       topFillColor: '#5679ea',
    //       topFillOpacity: 0.5,
    //       sideFillColor: '#5679ea',
    //       sideFillOpacity: 0.9,
    //     })
    //     prism.setAltitude(100000)
    //     map.addOverlay(prism)
    //   }
    // })
  })

  useUnmount(() => {
    // remove listener
    const map = new BMapGL.Map(mapRef.current)
    map.removeEventListener('click')
  })

  return (
    <div ref={mapRef} className={`${styles.wrapper} w-full h-screen`} />
  )
}

export default BMAP
