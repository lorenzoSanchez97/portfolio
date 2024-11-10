import Link from 'next/link';

export default function HomeButton({ text }) {
    return (
        <Link href="/about" className='text-light-blue font-bold text-l no-underline py-3 px-24 border-solid rounded-xl border-light-blue hover:bg-light-blue hover:text-dark-grey transition-all duration-300'>{text}</Link>
    )
}