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
import GoLive from "./pages/dashboard/GoLive";
import Login from "./pages/Login";
import WatchStream from "./pages/WatchStream";
import ChatOverlay from "./pages/ChatOverlay";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import History from "./pages/History";
import Search from "./pages/Search";
import Messages from "./pages/Messages";
import Team from "./pages/Team";
import ClipView from "./pages/ClipView";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./components/layout/MainLayout";

const queryClient = new QueryClient();

// Authenticated App Shell
const AuthenticatedApp = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/watch/:id" element={<WatchStream />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/community" element={<Community />} />
            <Route path="/dashboard/customization" element={<Customization />} />
            <Route path="/dashboard/tools" element={<Tools />} />
            <Route path="/dashboard/go-live" element={<GoLive />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/history" element={<History />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/team/:id" element={<Team />} />
            <Route path="/clip/:id" element={<ClipView />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/overlay/chat/:id" element={<ChatOverlay />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </MainLayout>
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
