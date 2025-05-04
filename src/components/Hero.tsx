import { Card, CardContent } from "./ui/card";
import { SiPocketbase } from "react-icons/si";
import Link from "next/link";
import { RiGithubFill, RiNextjsFill } from "react-icons/ri";

export default function Hero() {
    return (<>
        <h1 className="text-center font-bold text-3xl py-6 md:text-9xl md:py-12 ">AnswerSpace</h1>
        <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-4">
            <Card className="max-w-s my-4">
                <CardContent className="flex justify-center items-center gap-4">
                    Built with <RiNextjsFill className="text-3xl text-center" /> and <SiPocketbase className="text-3xl text-center" />
                </CardContent>
            </Card>
            <Link href="https://github.com/mimoimio/answerspace-nextjs" target="_blank">
                <Card className="max-w-s my-4">
                    <CardContent className="flex justify-center items-center gap-4">by Mimoimio <RiGithubFill className="text-3xl text-center" /></CardContent>
                </Card>
            </Link>
        </div>
    </>
    )
}