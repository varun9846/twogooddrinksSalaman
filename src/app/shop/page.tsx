"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/shop/ProductCard";
import { productsService } from "@/lib/services/productsService";
import type { ProductDto } from "@/types/product";

const SHOP_CATEGORIES = [
  "Healthy Drinks",
  "Packaged Drinking Water",
  "Herbal Infusions",
];

function getPriceNumber(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

function ShopPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryFromUrl,
  );
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");
  const [productsState, setProductsState] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      setLoading(true);
      setError(null);

      try {
        const data = await productsService.getAllProducts(
          categoryFromUrl || undefined,
        );

        if (cancelled) return;

        if (data?.success && Array.isArray(data.products)) {
          setProductsState(data.products);
        } else {
          setProductsState([]);
          setError("Failed to load products");
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to load products", error);
          setProductsState([]);
          setError("Failed to load products");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, [categoryFromUrl]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      router.push("/shop");
      return;
    }

    router.push(`/shop?category=${encodeURIComponent(category)}`);
  };

  const handlePriceChange = (range: string) => {
    setSelectedPrices((prev) =>
      prev.includes(range)
        ? prev.filter((item) => item !== range)
        : [...prev, range],
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedPrices([]);
    setSelectedTags([]);
    setSortBy("latest");
    router.push("/shop");
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsState];

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter((product) =>
        [
          product.product_name,
          product.product_description,
          product.product_category,
          product.Tag,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query),
      );
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
  }, [productsState, searchQuery, selectedPrices, selectedTags, sortBy]);

  const hasActiveFilters =
    Boolean(searchQuery) ||
    Boolean(selectedCategory) ||
    selectedPrices.length > 0 ||
    selectedTags.length > 0;

  const productTags = useMemo(() => {
    return Array.from(new Set(productsState.map((p) => p.Tag).filter(Boolean)));
  }, [productsState]);

  return (
    <main>
      <section className="section-shop overflow-x-hidden py-[50px] max-[767px]:py-[35px]">
        <div className="mx-auto px-[12px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="mb-[35px] text-center">
            <p className="mb-[8px] font-Poppins text-[14px] font-medium text-[#0f766e]">
              Hydrate • Heal • Feel Good
            </p>
            <h1 className="mb-[10px] font-quicksand text-[34px] font-bold text-[#3d4750] max-[767px]:text-[28px]">
              {selectedCategory || "Shop Wellness Products"}
            </h1>
            <p className="mx-auto max-w-[620px] font-Poppins text-[15px] leading-[26px] text-[#686e7d]">
              Explore natural hydration products, healthy drinks, packaged
              drinking water, and herbal infusions.
            </p>
          </div>

          <div className="flex flex-wrap mx-[-12px]">
            <aside className="order-2 w-full px-[12px] max-[991px]:order-1 max-[991px]:mb-[35px] min-[992px]:w-[25%]">
              <div className="bb-shop-sidebar sticky top-[88px] space-y-[24px] lg:top-[100px]">
                <div className="sidebar-block rounded-[20px] border border-[#e5e7eb] bg-white p-[24px] shadow-sm">
                  <h4 className="mb-[18px] font-quicksand text-[18px] font-bold text-[#1f2937]">
                    Search
                  </h4>
                  <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products..."
                    className="w-full rounded-[12px] border border-[#e5e7eb] px-[14px] py-[12px] font-Poppins text-[14px] outline-none focus:border-[#0f766e]"
                  />
                </div>

                <div className="sidebar-block rounded-[20px] border border-[#e5e7eb] bg-white p-[24px] shadow-sm">
                  <h4 className="mb-[18px] font-quicksand text-[18px] font-bold text-[#1f2937]">
                    Categories
                  </h4>
                  <ul className="space-y-[4px]">
                    {SHOP_CATEGORIES.map((category) => {
                      const isSelected = selectedCategory === category;

                      return (
                        <li
                          key={category}
                          onClick={() => handleCategoryClick(category)}
                          className={`flex cursor-pointer items-center justify-between rounded-[8px] px-[8px] py-[10px] transition-all ${
                            isSelected ? "bg-[#f0fdfa]" : "hover:bg-[#f9fafb]"
                          }`}
                        >
                          <span
                            className={`font-Poppins text-[14px] transition-colors ${
                              isSelected
                                ? "font-medium text-[#0f766e]"
                                : "text-[#4b5563]"
                            }`}
                          >
                            {category}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="sidebar-block rounded-[20px] border border-[#e5e7eb] bg-white p-[24px] shadow-sm">
                  <h4 className="mb-[18px] font-quicksand text-[18px] font-bold text-[#1f2937]">
                    Price Range
                  </h4>
                  <div className="space-y-[12px]">
                    {["Under $15", "$15 - $30", "Above $30"].map((range) => (
                      <label
                        key={range}
                        className="flex cursor-pointer items-center gap-[10px] font-Poppins text-[14px] text-[#4b5563]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedPrices.includes(range)}
                          onChange={() => handlePriceChange(range)}
                          className="h-4 w-4 accent-[#0f766e]"
                        />
                        {range}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="sidebar-block rounded-[20px] border border-[#e5e7eb] bg-white p-[24px] shadow-sm">
                  <h4 className="mb-[18px] font-quicksand text-[18px] font-bold text-[#1f2937]">
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
                              ? "bg-[#0f766e] text-white"
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

            <div className="order-1 w-full px-[12px] max-[991px]:order-2 min-[992px]:w-[75%]">
              <div className="mb-[24px] flex flex-wrap items-center justify-between gap-[16px] rounded-[20px] border border-[#e5e7eb] bg-white p-[18px] shadow-sm">
                <p className="font-Poppins text-[14px] text-[#686e7d]">
                  Showing{" "}
                  <span className="font-semibold text-[#3d4750]">
                    {filteredAndSortedProducts.length}
                  </span>{" "}
                  products
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

              {loading ? (
                <div className="rounded-[20px] border border-[#e5e7eb] bg-white py-[60px] text-center">
                  <p className="font-Poppins text-[16px] text-[#6b7280]">
                    Loading products...
                  </p>
                </div>
              ) : error ? (
                <div className="rounded-[20px] border border-red-100 bg-red-50 py-[60px] text-center">
                  <p className="font-Poppins text-[16px] text-red-600">{error}</p>
                </div>
              ) : filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-[24px] min-[576px]:grid-cols-2 min-[1200px]:grid-cols-3">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-[20px] border border-[#e5e7eb] bg-white py-[60px] text-center">
                  <p className="font-Poppins text-[16px] text-[#6b7280]">
                    No products match your search criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <main>
          <section className="py-[60px] text-center">
            <p className="font-Poppins text-[16px] text-[#6b7280]">
              Loading shop...
            </p>
          </section>
        </main>
      }
    >
      <ShopPageContent />
    </Suspense>
  );
}
