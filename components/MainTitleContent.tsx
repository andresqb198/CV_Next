interface MaintTitleContentProps {
    title: string;
    text: string;
}

const MaintTitleContent = ({ title, text }: MaintTitleContentProps) => {
    return(
        <div className="flex flex-col items-center gap-[25px]">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p>{text}</p>
          </div>
    )
}

export { MaintTitleContent };