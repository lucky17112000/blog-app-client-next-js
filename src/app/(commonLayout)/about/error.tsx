"use client"

import { useEffect } from "react"

export default function ErrorBoundary({
    error,
    reset,
    title = "Something went wrong"
}: {
    error: Error & { digest?: string }
    reset: () => void
    title?: string
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h1>{title}</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Retry</button>
        </div>
    )
}