import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ReactNode } from "react"


const CustomMenuBar = ({title,skeleton}:{title:string,skeleton:ReactNode}) => {
  return (
    <Menubar className="bg-transparent border-none ">
      <MenubarMenu>
        <MenubarTrigger className="text-white text-base tracking-wider ">{title}</MenubarTrigger>
        <MenubarContent>
          {skeleton}
          {/* <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem> */}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default CustomMenuBar