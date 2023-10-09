import './spinner.scss'

const Spinner = () => {
    return(
        <svg className='spinner' viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
                <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8888888888888888s" repeatCount="indefinite" />
                </rect>
            </g><g transform="rotate(40 50 50)">
            <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7777777777777778s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(80 50 50)">
            <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(120 50 50)">
            <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5555555555555556s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(160 50 50)">
            <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4444444444444444s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(200 50 50)">
            <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(240 50 50)">
            <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2222222222222222s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(280 50 50)">
            <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.1111111111111111s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(320 50 50)">
            <rect x="45" y="25" rx="5" ry="5" width="10" height="10" fill="#9f0013">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
            </g>
        </svg>
    )
}

export default Spinner;