interface SidebarTitleProps {
    text: string;
}


const SidebarTitle = ({ text }: SidebarTitleProps) => {
    return (
        <h1 className="text-lg text-black font-semibold ">{text}</h1>
    )
}

export { SidebarTitle }