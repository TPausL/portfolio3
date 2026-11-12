import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Page() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Work Experience</h1>
                <p className="text-muted-foreground">
                    Professional experience and career highlights.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Senior Software Engineer</CardTitle>
                        <CardDescription>TechCorp Inc. • 2022 – Present</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Leading frontend architecture, mentoring team members, and driving
                            technical decisions for core products.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Software Engineer</CardTitle>
                        <CardDescription>StartupXYZ • 2019 – 2022</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Built and maintained full-stack applications using React, Node.js,
                            and PostgreSQL.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Junior Developer</CardTitle>
                        <CardDescription>Digital Agency • 2017 – 2019</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Developed client websites and web applications, collaborated with
                            designers and project managers.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}