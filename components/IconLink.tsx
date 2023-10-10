import { IconType } from "react-icons";

interface IconLinkProps {
    url: string;
    Icon: IconType;
}



const IconLink = ({ url, Icon }: IconLinkProps) => {
    return (
        <a className="bg-yellow rounded-full p-[10px] text-3xl" href={url}>
            <span><Icon /></span>
        </a>
    )
}

export { IconLink }