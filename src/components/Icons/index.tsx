type Props = React.SVGProps<SVGSVGElement>

export const FlameIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
        </svg>
    )
}

export const UserIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        {...iconProps}
        viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
    )
}

export const ChevronRightIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
        </svg>
    )
}

export const AlertCircleIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
        </svg>
    )
}

export const StarIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
        </svg>
    )
}

export const PlayerPlayIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 4v16l13 -8z"></path>
        </svg>
    )
}

export const AlarmIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M12 10l0 3l2 0"></path>
            <path d="M7 4l-2.75 2"></path>
            <path d="M17 4l2.75 2"></path>
        </svg>
    )
}

export const ArrowBackIcon = ({ ...iconProps }: Props) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        {...iconProps}
        viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
    </svg>
)

export const CircleArrowUpIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 8l-4 4"></path>
            <path d="M12 8v8"></path>
            <path d="M16 12l-4 -4"></path>
        </svg>
    )
}

export const HeartIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
        </svg>
    )
}

export const SearchIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
        </svg>
    )
}

export const TicketIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 5l0 2"></path>
            <path d="M15 11l0 2"></path>
            <path d="M15 17l0 2"></path>
            <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
        </svg>
    )
}

export const CategoryIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4h6v6h-6z"></path>
            <path d="M14 4h6v6h-6z"></path>
            <path d="M4 14h6v6h-6z"></path>
            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
        </svg>
    )
}

export const MovieIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 4l0 16"></path>
            <path d="M16 4l0 16"></path>
            <path d="M4 8l4 0"></path>
            <path d="M4 16l4 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M16 8l4 0"></path>
            <path d="M16 16l4 0"></path>
        </svg>
    )
}

export const DeviceTvIcon = ({ ...iconProps }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            {...iconProps}
            viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M16 3l-4 4l-4 -4"></path>
        </svg>
    )
}

