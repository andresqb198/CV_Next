import { AiOutlineArrowRight } from 'react-icons/ai'


interface ButtonsProps {
    text: string;
    url: string;
}


const Button = ({ text, url }: ButtonsProps) => {
    return(
        <a className="flex items-center bg-yellow px-8 py-4 rounded-md" href={url}>
                <span className="font-medium pr-[9px]">{text}</span>
                <AiOutlineArrowRight />
              </a>
    )
}

export { Button };