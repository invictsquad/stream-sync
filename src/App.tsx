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
import HelpCenter from "./pages/support/HelpCenter";
import Contact from "./pages/support/Contact";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Guidelines from "./pages/legal/Guidelines";
import Overview from "./pages/dashboard/Overview";
import StreamManager from "./pages/dashboard/StreamManager";
import Earnings from "./pages/dashboard/Earnings";
import Achievements from "./pages/dashboard/Achievements";
import Clips from "./pages/dashboard/Clips";
import Emotes from "./pages/dashboard/Emotes";
import Schedule from "./pages/dashboard/Schedule";
import Interactions from "./pages/dashboard/Interactions";
import Sponsors from "./pages/dashboard/Sponsors";
import Integrations from "./pages/dashboard/Integrations";
import Developers from "./pages/dashboard/Developers";
import ChatSettings from "./pages/dashboard/ChatSettings";
import Referrals from "./pages/dashboard/Referrals";
import Teams from "./pages/dashboard/Teams";
import Music from "./pages/dashboard/Music";
import Subscriptions from "./pages/Subscriptions";
import Inventory from "./pages/Inventory";
import Leaderboards from "./pages/Leaderboards";
import Merch from "./pages/Merch";
import Discover from "./pages/Discover";
import Feedback from "./pages/Feedback";
import About from "./pages/About";
import Press from "./pages/Press";
import StreamSummary from "./pages/dashboard/analytics/StreamSummary";
import AutoModRules from "./pages/dashboard/automod/AutoModRules";
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
            <Route path="/dashboard/overview" element={<Overview />} />
            <Route path="/dashboard/stream-manager" element={<StreamManager />} />
            <Route path="/dashboard/earnings" element={<Earnings />} />
            <Route path="/dashboard/achievements" element={<Achievements />} />
            <Route path="/dashboard/clips" element={<Clips />} />
            <Route path="/dashboard/emotes" element={<Emotes />} />
            <Route path="/dashboard/schedule" element={<Schedule />} />
            <Route path="/dashboard/interactions" element={<Interactions />} />
            <Route path="/dashboard/sponsors" element={<Sponsors />} />
            <Route path="/dashboard/integrations" element={<Integrations />} />
            <Route path="/dashboard/developers" element={<Developers />} />
            <Route path="/dashboard/chat-settings" element={<ChatSettings />} />
            <Route path="/dashboard/referrals" element={<Referrals />} />
            <Route path="/dashboard/teams" element={<Teams />} />
            <Route path="/dashboard/music" element={<Music />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/analytics/summary" element={<StreamSummary />} />
            <Route path="/dashboard/automod" element={<AutoModRules />} />
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
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<About />} />
            <Route path="/press" element={<Press />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/team/:id" element={<Team />} />
            <Route path="/clip/:id" element={<ClipView />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/overlay/chat/:id" element={<ChatOverlay />} />
            <Route path="/login" element={<Navigate to="/" replace />} />

            {/* Support & Legal */}
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/guidelines" element={<Guidelines />} />

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
