import bakeryLogo from "@/assets/bakery-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex items-start gap-4">
            <img src={bakeryLogo} alt="Sweet Bakery" className="w-20 h-20 object-contain" />
            <div>
              <h3 className="font-script text-3xl mb-2">Sweet Bakery</h3>
              <p className="text-sm">No 1 Dai Co Viet, Hai Ba Trung, Ha Noi, Vietnam</p>
              <p className="text-sm">+84 12345678</p>
              <p className="text-sm">sweetbakery@gmai.com</p>
              <p className="text-sm">Opening hours: 7am : 11pm</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Menu / Products</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact / Order</a>
            <a href="#" className="hover:underline">FAQ / Policy</a>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Tiktok</a>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="bg-card rounded-lg p-2">
              <img 
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=40&fit=crop" 
                alt="Certification" 
                className="h-10 object-contain"
              />
            </div>
            <p className="text-sm">© 2025 Savor Cake. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
