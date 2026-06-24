'use client';

import { useState } from 'react';

export default function MetricCard({ initialMetrics }) {
    const [metrics, setMetrics] = useState(initialMetrics);
    const [highLoadOnly, setHighLoadOnly] = useState(false);

    const toggleFilter = () => {
        setHighLoadOnly(!highLoadOnly);
    };

    const displayedMetrics = highLoadOnly 
        ? metrics.filter(m => m.cpu > 50) 
        : metrics;

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <button 
                    onClick={toggleFilter}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: highLoadOnly ? '#e74c3c' : '#3498db',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: '600'
                    }}
                >
                    {highLoadOnly ? "Showing High CPU (>50%)" : "Show All System Nodes"}
                </button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
            }}>
                {displayedMetrics.map((node) => (
                    <div key={node.id} style={{
                        background: '#fff',
                        padding: '24px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        borderLeft: node.cpu > 70 ? '5px solid #e74c3c' : '5px solid #2ecc71'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#34495e' }}>{node.name}</h3>
                        <p style={{ margin: '5px 0' }}><strong>CPU Usage:</strong> {node.cpu}%</p>
                        <p style={{ margin: '5px 0' }}><strong>Memory Allocation:</strong> {node.memory}%</p>
                        <div style={{
                            width: '100%',
                            height: '6px',
                            background: '#ecf0f1',
                            borderRadius: '3px',
                            marginTop: '10px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${node.cpu}%`,
                                height: '100%',
                                background: node.cpu > 70 ? '#e74c3c' : '#2ecc71'
                            }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
