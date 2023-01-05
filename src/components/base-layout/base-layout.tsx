import Footer from '../footer/footer'
import Header from '../header/header'

function BaseLayout(props: { children: React.ReactNode }) {
  return (
    <div className=" grid grid-rows-layout">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default BaseLayout
