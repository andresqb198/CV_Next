import { EducationTag } from "./EducationTag"

interface EducationProps {
  city: string;
  experience: string;
  years: string;
  title: string;
  description: string;
}

const Education = ({ city, experience, years, title, description }: EducationProps) => {
  return (
    <div className="flex">
      <div className=" flex flex-col gap-7 w-full pb-20">
        <h2 className="font-bold text-lg">{city}</h2>
        <EducationTag experience={experience} years={years} />
      </div>
      <div className="flex flex-col gap-7">

        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray">{description}</p>
      </div>
    </div>
  )
}

export { Education }