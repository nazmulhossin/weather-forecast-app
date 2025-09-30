import Layout from "./app/layout/Layout"
import { ThemeProvider } from "./app/providers/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        Main content
      </Layout>
    </ThemeProvider>

  )
}

export default App