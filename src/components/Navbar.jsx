// eslint-disable-next-line react/prop-types
const Navbar = ({setRoute}) => {
  return (
    <div className="flex flex-row items-center p-4 text-white bg-blue-400">
        <div onClick={() => {setRoute('home')}} className="ms-2 text-xl font-bold text-white hover:cursor-pointer">To Do List</div>
        <ul className="flex flex-row items-center ms-8 gap-5 text-white">
            <li><div onClick={() => {setRoute("home")}} className="hover:cursor-pointer">List</div></li>
            <li><div onClick={() => {setRoute("add")}} className="hover:cursor-pointer">Add</div></li>
        </ul>
    </div>
  )
}

export default Navbar