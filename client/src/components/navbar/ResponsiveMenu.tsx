import { Navlinks } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { FaUserCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

interface Props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}
const ResponsiveMenu = ({ showMenu, setShowMenu }: Props) => {
  const router = useRouter();

  const handleCloseMenu = async (link: string) => {
    await router.push(link);
    setShowMenu(false);
  };
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-30 flex h-screen w-[75%] flex-col justify-between bg-[#ff0000] px-8 pb-6 pt-16 text-white transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card ">
        <div className="flex items-center justify-start gap-3 ">
          <FaUserCircle size={50} />
          {/* <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div> */}
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={uuidv4()}>
                <span
                  className="mb-5 inline-block "
                  onClick={() => handleCloseMenu(data.link)}
                >
                  {data.title}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          <Link href="https://ianMuchesia.github.com/"></Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
