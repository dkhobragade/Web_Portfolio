export default function ProjectLayout ( {
    children,
}: {
    children: React.ReactNode
} )
{
    return <section className="h-screen w-full">{ children }</section>
}