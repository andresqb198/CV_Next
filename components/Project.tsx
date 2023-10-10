import { IoIosArrowForward } from 'react-icons/io'
import Image from "next/image"


interface ProjectProps {
    title: string;
    description: string;
    urlImage: string;
    url: string;
    textButton: string;
}

const Project = ({ title, description, url, urlImage, textButton }: ProjectProps) => {
    return (
        <div style={{ width: '20%', height: 'auto' }}className="w-[300px] bg-white pt-14">

        <Image
          src={urlImage}
          width={300}
          height={300}
          alt="Project Image"
        />

        <div className="flex flex-col gap-2 p-7">

          <h1 className="font-bold text-3xl">{title}</h1>
          <p>{description}</p>
          <a className="flex items-center text-yellow text-lg font-semibold" href={url}>
            {textButton}
            <span><IoIosArrowForward /></span>
          </a>

        </div>
      </div>
    )
}

export { Project }