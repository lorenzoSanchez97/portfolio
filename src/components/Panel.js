export default function Panel({ styles, children }) {
    return (
        <section className={`bg-none w-full h-full rounded px-7 py-10 ${styles}`}>
            {children}
        </section>
    )
}