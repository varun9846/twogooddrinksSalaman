"use client";

import { useState } from "react";
import ProductCard from '@/components/shop/ProductCard';
import { productCategories, products, productTags } from "@/lib/products";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-[#f9fafb] min-h-screen">
      <section className="section-shop py-[60px] max-[767px]:py-[40px]">
        <div className="mx-auto px-[16px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          
          {/* Header Section */}
          <div className="mb-[40px] text-center max-w-[600px] mx-auto">
            <h1 className="font-quicksand text-[36px] max-[575px]:text-[28px] font-bold text-[#1f2937] tracking-tight">
              Wellness Products
            </h1>
            <p className="font-Poppins text-[15px] text-[#6b7280] mt-[10px] leading-relaxed">
              Natural drinks, herbal blends, hydration packs, and healthy snacks curated for your vitality.
            </p>
          </div>

          <div className="flex flex-wrap mx-[-12px]">
            {/* Main Shop Content Area */}
            <div className="min-[992px]:w-[75%] w-full px-[12px] order-1 max-[991px]:order-2">
              <div className="bb-shop-pro-inner">
                
                {/* Utility Controls Bar (Search + Info + Sort) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] mb-[30px] p-[20px] bg-white border border-[#e5e7eb] rounded-[16px] shadow-sm">
                  <div className="flex-1 max-w-md w-full relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Search wellness products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-[10px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[12px] font-Poppins text-[14px] text-[#1f2937] outline-none focus:border-[#4f46e5] focus:bg-white transition-all duration-200"
                    />
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-[16px] w-full sm:w-auto">
                    <p className="font-Poppins text-[14px] text-[#6b7280]">
                      Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> results
                    </p>

                    <select className="border border-[#e5e7eb] rounded-[12px] px-[14px] py-[10px] bg-white font-Poppins text-[14px] text-[#4b5563] outline-none cursor-pointer hover:border-gray-400 focus:border-[#4f46e5] transition-all">
                      <option>Sort by latest</option>
                      <option>Sort by price</option>
                      <option>Sort by popularity</option>
                    </select>
                  </div>
                </div>

                {/* Products Dynamic Grid */}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 min-[576px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-[24px]">
                    {filteredProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className="group flex flex-col justify-between bg-white border border-[#e5e7eb] rounded-[20px] p-[16px] transition-all duration-300 hover:shadow-xl hover:border-transparent"
                      >
                        {/* Standardized Card Rendering Component */}
                        <ProductCard product={product} />
                        
                        {/* Action Layout Context Block */}
                        <div className="mt-[20px] pt-[16px] border-t border-[#f3f4f6] flex flex-col gap-[10px]">
                          <button 
                            onClick={() => console.log(`Added ${product.product_name} to cart`)}
                            className="w-full bg-[#f3f4f6] text-[#1f2937] font-Poppins font-medium text-[14px] py-[11px] rounded-[12px] transition-all duration-200 hover:bg-[#e5e7eb] active:scale-[0.98]"
                          >
                            Add to Cart
                          </button>
                          <button 
                            onClick={() => console.log(`Buying ${product.product_name} now`)}
                            className="w-full bg-[#4f46e5] text-white font-Poppins font-semibold text-[14px] py-[11px] rounded-[12px] transition-all duration-200 hover:bg-[#4338ca] hover:shadow-md hover:shadow-indigo-100 active:scale-[0.98]"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-[60px] bg-white rounded-[20px] border border-[#e5e7eb]">
                    <p className="font-Poppins text-[16px] text-[#6b7280]">No products match your search criteria.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Sticky Filter Panel */}
            <aside className="min-[992px]:w-[25%] w-full px-[12px] order-2 max-[991px]:order-1 max-[991px]:mb-[40px]">
              <div className="bb-shop-sidebar sticky top-[30px] space-y-[24px]">
                
                {/* Categories widget */}
                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Categories
                  </h4>
                  <ul className="space-y-[4px]">
                    {productCategories.map((category) => (
                      <li
                        key={category}
                        className="flex items-center justify-between py-[10px] px-[8px] rounded-[8px] hover:bg-[#f9fafb] group/item cursor-pointer transition-all"
                      >
                        <span className="font-Poppins text-[14px] text-[#4b5563] group-hover/item:text-[#4f46e5] transition-colors">
                          {category}
                        </span>
                        <span className="font-Poppins text-[12px] font-medium bg-[#f3f4f6] text-[#6b7280] px-[8px] py-[2px] rounded-full group-hover/item:bg-indigo-50 group-hover/item:text-[#4f46e5]">
                          {products.filter((product) => product.product_category === category).length}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Filter Widget */}
                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Price Range
                  </h4>
                  <div className="space-y-[12px]">
                    {['Under $15', '$15 - $30', 'Above $30'].map((range, index) => (
                      <label key={index} className="flex items-center gap-[10px] font-Poppins text-[14px] text-[#4b5563] cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded text-[#4f46e5] border-gray-300 focus:ring-[#4f46e5] accent-[#4f46e5]" 
                        /> 
                        <span className="group-hover:text-gray-900 transition-colors">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tags Filter Widget */}
                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Popular Tags
                  </h4>
                  <div className="flex flex-wrap gap-[8px]">
                    {productTags.map((tag) => (
                      <span
                        key={tag}
                        className="font-Poppins text-[13px] text-[#4b5563] bg-white border border-[#e5e7eb] rounded-full px-[14px] py-[6px] cursor-pointer hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}