import { ButtonDefaultProps } from "@/types/buttonDefault.types";

export const ButtonDefault = ({ description, ...rest }: ButtonDefaultProps) => {
  return (
    <button
      className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
      {...rest}
    >
      {description}
    </button>
  );
};