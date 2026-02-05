import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/dashboard/Analytics";
import Community from "./pages/dashboard/Community";
import Customization from "./pages/dashboard/Customization";
import Tools from "./pages/dashboard/Tools";
import Login from "./pages/Login";
import WatchStream from "./pages/WatchStream";
import ChatOverlay from "./pages/ChatOverlay";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { MobileNav } from "./components/layout/MobileNav";

const queryClient = new QueryClient();

// Authenticated App Shell
const AuthenticatedApp = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col h-dvh overflow-hidden bg-black text-white">
        {/* Main Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/watch/:id" element={<WatchStream />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/community" element={<Community />} />
            <Route path="/dashboard/customization" element={<Customization />} />
            <Route path="/dashboard/tools" element={<Tools />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/overlay/chat/:id" element={<ChatOverlay />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <MobileNav />
      </div>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" expand={true} />
        <AuthenticatedApp />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
