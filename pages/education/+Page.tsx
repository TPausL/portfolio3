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
                <h1 className="text-3xl font-bold tracking-tight">Education</h1>
                <p className="text-muted-foreground">
                    Academic background and certifications.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>M.Sc. Computer Science</CardTitle>
                        <CardDescription>University of Technology • 2015 – 2017</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Specialization in Distributed Systems and Machine Learning.
                            Thesis: "Scalable Real-time Data Processing Architectures".
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>B.Sc. Software Engineering</CardTitle>
                        <CardDescription>State University • 2011 – 2015</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Focus on Full-Stack Development, Algorithms, and Database Systems.
                            Graduated Magna Cum Laude.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>AWS Certified Solutions Architect</CardTitle>
                        <CardDescription>Amazon Web Services • 2021</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Professional certification validating expertise in designing
                            distributed systems on AWS.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Google Cloud Professional Developer</CardTitle>
                        <CardDescription>Google Cloud • 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Certification demonstrating ability to build scalable applications
                            on Google Cloud Platform.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}