import { Card } from "@/components/ui/card";
import { Home, Plus, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();

  const reports = [
    {
      id: "NCDC-2025-001",
      disease: "Cholera",
      date: "2025-10-27",
      validationStatus: "Validated",
      severityStatus: "Critical",
      validationColor: "bg-green-100 text-status-validated",
      severityColor: "bg-red-100 text-status-critical",
    },
    {
      id: "NCDC-2025-008",
      disease: "Typhoid",
      date: "2025-10-26",
      validationStatus: "Under review",
      severityStatus: "Medium",
      validationColor: "bg-yellow-100 text-status-under-review",
      severityColor: "bg-orange-100 text-status-medium",
    },
    {
      id: "NCDC-2025-001",
      disease: "Cholera",
      date: "2025-10-27",
      validationStatus: "Validated",
      severityStatus: "Critical",
      validationColor: "bg-green-100 text-status-validated",
      severityColor: "bg-red-100 text-status-critical",
    },
    {
      id: "NCDC-2025-008",
      disease: "Typhoid",
      date: "2025-10-26",
      validationStatus: "Under review",
      severityStatus: "Medium",
      validationColor: "bg-yellow-100 text-status-under-review",
      severityColor: "bg-orange-100 text-status-medium",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-6 py-6">
        <h1 className="text-2xl font-semibold mb-6">My Reports</h1>
        
        <div className="space-y-4">
          {reports.map((report, index) => (
            <Card key={`${report.id}-${index}`} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <p className="text-xs text-muted-foreground">{report.id}</p>
                <span className={`text-xs px-3 py-1 rounded-full ${report.validationColor}`}>
                  {report.validationStatus}
                </span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{report.disease}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{report.date}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${report.severityColor}`}>
                  {report.severityStatus}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t px-6 py-4">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button 
            className="flex flex-col items-center gap-1 text-muted-foreground"
            onClick={() => navigate("/dashboard")}
          >
            <Home className="h-6 w-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground">
            <Plus className="h-6 w-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <FileText className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
