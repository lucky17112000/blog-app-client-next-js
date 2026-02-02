
export const dynamic = 'force-dynamic';
export default async function AboutPage() {
    // Simulate slow data fetching
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (<div>About Page</div>);
}