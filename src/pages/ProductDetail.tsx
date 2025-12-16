import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadZone } from "@/components/UploadZone";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { SuccessMessage } from "@/components/SuccessMessage";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDelete = () => {
    setShowConfirm(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/add-product");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-card p-8">
      <h1 className="text-4xl font-bold text-primary mb-2">CAKE 01</h1>
      <div className="h-1 bg-primary w-96 mb-8" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <UploadZone className="max-w-md" />
        </div>
        
        <div className="space-y-6">
          {/* Main Information */}
          <div className="border border-bakery-green rounded overflow-hidden">
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
                  <td className="px-4 py-2 font-medium">Product name</td>
                  <td className="px-4 py-2">Cake 01</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Price</td>
                  <td className="px-4 py-2">150,000 đ</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Category</td>
                  <td className="px-4 py-2">Birthday Cake</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Description</td>
                  <td className="px-4 py-2">Super Ngon</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Stock Management */}
          <div className="border border-bakery-green rounded overflow-hidden">
            <div className="table-header-green text-center py-2 font-medium">
              Stock Management
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
                  <td className="px-4 py-2 font-medium">Count</td>
                  <td className="px-4 py-2">10000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-medium">Status</td>
                  <td className="px-4 py-2">Selling</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">SKU</td>
                  <td className="px-4 py-2">PRO001</td>
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
                  <td className="px-4 py-2 font-medium">Original Price</td>
                  <td className="px-4 py-2">80,000 đ</td>
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
        Remove (Delete) Product
      </button>
      
      <ConfirmDialog 
        open={showConfirm} 
        onOpenChange={setShowConfirm}
        onConfirm={handleDelete}
        type="product"
      />
      
      <SuccessMessage 
        open={showSuccess}
        onOpenChange={setShowSuccess}
        message="Product removed successfully"
      />
    </div>
  );
};

export default ProductDetail;