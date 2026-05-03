import Link from "next/link"
export default function Footer () {
    return (
        <footer className="text-center p-3 shadow-lg backdrop-blur-lg mt-2 bg-white/1 dark:text-white w-full">
            &copy; <Link href="https://sschatterjee.com" className="text-blue-500 hover:underline decoration-1">S.S.Chatterjee</Link> , 2026 All Rights Reserved. <Link href="/terms-and-conditions" className="text-blue-500">Terms & Conditions</Link> apply.
        </footer>
    )
}