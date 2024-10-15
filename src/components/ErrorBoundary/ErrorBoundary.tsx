import React from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        console.error("Error captured by ErrorBoundary", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Une erreur est survenue.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;