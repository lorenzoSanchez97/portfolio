export default function Panel({ col, children }) {
    return (
        <section className={`bg-light-grey w-full h-full rounded border-solid border-2 border-light-light-grey px-7 py-10 ${col}`}>
            {children}
        </section>
    )
}