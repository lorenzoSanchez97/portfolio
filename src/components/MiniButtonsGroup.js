import MiniButton from "./MiniButton";
import githubIcon from "@/public/icons/github-light-blue-icon.svg"
import linkedin from "@/public/icons/linkedin-light-blue-icon.svg"

export default function MiniButtonsGroup() {
    return (
        <div className="flex justify-end gap-x-[13px] absolute right-0">
            <MiniButton name="Linkedin" icon={linkedin} url="https://www.linkedin.com/in/lorenzo-j-sanchez/" />
            <MiniButton name="GitHub" icon={githubIcon} url="https://github.com/lorenzoSanchez97"/>
        </div>
    )
}