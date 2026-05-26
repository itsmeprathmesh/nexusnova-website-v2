import Link from 'next/link';
export default function NotFound(){return <main className="min-h-screen grid place-items-center bg-nova-bg p-6 text-center"><div><p className="text-sm text-white/50">404</p><h1 className="mt-3 text-4xl font-semibold">Page not found</h1><Link className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-black" href="/">Back home</Link></div></main>}
