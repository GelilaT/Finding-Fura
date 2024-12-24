import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface DropdownMenuProps { 
    text: string
    options: string[]
}
export function Dropdown(props: DropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p>{props.text}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
            {props.options.map((option) => (
            
                <Link href={`/${props.text.toLowerCase()}/${option.toLowerCase()}`}>
                    <DropdownMenuItem>
                        <span>{option}</span>
                    </DropdownMenuItem>
                </Link>
            ))}         
         
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
