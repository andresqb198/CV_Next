interface EducationTagProps {
    experience: string;
    years: string;
}

const EducationTag = ({ experience, years }: EducationTagProps) => {
    return (
        <div className="flex items-center gap-2 w-full">
        <span>
          {experience}
        </span>
        <span className="bg-blue px-2 py-1">
          {years}
        </span>
      </div>
    )
}

export { EducationTag }