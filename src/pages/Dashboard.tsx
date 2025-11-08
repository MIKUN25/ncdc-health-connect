import { Bell, Plus, Home, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Dr. Adeyemi");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const alerts = [
    {
      id: 1,
      message: "Cholera outbreak confirmed in Yaba area",
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "Your report NCDC-2025-001 has been validated",
      time: "5 hours ago",
    },
    {
      id: 3,
      message: "Cholera outbreak confirmed in Yaba area",
      time: "5 hours ago",
    },
  ];

  const recentReports = [
    {
      id: "NCDC-2025-001",
      disease: "Cholera",
      date: "2025-10-27",
      status: "critical",
      statusLabel: "Critical",
    },
    {
      id: "NCDC-2025-008",
      disease: "Typhoid",
      date: "2025-10-26",
      status: "medium",
      statusLabel: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card px-6 py-6 border-b">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">{userName}</h1>
            <p className="text-sm text-muted-foreground">Lagos general hospital</p>
            <p className="text-xs text-muted-foreground mt-1">ID: HW-2025-089</p>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <Card className="bg-primary text-primary-foreground p-4 rounded-xl">
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs opacity-90 mt-1">Reports</div>
            <div className="text-xs opacity-75">Today</div>
          </Card>
          <Card className="bg-primary text-primary-foreground p-4 rounded-xl">
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs opacity-90 mt-1">Reports</div>
            <div className="text-xs opacity-75">This week</div>
          </Card>
          <Card className="bg-primary text-primary-foreground p-4 rounded-xl">
            <div className="text-2xl font-bold">96%</div>
            <div className="text-xs opacity-90 mt-1">Accuracy</div>
            <div className="text-xs opacity-75">Validated</div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <Button className="w-full h-14 text-base" size="lg">
          <Plus className="mr-2 h-5 w-5" />
          Report New Case
        </Button>
      </div>

      {/* Recent Alerts */}
      <div className="px-6 pb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <Card key={alert.id} className="p-4 flex items-start gap-3 bg-brand-blue-light border-none">
              <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* My Recent Reports */}
      <div className="px-6 pb-6">
        <h2 className="text-lg font-semibold mb-4">My Recent Reports</h2>
        <div className="space-y-3">
          {recentReports.map((report) => (
            <Card key={report.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <p className="text-xs text-muted-foreground">{report.id}</p>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    report.status === "critical"
                      ? "bg-red-100 text-status-critical"
                      : "bg-orange-100 text-status-medium"
                  }`}
                >
                  {report.statusLabel}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{report.disease}</h3>
              <p className="text-sm text-muted-foreground mt-1">{report.date}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t px-6 py-4">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-6 w-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground">
            <Plus className="h-6 w-6" />
          </button>
          <button 
            className="flex flex-col items-center gap-1 text-muted-foreground"
            onClick={() => navigate("/reports")}
          >
            <FileText className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
