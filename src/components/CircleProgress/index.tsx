import styles from './CircleProgress.module.css'

export function CircleProgress({percentage}:{percentage:number}) {
    const radius = 20;
    const circleWidht = 44;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * (percentage * 10)) / 100;

    return (
        <svg width={circleWidht} height={circleWidht} viewBox={`0 0 ${circleWidht} ${circleWidht}`}>
            <circle
                cx={circleWidht / 2}
                cy={circleWidht / 2}
                strokeWidth={4}
                r={radius}
                className={styles.circleBackground}
            />

            <circle
                cx={circleWidht / 2}
                cy={circleWidht / 2}
                strokeWidth={4}
                r={radius}
                className={styles.circleProgress}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
                transform={`rotate(-90 ${circleWidht/2} ${circleWidht/2})`}
            />
            <text x="50%" y="50%" dy="0.3em" textAnchor='middle' className={styles.circleText}>
                {percentage}
            </text>
        </svg>
    );
}

export default CircleProgress;