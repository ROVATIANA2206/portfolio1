export default function SectionTitle({eyebrow, title, subtitle}){
    return (
    <div className="container mb-8">
    {eyebrow && <div className="chip mb-3 inline-block">{eyebrow}</div>}
    <h2 className="mb-2">{title}</h2>
    {subtitle && <p>{subtitle}</p>}
    </div>
    )
    }