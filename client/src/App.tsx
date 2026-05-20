import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);

    // Disable keyboard shortcuts for developer tools
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 - Developer Tools
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I - Developer Tools (Windows/Linux)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
      }
      // Ctrl+Shift+J - Console (Windows/Linux)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
      }
      // Cmd+Option+I - Developer Tools (Mac)
      if (e.metaKey && e.altKey && e.key === 'i') {
        e.preventDefault();
      }
      // Ctrl+C - Copy
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
      }
      // Ctrl+X - Cut
      if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
        e.preventDefault();
      }
      // Ctrl+U - View Source
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Disable text selection
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
