import Image from "next/image"
import { ProgressBarSkill } from './ProgressBarSkill'
import { ExtraSkill } from "./ExtraSkill"
import { SidebarTitle } from "./SidebarTitle"
import { Separator } from "./Separator"


const Sidebar = () => {
    return (
        <aside className="sticky top-0 flex flex-col w-[450px] px-10 py-10 gap-[10px] h-screen overflow-hidden">
            <section className="flex flex-col items-center px-1 py-2 gap-7">
                <Image
                    className="rounded-[50%]"
                    src="/profile.jpeg"
                    width={150}
                    height={150}
                    alt="profile picture"
                />
                <div className=" flex flex-col items-center gap-4">
                    <SidebarTitle text="Andrés Quintero" />
                    <span className="text-gray">Generative AI Developer</span>
                </div>
            </section>
            <Separator />
            <section className=" flex flex-col gap-1 text-black font-normal text-md">
                <div className="flex w-full items-center justify-between">
                    <span>Age:</span>
                    <span>24</span>
                </div>
                <div className="flex w-full items-center justify-between">
                    <span>Location:</span>
                    <span>Medellín</span>
                </div>
                <div className="flex w-full items-center justify-between">
                    <span>Phone Number:</span>
                    <span>+57 311 641 3198</span>
                </div>
                <div className="flex w-full items-center justify-between">
                    <span>Address:</span>
                    <span>40 Street</span>
                </div>
            </section>
            <Separator />
            <section className=" flex flex-col py-2 gap-1">
                <SidebarTitle text="Languages" />

                <ProgressBarSkill name='Spanish' value='100' />
                <ProgressBarSkill name='English' value='70' />
            </section>
            <Separator />
            <section className=" flex flex-col py-2 gap-1">
                <SidebarTitle text="Technologies" />
                <ProgressBarSkill name='Python' value='90' />
                <ProgressBarSkill name='Tensorflow' value='70' />
                <ProgressBarSkill name='Sklearn' value='80' />
                <ProgressBarSkill name='JAX' value='40' />
            </section>
            <Separator />
            <section className=" flex flex-col py-2 gap-1">
                <SidebarTitle text="Extra skills" />
                <ExtraSkill text="Team work" />
                <ExtraSkill text="Creativity" />
            </section>
            <Separator />
        </aside>
    )
}

export { Sidebar }