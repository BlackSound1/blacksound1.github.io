import { ReactElement } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkProps {
    company: string;
    title: string;
    time: string;
    description: ReactElement;
    url: string;
}

export default function WorkCard(
    {
        company,
        title,
        time,
        description,
        url
    }: WorkProps
): ReactElement {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card className="mb-4 border-surface0 bg-mantle hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none">
                <CardHeader>
                    <CardTitle className="text-text group-hover:text-accent text-xl font-semibold transition-colors">{title}</CardTitle>
                    <div className="flex items-center justify-between">
                        <span className="flex items-center text-l font-semibold">{company}</span>
                        <span className="flex items-center text-l font-semibold">{time}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <p>{description}</p>
                    </CardDescription>
                </CardContent>
            </Card>
        </a>
    );
}
