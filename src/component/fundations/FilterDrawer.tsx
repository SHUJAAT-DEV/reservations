import { AiOutlineUndo } from "react-icons/ai";

type DrawerProperties = {
  children: any,
  isOpen: boolean,
  title: string,
  setIsOpen: (isOpen: boolean) => void,
  handleReset: (reset: boolean) => void,
}

export default function Drawer({ children, isOpen, setIsOpen, title, handleReset }: DrawerProperties) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10  bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-gray-700 dark:bg-gray-700 dark:text-gray-400 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="p-4 bg-gray-700 relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-auto h-full">
          <header className="p-4 font-bold text-lg dark:text-white">{title}<AiOutlineUndo onClick={() => handleReset(true)} /></header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
