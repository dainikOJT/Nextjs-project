export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default function DocsPage() {
    return (
        <div style={{ padding: '40px 5%', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#2c3e50' }}>
                Architecture Documentation
            </h1>
            <p style={{ color: '#7f8c8d', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.6' }}>
                This section details the static deployment topology of our containerized clusters. This page is generated statically via Server-Side Generation (SSG) and updated continuously using Incremental Static Regeneration (ISR).
            </p>

            <section style={{ marginBottom: '25px', background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h2 style={{ fontSize: '1.4rem', color: '#34495e', marginBottom: '10px' }}>1. Edge Load Balancing</h2>
                <p style={{ lineHeight: '1.6' }}>Traffic ingress is orchestrated through optimized configuration patterns, routing active connections across our dynamic Node clusters while offloading resource overhead efficiently.</p>
            </section>

            <section style={{ marginBottom: '25px', background: 'white', padding: '20px', borderRadius: '8px' }}>
                <h2 style={{ fontSize: '1.4rem', color: '#34495e', marginBottom: '10px' }}>2. High-Availability Caching</h2>
                <p style={{ lineHeight: '1.6' }}>To reduce standard read strains on persistent layers, dynamic routing parameters interface directly with automated memory structures, handling spike distributions seamlessly during concurrent data loads.</p>
            </section>
        </div>
    );
}
