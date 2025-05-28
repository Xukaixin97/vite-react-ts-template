import moment from 'moment'

// 设置语言环境
moment.locale('zh-cn', {
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
})

export default function CurrentTime() {
  const [time, setTime] = useState<any>(moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss dddd'))

  useInterval(() => {
    setTime(moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss dddd'))
  }, 1000)

  return (
    <div
      className="text-[1.2vw] absolute right-[2.9vw] top-[5vh] text-white"
      style={{
        background: 'linear-gradient(to bottom, #DDECF6, #6EC9FF)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontFamily: 'D-DIN-Bold',
      }}
    >
      {time}
    </div>
  )
}
