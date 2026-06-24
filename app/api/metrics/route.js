import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const telemetryData = {
            timestamp: new Date().toISOString(),
            status: "Healthy",
            cluster: "prod-mumbai-cluster-01",
            metrics: [
                { id: "node-1", name: "API Gateway Node", cpu: Math.floor(Math.random() * (75 - 40) + 40), memory: 68 },
                { id: "node-2", name: "Worker Node Alpha", cpu: Math.floor(Math.random() * (90 - 60) + 60), memory: 82 },
                { id: "node-3", name: "Cache Replica-02", cpu: Math.floor(Math.random() * (35 - 15) + 15), memory: 44 }
            ]
        };

        return NextResponse.json(telemetryData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
