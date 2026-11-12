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
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <p className="text-muted-foreground">
                    Selected personal and professional projects.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>TaskFlow</CardTitle>
                        <CardDescription>Productivity SaaS • React, Node.js, PostgreSQL</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Team collaboration platform with real-time updates, kanban boards,
                            and automated workflows.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>DevMetrics</CardTitle>
                        <CardDescription>Analytics Dashboard • Next.js, TypeScript, ClickHouse</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Engineering metrics dashboard tracking deployment frequency, lead
                            time, and change failure rate.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>CodeReview AI</CardTitle>
                        <CardDescription>VS Code Extension • TypeScript, OpenAI API</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            AI-powered code review assistant that suggests improvements and
                            catches common issues automatically.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>MicroBlog</CardTitle>
                        <CardDescription>Social Platform • Go, React, GraphQL</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Lightweight microblogging platform with federated timeline,
                            real-time notifications, and media support.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>InfraKit</CardTitle>
                        <CardDescription>DevOps Toolkit • Rust, Kubernetes, Terraform</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Infrastructure-as-code toolkit for managing multi-cloud
                            deployments with policy-as-code validation.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>DesignSystem</CardTitle>
                        <CardDescription>Component Library • React, Storybook, Tailwind</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Accessible, themeable component library with 50+ components,
                            comprehensive docs, and design tokens.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}