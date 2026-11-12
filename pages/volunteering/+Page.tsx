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
                <h1 className="text-3xl font-bold tracking-tight">Volunteering</h1>
                <p className="text-muted-foreground">
                    Community involvement and open source contributions.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Code Mentor</CardTitle>
                        <CardDescription>CodeForGood • 2020 – Present</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Mentoring underrepresented groups in tech, conducting workshops on
                            web development fundamentals.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Open Source Contributor</CardTitle>
                        <CardDescription>Various Projects • 2018 – Present</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Regular contributor to open source projects including React
                            ecosystem tools and developer utilities.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Hackathon Organizer</CardTitle>
                        <CardDescription>Local Tech Community • 2019 – 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Organized quarterly hackathons for students and professionals,
                            fostering innovation and collaboration.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>STEM Outreach Volunteer</CardTitle>
                        <CardDescription>Science Museum • 2017 – 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Led interactive coding workshops for middle and high school
                            students to inspire interest in technology.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}