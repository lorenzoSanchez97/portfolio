export default function Panel({ styles, children }) {
    return (
        <section className={`bg-none w-full h-full rounded ${styles}`}>
            {children}
        </section>
    )
}