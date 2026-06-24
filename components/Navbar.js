import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 5%',
            backgroundColor: '#2c3e50',
            color: 'white'
        }}>
            <h2 style={{ fontSize: '1.2rem', margin: 0 }}>InfraDash</h2>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '20px',
                margin: 0
            }}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Live Metrics</Link></li>
                <li><Link href="/docs">Architecture Docs</Link></li>
            </ul>
        </nav>
    );
}
