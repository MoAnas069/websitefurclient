import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-brand-ivory flex flex-col items-center justify-center p-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-light text-brand-wood mb-6">Something went wrong.</h1>
                    <p className="text-brand-charcoal/60 mb-8 max-w-md mx-auto">
                        We apologize for the inconvenience. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-brand-wood text-brand-ivory uppercase tracking-widest text-sm hover:bg-brand-wood/90 transition-colors duration-300"
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
