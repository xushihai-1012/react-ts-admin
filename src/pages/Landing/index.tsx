import useSettingStore from '@/stores/settings'
import { Typography, Button, ColorPicker, DatePicker, Flex } from 'antd'

const { Title } = Typography

const LandingPage: React.FC = () => {
  const { colorPrimary, setColorPrimary } = useSettingStore()

  return (
    <div>
      <Title level={3}>landing page</Title>
      <Flex gap={16}>
        <Button type="primary">primary</Button>
        <Button>default</Button>
        <DatePicker.RangePicker></DatePicker.RangePicker>
        <ColorPicker
          showText
          value={colorPrimary}
          onChange={(color) => setColorPrimary(color.toHex())}
        ></ColorPicker>
      </Flex>
    </div>
  )
}

export default LandingPage
