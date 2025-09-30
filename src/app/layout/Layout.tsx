import type { PropsWithChildren } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="font-primary">
      <Header />
      <main className="container-custom min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout