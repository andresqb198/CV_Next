import { PiIntersectSquareDuotone } from 'react-icons/pi'

interface ExtraSkillProps {
    text: string;
}

const ExtraSkill = ({text}: ExtraSkillProps) => {
    return (
        <div className="flex gap-2 items-center text-md">
            <span className="text-yellow">
                <PiIntersectSquareDuotone />
            </span>
            <span className="text-gray">{text}</span>
        </div>
    )
}

export { ExtraSkill }