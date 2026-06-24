import MetricCard from '@/components/MetricCard';

export const dynamic = 'force-dynamic';

async function fetchClusterMetrics() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    // If deploying to Vercel, the relative URL works beautifully for internal APIs
    const res = await fetch(`${baseUrl}/api/metrics`, { cache: 'no-store' });
    
    if (!res.ok) {
        return { cluster: "Offline", timestamp: "N/A", metrics: [] };
    }
    return res.json();
}

export default async function DashboardPage() {
    const data = await fetchClusterMetrics();

    return (
        <div style={{ padding: '40px 5%' }}>
            <header style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '2rem', color: '#2c3e50' }}>Infrastructure Performance Monitor</h1>
                <p style={{ color: '#7f8c8d' }}>Cluster Target: <strong>{data.cluster}</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#95a5a6' }}>Last Server Fetch: {data.timestamp}</p>
            </header>

            <MetricCard initialMetrics={data.metrics} />
        </div>
    );
}
