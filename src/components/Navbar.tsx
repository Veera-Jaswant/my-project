import type { NavigationItem, NavigationTabs } from "../types/NavigationTabs";

const Navbar = ({ items, scrollTo }: NavigationTabs) => {

  const DownloadResume = () => {

  }

  return (
    <div className=" bg-gray-900 fixed top-0 left-0 w-full flex justify-end gap-10 p-5 font-bold text-white">
      {
        items.map((item: NavigationItem) => (
          <button className="cursor-pointer" onClick={() => scrollTo(item.elementRef)}>{item.label}</button>
        ))
      }

      <button onClick={DownloadResume}>Resume</button>
    </div>

  )
}

export default Navbar