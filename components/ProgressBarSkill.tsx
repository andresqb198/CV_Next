import ProgressBar from "./ProgressBar"

interface ProgressBarSkillProps {
    name: string;
    value: string;
}

const ProgressBarSkill = ({name, value}: ProgressBarSkillProps) => {
    return (
        <div className="text-gray">
                    <div className="flex w-full items-center justify-between">
                        <span className="text-md">{name}</span>
                        <span className="text-md">{value}%</span>
                    </div>
                    <ProgressBar value={value} />
                </div>
    )
}

export { ProgressBarSkill }