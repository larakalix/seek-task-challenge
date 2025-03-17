import Link from "next/link";
import { ContentBox } from "../common/content-box";

export const Footer = () => {
    return (
        <ContentBox
            outerClassName="bg-dark-gray-2 text-center px-6 py-16"
            innerClassName="flex justify-center"
        >
            <ul className="flex items-center gap-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <span>&copy; {new Date().getFullYear()} Task Manager</span>
                </li>
            </ul>
        </ContentBox>
    );
};
