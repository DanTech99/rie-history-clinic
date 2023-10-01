
import HeaderNav from "./HeaderNav"
import SideBar from "./SideBar"

function Layout({children}) { // 
  return (
    <>
      <HeaderNav />
      <main className="">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <SideBar />
          </div>
          <div className="col-span-3">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout