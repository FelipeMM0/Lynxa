import { ButtonDefaultProps } from "@/types/buttonDefault.types"

export const ButtonOutline = ({description, ...rest}: ButtonDefaultProps) => {
  return (
     <button 
      className="border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted transition" 
      {...rest}
     >
        {description}
    </button> 
  )
}