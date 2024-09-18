import Logo from '@/components/Logo'

const HeaderSimple: React.FC = () => {
  return (
    <header className="felx h-16 w-full items-center justify-between px-6">
      <Logo size={30}></Logo>
    </header>
  )
}

export default HeaderSimple
