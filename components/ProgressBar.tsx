interface ProgressBarProps {
    value: string;
}

const ProgressBar = ({value}: ProgressBarProps) => {
    return (
        <div className="w-full p-[1px] border-yellow border-solid border-[1px] rounded-full">
            <div className="border-yellow border-solid border-[1px] rounded-full" style={{width: `${value}%`}}>
            </div>
        </div>
    )
};

export default ProgressBar;