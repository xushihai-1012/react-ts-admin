/**
 * 封装Nprogress 根据pathname和mounted状态改变
 */

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useThemeToken } from '@/theme/hooks'
import { usePathName } from '@/router/hooks'

const ProgressBar: React.FC = () => {
  const { colorPrimary } = useThemeToken()
  const pathName = usePathName()

  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!visible) {
      Nprogress.configure({
        showSpinner: false,
      })
      Nprogress.start()
      changeNprogressBar()
      setVisible(true)
    }

    if (visible) {
      Nprogress.done()
      setVisible(false)
    }

    if (!visible && mounted) {
      setVisible(false)
      Nprogress.done()
    }

    return () => {
      Nprogress.done()
    }
  }, [pathName, mounted])

  const changeNprogressBar = () => {
    const nprogress = document.getElementById('nprogress')
    if (nprogress) {
      const bar: HTMLElement = nprogress.querySelector('.bar')!
      const peg: HTMLElement = nprogress.querySelector('.peg')!

      bar.style.background = colorPrimary
      bar.style.boxShadow = `0 0 2px ${colorPrimary}`

      peg.style.boxShadow = `0 0 10px ${colorPrimary}, 0 0 5px ${colorPrimary}`
    }
  }

  return null
}

export default ProgressBar
