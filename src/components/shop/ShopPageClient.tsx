"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/shop/ProductCard";
import { productsService } from "@/lib/services/productsService";
import type { ProductDto } from "@/types/product";

const MIN_PRICE = 0;
const MAX_PRICE = 300;

type SortOption = "latest" | "name-asc" | "name-desc" | "price-low" | "price-high";

function getPriceNumber(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

function getUniqueValues(values: string[]) {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean))).sort(
    (a, b) => a.localeCompare(b),
  );
}

export default function ShopPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const queryFromUrl = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(queryFromUrl);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("latest");
  const [priceRange, setPriceRange] = useState({ min: MIN_PRICE, max: MAX_PRICE });
  const [productsState, setProductsState] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
    setSearchQuery(queryFromUrl);
  }, [categoryFromUrl, queryFromUrl]);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      setLoading(true);
      setError(null);

      try {
        const data = await productsService.getAllProducts();

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
  }, []);

  const productCategories = useMemo(() => {
    return getUniqueValues(productsState.map((product) => product.product_category));
  }, [productsState]);

  const productTags = useMemo(() => {
    return getUniqueValues(productsState.map((product) => product.Tag));
  }, [productsState]);

  const handleCategoryClick = (category: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (selectedCategory === category) {
      nextParams.delete("category");
    } else {
      nextParams.set("category", category);
    }

    const queryString = nextParams.toString();
    router.push(queryString ? `/shop?${queryString}` : "/shop");
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const handleMinPriceChange = (value: number) => {
    setPriceRange((prev) => ({
      min: Math.min(value, prev.max),
      max: prev.max,
    }));
  };

  const handleMaxPriceChange = (value: number) => {
    setPriceRange((prev) => ({
      min: prev.min,
      max: Math.max(value, prev.min),
    }));
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSortBy("latest");
    setPriceRange({ min: MIN_PRICE, max: MAX_PRICE });
    router.push("/shop");
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsState];

    if (selectedCategory) {
      result = result.filter(
        (product) => product.product_category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();

      result = result.filter((product) =>
        [
          product.product_name,
          product.product_description,
          product.product_subdescription,
          product.product_category,
          product.Tag,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query),
      );
    }

    result = result.filter((product) => {
      const price = getPriceNumber(product.price);
      return price >= priceRange.min && price <= priceRange.max;
    });

    if (selectedTags.length > 0) {
      result = result.filter((product) => selectedTags.includes(product.Tag));
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
    }

    if (sortBy === "name-asc") {
      result.sort((a, b) => a.product_name.localeCompare(b.product_name));
    }

    if (sortBy === "name-desc") {
      result.sort((a, b) => b.product_name.localeCompare(a.product_name));
    }

    return result;
  }, [productsState, searchQuery, selectedCategory, selectedTags, priceRange, sortBy]);

  const hasActiveFilters =
    Boolean(searchQuery) ||
    Boolean(selectedCategory) ||
    selectedTags.length > 0 ||
    priceRange.min !== MIN_PRICE ||
    priceRange.max !== MAX_PRICE;

  return (
    <main>
      <Breadcrumb title={selectedCategory || "Shop"} current={selectedCategory || "Shop"} />

      <section className="section-shop overflow-x-hidden py-[50px] max-[767px]:py-[35px]">
        <div className="bb-container">
          <div className="mb-[35px] text-center" data-aos="fade-up">
            <p className="mb-[8px] font-Poppins text-[14px] font-medium uppercase tracking-[0.18rem] text-[#0f766e]">
              Hydrate • Heal • Feel Good
            </p>
            <h1 className="mb-[10px] font-quicksand text-[34px] font-bold text-[#3d4750] max-[767px]:text-[28px]">
              {selectedCategory || "Shop Wellness Products"}
            </h1>
            <p className="mx-auto max-w-[650px] font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
              Explore packaged drinking water, healthy drinks, herbal infusions, and everyday hydration products.
            </p>
          </div>

          <div className="flex flex-wrap mx-[-12px]">
            <aside className="w-full px-[12px] max-[991px]:mb-[35px] min-[992px]:w-[25%]">
              <div className="bb-shop-sidebar sticky top-[150px] overflow-hidden rounded-[20px] border border-[#eee] bg-white shadow-sm">
                <div className="bb-sidebar-block border-b border-[#eee] p-[20px]" data-aos="fade-right">
                  <div className="mb-[18px] flex items-center justify-between gap-[12px]">
                    <h4 className="font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                      Search
                    </h4>
                    <i className="ri-search-line text-[20px] text-[#0f766e]" />
                  </div>
                  <div className="relative">
                    <input
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search products..."
                      className="bb-input pr-[42px]"
                    />
                    <i className="ri-search-2-line absolute right-[14px] top-1/2 -translate-y-1/2 text-[18px] text-[#9ca3af]" />
                  </div>
                </div>

                <div className="bb-sidebar-block border-b border-[#eee] p-[20px]" data-aos="fade-right" data-aos-delay="80">
                  <div className="mb-[18px] flex items-center justify-between gap-[12px]">
                    <h4 className="font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                      Categories
                    </h4>
                    <i className="ri-list-check-2 text-[20px] text-[#0f766e]" />
                  </div>

                  {productCategories.length > 0 ? (
                    <ul className="space-y-[12px]">
                      {productCategories.map((category) => {
                        const isSelected = selectedCategory === category;
                        const count = productsState.filter(
                          (product) => product.product_category === category,
                        ).length;

                        return (
                          <li key={category}>
                            <button
                              type="button"
                              onClick={() => handleCategoryClick(category)}
                              className={`group flex w-full items-center justify-between rounded-[10px] px-[10px] py-[8px] text-left font-Poppins text-[14px] transition ${
                                isSelected
                                  ? "bg-[#f0fdfa] text-[#0f766e]"
                                  : "text-[#777] hover:bg-[#f8f8fb] hover:text-[#0f766e]"
                              }`}
                            >
                              <span className="flex items-center gap-[10px]">
                                <span
                                  className={`h-[18px] w-[18px] rounded-[5px] border transition ${
                                    isSelected
                                      ? "border-[#0f766e] bg-[#0f766e]"
                                      : "border-[#eee] bg-white group-hover:border-[#0f766e]"
                                  }`}
                                >
                                  {isSelected ? (
                                    <i className="ri-check-line block text-center text-[14px] leading-[18px] text-white" />
                                  ) : null}
                                </span>
                                {category}
                              </span>
                              <span className="rounded-full bg-[#f8f8fb] px-[8px] py-[2px] text-[12px] text-[#686e7d]">
                                {count}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="font-Poppins text-[14px] text-[#686e7d]">No categories found.</p>
                  )}
                </div>

                <div className="bb-sidebar-block border-b border-[#eee] p-[20px]" data-aos="fade-right" data-aos-delay="120">
                  <div className="mb-[18px] flex items-center justify-between gap-[12px]">
                    <h4 className="font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                      Price Range
                    </h4>
                    <i className="ri-money-rupee-circle-line text-[20px] text-[#0f766e]" />
                  </div>

                  <div className="mb-[16px] rounded-[10px] border border-[#eee] bg-white p-[10px] text-center font-Poppins text-[15px] font-medium text-[#3d4750]">
                    ₹{priceRange.min} — ₹{priceRange.max}
                  </div>

                  <div className="space-y-[14px]">
                    <div>
                      <div className="mb-[7px] flex justify-between font-Poppins text-[12px] text-[#686e7d]">
                        <span>Min</span>
                        <span>₹{priceRange.min}</span>
                      </div>
                      <input
                        type="range"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={10}
                        value={priceRange.min}
                        onChange={(event) => handleMinPriceChange(Number(event.target.value))}
                        className="w-full accent-[#0f766e]"
                      />
                    </div>

                    <div>
                      <div className="mb-[7px] flex justify-between font-Poppins text-[12px] text-[#686e7d]">
                        <span>Max</span>
                        <span>₹{priceRange.max}</span>
                      </div>
                      <input
                        type="range"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={10}
                        value={priceRange.max}
                        onChange={(event) => handleMaxPriceChange(Number(event.target.value))}
                        className="w-full accent-[#0f766e]"
                      />
                    </div>
                  </div>
                </div>

                {productTags.length > 0 ? (
                  <div className="bb-sidebar-block p-[20px]" data-aos="fade-right" data-aos-delay="200">
                    <div className="mb-[18px] flex items-center justify-between gap-[12px]">
                      <h4 className="font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                        Tags
                      </h4>
                      <i className="ri-price-tag-3-line text-[20px] text-[#0f766e]" />
                    </div>

                    <div className="flex flex-wrap gap-[8px]">
                      {productTags.map((tag) => {
                        const selected = selectedTags.includes(tag);

                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => handleTagClick(tag)}
                            className={`rounded-[10px] border px-[14px] py-[6px] font-Poppins text-[13px] capitalize leading-[24px] transition ${
                              selected
                                ? "border-[#0f766e] bg-[#0f766e] text-white"
                                : "border-[#eee] bg-white text-[#686e7d] hover:border-[#0f766e] hover:bg-[#0f766e] hover:text-white"
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>

              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="mt-[18px] w-full rounded-[10px] bg-[#3d4750] px-[18px] py-[12px] font-Poppins text-[14px] font-medium text-white transition hover:bg-[#0f766e]"
                >
                  Clear Filters
                </button>
              ) : null}
            </aside>

            <div className="w-full px-[12px] min-[992px]:w-[75%]">
              <div className="mb-[24px] flex flex-wrap items-center justify-between gap-[16px] rounded-[20px] border border-[#eee] bg-white p-[15px] shadow-sm" data-aos="fade-up">
                <div className="flex items-center gap-[8px]">
                  <button
                    type="button"
                    aria-label="Grid view"
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border border-[#eee] bg-[#3d4750] text-white transition hover:bg-[#0f766e]"
                  >
                    <i className="ri-layout-grid-line text-[18px]" />
                  </button>
                  <button
                    type="button"
                    aria-label="List view"
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border border-[#eee] bg-white text-[#686e7d] transition hover:bg-[#0f766e] hover:text-white"
                  >
                    <i className="ri-list-check text-[18px]" />
                  </button>
                  <p className="ml-[6px] font-Poppins text-[14px] text-[#686e7d] max-[575px]:w-full max-[575px]:ml-0 max-[575px]:mt-[8px]">
                    Showing <span className="font-semibold text-[#3d4750]">{filteredAndSortedProducts.length}</span> products
                  </p>
                </div>

                <label className="flex items-center gap-[10px] rounded-[10px] border border-[#eee] bg-[#f8f8fb] px-[12px] py-[8px] font-Poppins text-[14px] text-[#686e7d]">
                  <i className="ri-sort-desc text-[18px] text-[#0f766e]" />
                  <span>Sort by</span>
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value as SortOption)}
                    className="bg-transparent font-Poppins text-[14px] text-[#3d4750] outline-none"
                  >
                    <option value="latest">Latest</option>
                    <option value="name-asc">Name, A to Z</option>
                    <option value="name-desc">Name, Z to A</option>
                    <option value="price-low">Price, low to high</option>
                    <option value="price-high">Price, high to low</option>
                  </select>
                </label>
              </div>

              {loading ? (
                <div className="flex justify-center rounded-[20px] border border-[#eee] bg-white py-[70px]">
                  <span className="bb-loader-ring" />
                </div>
              ) : error ? (
                <div className="rounded-[20px] border border-red-100 bg-red-50 py-[60px] text-center">
                  <p className="font-Poppins text-[16px] text-red-600">{error}</p>
                </div>
              ) : filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-[24px] min-[576px]:grid-cols-2 min-[1200px]:grid-cols-3">
                  {filteredAndSortedProducts.map((product, index) => (
                    <div key={product.id} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-[20px] border border-[#eee] bg-white py-[60px] text-center">
                  <i className="ri-inbox-2-line mb-[12px] block text-[40px] text-[#0f766e]" />
                  <p className="font-Poppins text-[16px] text-[#686e7d]">
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
