import { Button, ConfigProvider } from 'antd'
import { createStyles } from 'antd-style'
import type { FC } from 'react'
import TIP from '@/assets/live_weixin.png'

interface IProps { }

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #17b441, #4ca7a2);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      // &:hover::before {
      //   content: '';
      //   background: linear-gradient(135deg, #4ca7a2, #17b441);
      //   position: absolute;
      //   inset: -1px;
      //   opacity: 1;
      //   transition: all 0.3s;
      //   border-radius: inherit;
      // }
    }
  `,
}))

function is_weixin() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}

const Home: FC<IProps> = () => {
  const { styles } = useStyle()
  const [searchParams] = useSearchParams()

  if (!searchParams.get('url') || !searchParams.get('logo'))
    return null

  // 改标签页logo
  useEffect(() => {
    const link = document.querySelector('link[rel~=\'icon\']')
    if (link) {
      // @ts-expect-error 123
      link.href = searchParams.get('logo')!
    }
    else {
      const newLink = document.createElement('link')
      newLink.rel = 'icon'
      newLink.href = searchParams.get('logo')!
      document.head.appendChild(newLink)
    }
  }, [searchParams]) // 监听 favicon 变化，自动更新

  const handleDownload = () => {
    if (!searchParams.get('url'))
      return
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = `https://ibike.hikwuxi.com:58443/file/app/${searchParams.get('url')!}.apk`
    // a.download = `downloaded-file`
    a.rel = 'noopener noreferrer'
    document.body.append(a)
    a.click()
  }

  return (

    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <div className="w-ful h-[100vh] flex flex-col justify-center items-center">
        {is_weixin() && (
          <div className="w-full h-full bg-[rgba(0,0,0,0.6)] absolute inset-0 z-10">
            <img
              src={TIP}
              alt="tip"
              className="w-[72%] absolute right-3 top-4"
            />
          </div>
        )}
        {
          !is_weixin() && (
            <>
              <img
                src={`https://ibike.hikwuxi.com:58443/file/picture/${searchParams.get('logo')!}`}
                alt="logo"
                className=" h-auto w-[60%] object-contain mt-[-30px]"
              />
              <Button type="primary" className="mt-[42px] w-[100px] h-[40px]" onClick={handleDownload}>App下载</Button>
            </>
          )

        }

      </div>
    </ConfigProvider>
  )
}

export default Home
