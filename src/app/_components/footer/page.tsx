import Link from "next/link"
export default function Footer () {
    return (
        <footer className="text-center p-3 bg-zinc-900/75 text-white w-full">
            &copy; S.S.Chatterjee, 2026 All Rights Reserved. <Link href="/" className="text-blue-500">Terms & Conditions</Link> apply.
        </footer>
    )
}