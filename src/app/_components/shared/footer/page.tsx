import Link from "next/link"
export default function Footer () {
    return (
        <footer className="text-center p-3 shadow-lg backdrop-blur-lg mt-2 bg-white/1 dark:text-white w-full">
            &copy; S.S.Chatterjee, 2026 All Rights Reserved. <Link href="/terms_and_conditions" className="text-blue-500">Terms & Conditions</Link> apply.
        </footer>
    )
}