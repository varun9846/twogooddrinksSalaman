'use client';
import { useUiStore } from '@/store/useUiStore';

export default function CartSidebar() {
  const { isCartOpen, toggleCart } = useUiStore();

  return (
    <>
      {/* Backdrop Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 sidebar-transition ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />
      
      {/* Sidebar Wrapper panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-2xl sidebar-transition transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold text-gray-800">Your Shopping Cart</h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-black text-2xl">&times;</button>
          </div>
          
          {/* Scrollable Cart items element container */}
          <div className="flex-1 overflow-y-auto py-4">
            <p className="text-gray-500 text-center mt-10">Your cart is currently empty.</p>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Subtotal:</span>
              <span>$0.00</span>
            </div>
            <button className="w-full bg-[#6c7fd8] text-white py-3 rounded-md font-medium hover:bg-[#5a6cb8] transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}