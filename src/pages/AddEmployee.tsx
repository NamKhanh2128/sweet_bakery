import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadZone } from "@/components/UploadZone";
import { toast } from "@/hooks/use-toast";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employeeImage, setEmployeeImage] = useState<string | null>(null);

  const handleSave = () => {
    toast({
      title: "Employee saved successfully",
      description: "The new employee has been added.",
      className: "bg-green-50 border-green-200 text-green-800",
    });
    navigate("/human-resource");
  };

  const handleCancel = () => {
    navigate("/human-resource");
  };

  return (
    <div className="min-h-screen bg-card p-8">
      <h1 className="text-4xl font-bold text-primary mb-2">ADD NEW EMPLOYEE</h1>
      <div className="h-1 bg-primary w-96 mb-8" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <UploadZone className="max-w-md" onImageChange={setEmployeeImage} />
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
                  <td className="px-4 py-2"><input type="text" defaultValue="Ngo Minh Ngoc" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Phone number</td>
                  <td className="px-4 py-2"><input type="text" defaultValue="0912345678" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Email</td>
                  <td className="px-4 py-2"><input type="email" defaultValue="sample@gmail.com" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Start date</td>
                  <td className="px-4 py-2"><input type="text" defaultValue="12/10/2025" className="bg-transparent w-full outline-none" /></td>
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
                  <td className="px-4 py-2"><input type="email" defaultValue="sample@gmail.com" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Password</td>
                  <td className="px-4 py-2"><input type="password" defaultValue="password" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">ID</td>
                  <td className="px-4 py-2"><input type="text" defaultValue="001" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Role</td>
                  <td className="px-4 py-2"><input type="text" defaultValue="Seller" className="bg-transparent w-full outline-none" /></td>
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
                  <td className="px-4 py-2"><input type="text" defaultValue="working / stopped working" className="bg-transparent w-full outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="h-0.5 bg-primary w-full my-8" />
      
      <div className="flex justify-center gap-4">
        <button onClick={handleSave} className="btn-save">
          Save
        </button>
        <button onClick={handleCancel} className="btn-cancel">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
