import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadZone } from "@/components/UploadZone";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { SuccessMessage } from "@/components/SuccessMessage";
import employeeAvatar from "@/assets/employee-avatar.png";

const EmployeeDetail = () => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDelete = () => {
    setShowConfirm(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/human-resource");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-card p-8">
      <h1 className="text-4xl font-bold text-primary mb-2">NGUYEN VAN A</h1>
      <div className="h-1 bg-primary w-96 mb-8" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <UploadZone image={employeeAvatar} className="max-w-md" />
        </div>
        
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="border border-bakery-green rounded overflow-hidden">
            <div className="table-header-red text-center py-2 font-medium">
              Personal Information
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
                  <td className="px-4 py-2 font-medium">Full name</td>
                  <td className="px-4 py-2">Ngo Minh Ngoc</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Phone number</td>
                  <td className="px-4 py-2">0912345678</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Email</td>
                  <td className="px-4 py-2">sample@gmail.com</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Start date</td>
                  <td className="px-4 py-2">12/10/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Log in Information */}
          <div className="border border-bakery-green rounded overflow-hidden">
            <div className="table-header-green text-center py-2 font-medium">
              Log in Information
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
                  <td className="px-4 py-2 font-medium">Log in email</td>
                  <td className="px-4 py-2">sample@gmail.com</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Password</td>
                  <td className="px-4 py-2">password</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">ID</td>
                  <td className="px-4 py-2">001</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Role</td>
                  <td className="px-4 py-2">Seller</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Additional Information */}
          <div className="border border-bakery-gray rounded overflow-hidden">
            <div className="table-header-gray text-center py-2 font-medium">
              Additional Information
            </div>
            <table className="w-full bg-card">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-center font-medium border-b border-border">Information</th>
                  <th className="px-4 py-2 text-center font-medium border-b border-border">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-medium">Status</td>
                  <td className="px-4 py-2">working / stopped working</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="h-0.5 bg-primary w-full my-8" />
      
      <button 
        onClick={() => setShowConfirm(true)}
        className="btn-cancel"
      >
        Remove (Delete) Employee
      </button>
      
      <ConfirmDialog 
        open={showConfirm} 
        onOpenChange={setShowConfirm}
        onConfirm={handleDelete}
      />
      
      <SuccessMessage 
        open={showSuccess}
        onOpenChange={setShowSuccess}
        message="Employee removed successfully"
      />
    </div>
  );
};

export default EmployeeDetail;
