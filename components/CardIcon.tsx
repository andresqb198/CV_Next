import { IconType } from "react-icons";


interface CardIconProps {
    title: string;
    text: string;
    Icon: IconType
}


const CardIcon = ({ title, text, Icon }: CardIconProps) => {
    return (
        <div className="flex flex-col items-center px-20 pt-[28px] pb-[42px] bg-white gap-7">

        <span className="text-7xl	text-yellow">
          <Icon />
        </span>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-lg font-bold">{title}</h1>
          <span>{text}</span>
        </div>
      </div>
    )
}

export { CardIcon }