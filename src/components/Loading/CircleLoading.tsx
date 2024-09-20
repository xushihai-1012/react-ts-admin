import { Spin } from 'antd'

export const CircleLoading: React.FC = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Spin size="large" />
    </div>
  )
}
