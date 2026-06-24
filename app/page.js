import Link from 'next/link';

export default function HomePage() {
    return (
        <div style={{ padding: '80px 5%', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: '20px' }}>
                Cloud Infrastructure Management
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#7f8c8d', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                A Next.js 14 dashboard utilizing Server-Side Rendering (SSR) for live node telemetry and Incremental Static Regeneration (ISR) for high-speed documentation.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link href="/dashboard" style={{
                    padding: '12px 24px', background: '#3498db', color: 'white', borderRadius: '6px', fontWeight: 'bold'
                }}>
                    View Live Metrics
                </Link>
                <Link href="/docs" style={{
                    padding: '12px 24px', background: 'white', border: '2px solid #bdc3c7', color: '#2c3e50', borderRadius: '6px', fontWeight: 'bold'
                }}>
                    Read Documentation
                </Link>
            </div>
        </div>
    );
}
