import { Button } from "./Button";


interface HeaderProps {
    name: string;
    profession: string;
    description: string;
    url: string;
}


const Header = ({name, profession, description, url}: HeaderProps) => {
    return (
        <div className="flex flex-col w-[70%] pt-[93px] pl-[60px] pb-[74px] pr-[32px] h-[467px] gap-[18px] items-start">
        <h1 className="text-5xl font-black">I am {name}
          <span className="text-yellow"> {profession}</span> Developer</h1>
        <p className="text-base font-normal">{description}</p>
        <Button text="Contact me" url={url}/>
      </div>
    )
}

export { Header }