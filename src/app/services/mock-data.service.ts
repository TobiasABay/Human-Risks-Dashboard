import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface MetricCardData {
    title: string;
    description: string;
    value: string;
}

export interface ProgressCardData {
    title: string;
    description: string;
    value: string;
}

export interface DetailedMetricCardData {
    title: string;
    description: string;
    value: string;
    progress: string;
}

export interface ChartDataItem {
    label: string;
    segment1Width: string;
    segment2Width: string;
    segment3Width: string;
}

export interface DashboardData {
    metricCard: MetricCardData;
    progressCard: ProgressCardData;
    detailedMetricCard: DetailedMetricCardData;
    chartData: ChartDataItem[];
}

@Injectable({
    providedIn: 'root'
})
export class MockDataService {

    /**
     * Simulate fetching metric card data
     * Delay: 1.5 seconds
     */
    getMetricCardData(): Observable<MetricCardData> {
        const data: MetricCardData = {
            title: 'Total Risk Events',
            description: 'Last 30 days',
            value: '42'
        };
        return of(data).pipe(delay(1500));
    }

    /**
     * Simulate fetching progress card data
     * Delay: 2 seconds
     */
    getProgressCardData(): Observable<ProgressCardData> {
        const data: ProgressCardData = {
            title: 'Compliance Rate',
            description: 'Current quarter progress',
            value: '87%'
        };
        return of(data).pipe(delay(2000));
    }

    /**
     * Simulate fetching detailed metric card data
     * Delay: 1.8 seconds
     */
    getDetailedMetricCardData(): Observable<DetailedMetricCardData> {
        const data: DetailedMetricCardData = {
            title: 'Security Score',
            description: 'Overall system health',
            value: '92',
            progress: '92%'
        };
        return of(data).pipe(delay(1800));
    }

    /**
     * Simulate fetching horizontal bar chart data
     * Delay: 2.5 seconds
     */
    getHorizontalBarChartData(): Observable<ChartDataItem[]> {
        const data: ChartDataItem[] = [
            { label: 'Engineering', segment1Width: '45%', segment2Width: '30%', segment3Width: '15%' },
            { label: 'Sales', segment1Width: '35%', segment2Width: '25%', segment3Width: '20%' },
            { label: 'Marketing', segment1Width: '50%', segment2Width: '20%', segment3Width: '10%' },
            { label: 'HR', segment1Width: '40%', segment2Width: '35%', segment3Width: '5%' },
            { label: 'Finance', segment1Width: '55%', segment2Width: '15%', segment3Width: '10%' }
        ];
        return of(data).pipe(delay(2500));
    }

    /**
     * Simulate fetching radar chart data
     * Delay: 3 seconds
     */
    getRadarChartData(): Observable<any> {
        const data = {
            title: 'Risk Distribution',
            description: 'Multi-dimensional risk assessment',
            // Add your radar chart data structure here
        };
        return of(data).pipe(delay(3000));
    }

    /**
     * Fetch all dashboard data at once
     * Delay: 2 seconds
     */
    getAllDashboardData(): Observable<DashboardData> {
        const data: DashboardData = {
            metricCard: {
                title: 'Total Risk Events',
                description: 'Last 30 days',
                value: '42'
            },
            progressCard: {
                title: 'Compliance Rate',
                description: 'Current quarter progress',
                value: '87%'
            },
            detailedMetricCard: {
                title: 'Security Score',
                description: 'Overall system health',
                value: '92',
                progress: '92%'
            },
            chartData: [
                { label: 'Engineering', segment1Width: '45%', segment2Width: '30%', segment3Width: '15%' },
                { label: 'Sales', segment1Width: '35%', segment2Width: '25%', segment3Width: '20%' },
                { label: 'Marketing', segment1Width: '50%', segment2Width: '20%', segment3Width: '10%' },
                { label: 'HR', segment1Width: '40%', segment2Width: '35%', segment3Width: '5%' },
                { label: 'Finance', segment1Width: '55%', segment2Width: '15%', segment3Width: '10%' }
            ]
        };
        return of(data).pipe(delay(2000));
    }
}

