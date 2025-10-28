import { Link } from "react-router-dom";
import rhemaLogo from "@/assets/rhema_logo_light.svg";

interface LegalLayoutProps {
  children: React.ReactNode;
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-peaceful flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-block">
            <img
              src={rhemaLogo}
              alt="Rhema Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-surface border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} <a href="https://agapelabs.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-teal-accent transition-colors">Agape Labs Ltd</a>. All rights reserved.
            </div>
            <nav className="flex gap-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-teal-accent transition-colors">
                Home
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-teal-accent transition-colors">
                Privacy Policy
              </Link>
              <a
                href="mailto:team@agapelabs.co.uk"
                className="text-sm text-muted-foreground hover:text-teal-accent transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalLayout;
