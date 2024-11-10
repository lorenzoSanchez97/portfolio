import HomeButton from "./home-button"

export default function HomeButtonsGroup() {
    return (
        <section className="flex flex-col justify-center text-center gap-y-4 px-8 animate-slide-in">
            <HomeButton text={"About"} />
            <HomeButton text={"Download CV"} />
        </section>
    )
}