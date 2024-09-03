import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  // for more info take a look at:
  // https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically you would log this to something like Sentry, TrakJS or NewRelic
    console.error("ErrorBondary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
