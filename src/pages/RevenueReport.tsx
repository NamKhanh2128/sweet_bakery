import { useState } from "react";
import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { DailyReportPopup } from "@/components/DailyReportPopup";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { format } from "date-fns";

const weeklyData = [
  { day: 0, value: 80 },
  { day: 1, value: 45 },
  { day: 2, value: 75 },
  { day: 3, value: 60 },
  { day: 4, value: 90 },
  { day: 5, value: 25 },
  { day: 6, value: 10 },
];

const RevenueReport = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2021, 5, 22));
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("12/10/2025");

  return (
    <div className="min-h-screen flex flex-col bg-bakery-cream">
      <HeaderBar userRole="Employee" />
      
      <main className="flex-1 px-8 py-6">
        <h1 className="text-5xl font-bold text-primary mb-2">Revenue Report</h1>
        <div className="h-1 bg-primary w-full mb-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tables */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-primary">Today's revenue report</h2>
              <span className="date-badge">12/10/2025</span>
            </div>
            
            {/* Main Information Table */}
            <div className="border border-bakery-green rounded overflow-hidden mb-6 max-w-lg">
              <div className="table-header-red text-center py-2 font-medium">
                Main Information
              </div>
              <table className="w-full bg-card">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-2 text-center font-medium border-b border-border">Information</th>
                    <th className="px-4 py-2 text-center font-medium border-b border-border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">Total revenue</td>
                    <td className="px-4 py-2">120,000,000 đ</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">No. of Orders</td>
                    <td className="px-4 py-2">10000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">Total No. of sold items</td>
                    <td className="px-4 py-2">10000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Average revenue / Order</td>
                    <td className="px-4 py-2">120,000 đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Top 5 Products Table */}
            <div className="border border-bakery-blue rounded overflow-hidden max-w-lg">
              <div className="table-header-blue text-center py-2 font-medium">
                Top 5  best-selling products
              </div>
              <table className="w-full bg-card">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">1. Tiramisu</td>
                    <td className="px-4 py-2 font-bold">10000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">2. Mousse Chocolate</td>
                    <td className="px-4 py-2">9800</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">3. Cheese cake</td>
                    <td className="px-4 py-2">560</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-2 font-medium">4. Cake 1</td>
                    <td className="px-4 py-2">130</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">5. Cake 2</td>
                    <td className="px-4 py-2">115</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Right Column - Calendar */}
          <div>
            <div className="bg-card rounded-lg p-4 shadow-sm border border-border flex flex-col items-center">
              <p className="text-center text-sm font-medium mb-2">Calendar</p>
              <p className="text-center text-muted-foreground text-sm mb-4">Pick a date 📅</p>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  if (d) {
                    setSelectedDate(format(d, "dd/MM/yyyy"));
                    setShowPopup(true);
                  }
                }}
                className="rounded-md border pointer-events-auto"
                defaultMonth={new Date(2021, 5)}
              />
            </div>
          </div>
        </div>
        
        <DailyReportPopup 
          open={showPopup} 
          onOpenChange={setShowPopup}
          date={selectedDate}
        />
        
        <div className="h-1 bg-primary w-full my-8" />
        
        {/* This week report */}
        <h2 className="text-2xl font-bold text-primary mb-4">This week report</h2>
        <p className="text-muted-foreground mb-6">(Today: 12/10/2025)</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(0, 100%, 40%)" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(0, 100%, 40%)", strokeWidth: 2, r: 4 }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-primary font-medium mt-4">Weekly Revenue Trend Line Chart</p>
            </div>
          </div>
          
          <div className="border border-bakery-red rounded overflow-hidden">
            <div className="table-header-red text-center py-2 font-medium">
              Overview
            </div>
            <table className="w-full bg-card">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-center font-medium border-b border-border">Information</th>
                  <th className="px-4 py-2 text-center font-medium border-b border-border">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Total revenue</td>
                  <td className="px-4 py-2">120,000,000 đ</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">No. of Orders</td>
                  <td className="px-4 py-2">10000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Total No. of sold items</td>
                  <td className="px-4 py-2">10000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Average revenue / Order</td>
                  <td className="px-4 py-2">120,000 đ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RevenueReport;
