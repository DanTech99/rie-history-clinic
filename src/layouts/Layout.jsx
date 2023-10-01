
import HeaderNav from "./HeaderNav"
import SideBar from "./SideBar"

function Layout({children}) { // 
  return (
    <>
      <HeaderNav />
      <main className="">
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <SideBar />
          </div>
          <div className="col-span-4">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout