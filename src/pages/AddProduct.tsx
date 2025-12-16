import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { HeaderBar } from "@/components/HeaderBar";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { UploadZone } from "@/components/UploadZone";

const productsData = [
  { sku: "PRO001", name: "Cake 1", category: "Birthday Cake", price: "150.000 đ", count: "10000" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
  { sku: "#OR001", name: "Nguyen Van A", category: "001", phone: "0912345678", date: "12:30 12/10/25", price: "150,000 đ", status: "confirmed" },
];

function AddProductPopup({ onClose, onSave }: { onClose: () => void; onSave: () => void }) {
  const [productImage, setProductImage] = useState<string | null>(null);

  const handleSave = () => {
    onSave();
    onClose();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-primary mb-2">Product images</h2>
      <div className="h-0.5 bg-primary w-48 mb-6" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UploadZone className="h-64" onImageChange={setProductImage} />
        
        <div className="space-y-4">
          {/* Main Information */}
          <div className="border border-bakery-green rounded overflow-hidden">
            <div className="table-header-red text-center py-2 font-medium text-sm">
              Main Information
            </div>
            <table className="w-full text-sm bg-card">
              <thead>
                <tr className="bg-muted">
                  <th className="px-3 py-1.5 text-center font-medium border-b border-border">Information</th>
                  <th className="px-3 py-1.5 text-center font-medium border-b border-border">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-1.5 font-medium">Product name</td>
                  <td className="px-3 py-1.5"><input type="text" defaultValue="Cake 01" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-1.5 font-medium">Price</td>
                  <td className="px-3 py-1.5"><input type="text" defaultValue="150,000 đ" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-1.5 font-medium">Category</td>
                  <td className="px-3 py-1.5"><input type="text" defaultValue="Birthday Cake" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr>
                  <td className="px-3 py-1.5 font-medium">Description</td>
                  <td className="px-3 py-1.5"><input type="text" defaultValue="Super Ngon" className="bg-transparent w-full outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Stock Management */}
          <div className="border border-bakery-green rounded overflow-hidden">
            <div className="table-header-green text-center py-2 font-medium text-sm">
              Stock Management
            </div>
            <table className="w-full text-sm bg-card">
              <thead>
                <tr className="bg-muted">
                  <th className="px-3 py-1.5 text-center font-medium border-b border-border">Information</th>
                  <th className="px-3 py-1.5 text-center font-medium border-b border-border">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-1.5 font-medium">Count</td>
                  <td className="px-3 py-1.5"><input type="text" defaultValue="1000000" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-3 py-1.5 font-medium">Status</td>
                  <td className="px-3 py-1.5"><input type="text" defaultValue="Selling" className="bg-transparent w-full outline-none" /></td>
                </tr>
                <tr>
                  <td className="px-3 py-1.5 font-medium">SKU</td>
                  <td className="px-3 py-1.5"><input type="text" defaultValue="PR001" className="bg-transparent w-full outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Additional Information */}
          <div className="border border-bakery-gray rounded overflow-hidden">
            <div className="table-header-gray text-center py-2 font-medium text-sm">
              Additional Information
            </div>
            <table className="w-full text-sm bg-card">
              <thead>
                <tr className="bg-muted">
                  <th className="px-3 py-1.5 text-center font-medium border-b border-border">Information</th>
                  <th className="px-3 py-1.5 text-center font-medium border-b border-border">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-1.5 font-medium">Original Price</td>
                  <td className="px-3 py-1.5"><input type="text" defaultValue="80,000 đ" className="bg-transparent w-full outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="h-0.5 bg-primary w-full my-6" />
      
      <div className="flex justify-center gap-4">
        <button onClick={handleSave} className="btn-save text-base py-2">
          Save
        </button>
        <button onClick={onClose} className="btn-cancel text-base py-2">
          Cancel
        </button>
      </div>
    </div>
  );
}

import { toast } from "@/hooks/use-toast";

const AddProduct = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    toast({
      title: "Product saved successfully",
      description: "The new product has been added.",
      className: "bg-green-50 border-green-200 text-green-800",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bakery-cream">
      <HeaderBar />
      
      <main className="flex-1 px-8 py-6">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-5xl font-bold text-primary">ADD NEW PRODUCT</h1>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="btn-add-new">
                ADD NEW <Plus className="w-5 h-5" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0">
              <AddProductPopup onClose={() => setOpen(false)} onSave={handleSave} />
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="h-1 bg-primary w-full mb-4" />
        
        <h3 className="text-xl font-bold text-primary mb-6">Added product history</h3>
        <div className="h-0.5 bg-gradient-to-r from-secondary to-secondary/50 w-full mb-6" />
        
        <div className="bg-card rounded-lg overflow-hidden border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-4 py-3 text-center font-medium text-sm">Product SKU</th>
                <th className="px-4 py-3 text-center font-medium text-sm">Product name</th>
                <th className="px-4 py-3 text-center font-medium text-sm">Category</th>
                <th className="px-4 py-3 text-center font-medium text-sm">Price</th>
                <th className="px-4 py-3 text-center font-medium text-sm">Count</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product, index) => (
                <tr 
                  key={index} 
                  className="border-b border-border hover:bg-muted/50 cursor-pointer"
                  onClick={() => navigate("/product-detail")}
                >
                  <td className="px-4 py-2 text-sm">{product.sku}</td>
                  <td className="px-4 py-2 text-sm">{product.name}</td>
                  <td className="px-4 py-2 text-sm">{product.category}</td>
                  <td className="px-4 py-2 text-sm">{product.price}</td>
                  <td className="px-4 py-2 text-sm">{product.count || product.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddProduct;
