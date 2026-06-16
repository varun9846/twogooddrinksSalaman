"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/shop/ProductCard";
import type { Product } from "@/lib/products";
import { productsService } from "@/lib/services/productsService";

function getPriceNumber(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export default function ShopPage() {

  //// Make 1 state for page and use it for all. if need only only then make new state.
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");
  const [productsState, setProductsState] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const handlePriceChange = (range: string) => {
    setSelectedPrices((prev) =>
      prev.includes(range) ? prev.filter((item) => item !== range) : [...prev, range],
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedPrices([]);
    setSelectedTags([]);
    setSortBy("latest");
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsState];

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter((product) =>
        [product.product_name, product.product_description, product.product_category, product.Tag]
          .join(" ")
          .toLowerCase()
          .includes(query),
      );
    }

    if (selectedCategory) {
      result = result.filter((product) => product.product_category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      result = result.filter((product) => selectedTags.includes(product.Tag));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((product) => {
        const price = getPriceNumber(product.price);
        return selectedPrices.some((range) => {
          if (range === "Under $15") return price < 15;
          if (range === "$15 - $30") return price >= 15 && price <= 30;
          if (range === "Above $30") return price > 30;
          return true;
        });
      });
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.product_name.localeCompare(b.product_name));
    }

    return result;
  }, [productsState, searchQuery, selectedCategory, selectedPrices, selectedTags, sortBy]);

  // runs on every user intratction
  const hasActiveFilters =
    Boolean(searchQuery) || selectedCategory || selectedPrices.length > 0 || selectedTags.length > 0;

  const productCategories = useMemo(() => {
    return Array.from(new Set(productsState.map((p) => p.product_category)));
  }, [productsState]);

  const productTags = useMemo(() => {
    return Array.from(new Set(productsState.map((p) => p.Tag)));
  }, [productsState]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const data = await productsService.getAllProducts();
        if (!cancelled) {
          if (data?.success && Array.isArray(data.products)) {
            setProductsState(data.products);
            setError(null);
          } else {
            setProductsState([]);
            setError('Failed to load products');
          }
        }
      } catch (error) {
        if (!cancelled) {
          setError('Failed to load products');
          setProductsState([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []); 

  return (
    <main>
      <section className="section-shop overflow-x-hidden py-[50px] max-[767px]:py-[35px]">
        <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="mb-[35px] text-center">
            <p className="font-Poppins text-[14px] text-[#0f766e] font-medium mb-[8px]">
              Hydrate • Heal • Feel Good
            </p>
            <h1 className="font-quicksand text-[34px] max-[767px]:text-[28px] font-bold text-[#3d4750] mb-[10px]">
              Shop Wellness Products
            </h1>
            <p className="font-Poppins text-[15px] text-[#686e7d] max-w-[620px] mx-auto leading-[26px]">
              Explore natural hydration products, jeera drinks, herbal infusions, and healthy daily essentials.
            </p>
          </div>

          <div className="flex flex-wrap mx-[-12px]">
            <aside className="min-[992px]:w-[25%] w-full px-[12px] order-2 max-[991px]:order-1 max-[991px]:mb-[35px]">
              <div className="bb-shop-sidebar sticky top-[88px] space-y-[24px] lg:top-[100px]">
                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Search
                  </h4>
                  <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products..."
                    className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
                  />
                </div>

                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Categories
                  </h4>
                  <ul className="space-y-[4px]">
                    {productCategories.map((category) => {
                      const isSelected = selectedCategory === category;
                      return (
                        <li
                          key={category}
                          onClick={() => handleCategoryClick(category)}
                          className={`flex items-center justify-between py-[10px] px-[8px] rounded-[8px] cursor-pointer transition-all ${
                            isSelected ? "bg-indigo-50/80" : "hover:bg-[#f9fafb]"
                          }`}
                        >
                          <span
                            className={`font-Poppins text-[14px] transition-colors ${
                              isSelected ? "text-[#4f46e5] font-medium" : "text-[#4b5563]"
                            }`}
                          >
                            {category}
                          </span>
                          <span
                            className={`font-Poppins text-[12px] font-medium px-[8px] py-[2px] rounded-full transition-colors ${
                              isSelected ? "bg-[#4f46e5] text-white" : "bg-[#f3f4f6] text-[#6b7280]"
                            }`}
                          >
                            {productsState.filter((product) => product.product_category === category).length}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Price Range
                  </h4>
                  <div className="space-y-[12px]">
                    {["Under $15", "$15 - $30", "Above $30"].map((range) => (
                      <label key={range} className="flex items-center gap-[10px] font-Poppins text-[14px] text-[#4b5563] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedPrices.includes(range)}
                          onChange={() => handlePriceChange(range)}
                          className="w-4 h-4 accent-[#4f46e5]"
                        />
                        {range}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="sidebar-block bg-white border border-[#e5e7eb] rounded-[20px] p-[24px] shadow-sm">
                  <h4 className="font-quicksand text-[18px] font-bold text-[#1f2937] mb-[18px]">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-[8px]">
                    {productTags.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleTagClick(tag)}
                          className={`rounded-full px-[12px] py-[6px] font-Poppins text-[12px] transition ${
                            isSelected
                              ? "bg-[#4f46e5] text-white"
                              : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb]"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {hasActiveFilters ? (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="w-full rounded-[12px] bg-[#3d4750] px-[18px] py-[12px] font-Poppins text-[14px] font-medium text-white transition hover:bg-[#2b2b2d]"
                  >
                    Clear Filters
                  </button>
                ) : null}
              </div>
            </aside>

            <div className="min-[992px]:w-[75%] w-full px-[12px] order-1 max-[991px]:order-2">
              <div className="mb-[24px] flex flex-wrap items-center justify-between gap-[16px] rounded-[20px] border border-[#e5e7eb] bg-white p-[18px] shadow-sm">
                <p className="font-Poppins text-[14px] text-[#686e7d]">
                  Showing <span className="font-semibold text-[#3d4750]">{filteredAndSortedProducts?.length}</span> products
                </p>

                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-[12px] border border-[#e5e7eb] bg-white px-[14px] py-[10px] font-Poppins text-[14px] text-[#4b5563] outline-none focus:border-[#0f766e]"
                >
                  <option value="latest">Sort by latest</option>
                  <option value="name">Sort by name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {filteredAndSortedProducts?.length > 0 ? (
                <div className="grid grid-cols-1 gap-[24px] min-[576px]:grid-cols-2 min-[1200px]:grid-cols-3">
                  {filteredAndSortedProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-[20px] border border-[#e5e7eb] bg-white py-[60px] text-center">
                  <p className="font-Poppins text-[16px] text-[#6b7280]">No products match your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
