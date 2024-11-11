import HomeButton from "./HomeButton"

export default function HomeButtonsGroup() {
    return (
        <section className="flex flex-col text-center gap-y-4 px-4 md:px-0 animate-show-in">
            <HomeButton text={"About"} />
            <HomeButton text={"Download CV"} />
        </section>
    )
}