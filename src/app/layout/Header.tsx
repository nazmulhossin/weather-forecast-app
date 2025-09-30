import ThemeToggler from "../../components/common/ThemeToggler"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b py-3 mb-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex flex-col items-center flex-wrap gap-4 md:justify-between md:flex-row">
          <div>
            <img src="/abohawa-logo.png" alt="abohawa-logo" className="h-13" />
          </div>
          <div className="flex items-center">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header