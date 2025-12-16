import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { ToggleableSidebar } from "@/components/ToggleableSidebar";
import AdminDashboard from "./pages/AdminDashboard";
import RevenueReport from "./pages/RevenueReport";
import RevenueReportDetail from "./pages/RevenueReportDetail";
import HumanResource from "./pages/HumanResource";
import EmployeeDetail from "./pages/EmployeeDetail";
import AddEmployee from "./pages/AddEmployee";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <ToggleableSidebar />
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/revenue-report" element={<RevenueReport />} />
            <Route path="/revenue-report-detail" element={<RevenueReportDetail />} />
            <Route path="/human-resource" element={<HumanResource />} />
            <Route path="/employee-detail" element={<EmployeeDetail />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
