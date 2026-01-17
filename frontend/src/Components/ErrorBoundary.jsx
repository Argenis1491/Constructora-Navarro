import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error capturado por ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6 text-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Algo salió mal 😕
            </h1>
            <p className="text-gray-600 mb-6">
              Ocurrió un error inesperado. Por favor recarga la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Recargar
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
