"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/shop/ProductCard";
import { productsService } from "@/lib/services/productsService";
import type { ProductDto } from "@/types/product";

const SHOP_CATEGORIES = [
  "Packaged Drinking Water",
  "Healthy Drinks",
  "Herbal Infusions",
  "Natural Drinking Water",
  "Jeera Drink",
  "Healthy Snacks",
];

const PACK_SIZES = ["500 ml", "1 L", "5 L", "20 L", "Bulk Pack"];

function getPriceNumber(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export default function ShopPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const queryFromUrl = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(queryFromUrl);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");
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
        const data = await productsService.getAllProducts(categoryFromUrl || undefined);
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
    setSelectedPrices([]);
    setSelectedTags([]);
    setSortBy("latest");
    router.push("/shop");
  };

  const productTags = useMemo(() => {
    return Array.from(new Set(productsState.map((product) => product.Tag).filter(Boolean)));
  }, [productsState]);

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
          if (range === "Under 15") return price < 15;
          if (range === "15 - 30") return price >= 15 && price <= 30;
          if (range === "Above 30") return price > 30;
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

  return (
    <main>
      <Breadcrumb title={selectedCategory || "Shop"} current={selectedCategory || "Shop"} />

      <section className="section-category py-[35px]">
        <div className="bb-container">
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {SHOP_CATEGORIES.slice(0, 4).map((category, index) => (
              <button
                type="button"
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`rounded-[18px] border p-[20px] text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  selectedCategory === category
                    ? "border-[#0f766e] bg-[#f0fdfa]"
                    : "border-[#eee] bg-white"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <i className="ri-drop-line mb-[12px] block text-[28px] text-[#0f766e]" />
                <span className="font-quicksand text-[18px] font-bold text-[#3d4750]">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shop overflow-x-hidden pb-[60px] max-[767px]:pb-[40px]">
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
            <aside className="order-2 w-full px-[12px] max-[991px]:order-1 max-[991px]:mb-[35px] min-[992px]:w-[25%]">
              <div className="bb-shop-sidebar sticky top-[150px] space-y-[24px]">
                <div className="rounded-[20px] border border-[#eee] bg-white p-[20px] shadow-sm" data-aos="fade-right">
                  <h4 className="mb-[18px] font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                    Search
                  </h4>
                  <input
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products..."
                    className="bb-input"
                  />
                </div>

                <div className="rounded-[20px] border border-[#eee] bg-white p-[20px] shadow-sm" data-aos="fade-right" data-aos-delay="80">
                  <h4 className="mb-[18px] font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                    Categories
                  </h4>
                  <ul className="space-y-[12px]">
                    {SHOP_CATEGORIES.map((category) => (
                      <li key={category}>
                        <button
                          type="button"
                          onClick={() => handleCategoryClick(category)}
                          className={`flex w-full items-center justify-between rounded-[10px] px-[10px] py-[8px] text-left font-Poppins text-[14px] transition ${
                            selectedCategory === category
                              ? "bg-[#f0fdfa] text-[#0f766e]"
                              : "text-[#777] hover:bg-[#f8f8fb] hover:text-[#0f766e]"
                          }`}
                        >
                          <span>{category}</span>
                          <i className="ri-arrow-right-s-line" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[20px] border border-[#eee] bg-white p-[20px] shadow-sm" data-aos="fade-right" data-aos-delay="120">
                  <h4 className="mb-[18px] font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                    Price Range
                  </h4>
                  <div className="space-y-[13px]">
                    {["Under 15", "15 - 30", "Above 30"].map((range) => (
                      <label key={range} className="bb-sidebar-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedPrices.includes(range)}
                          onChange={() => handlePriceChange(range)}
                        />
                        {range}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="rounded-[20px] border border-[#eee] bg-white p-[20px] shadow-sm" data-aos="fade-right" data-aos-delay="160">
                  <h4 className="mb-[18px] font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                    Pack Size
                  </h4>
                  <div className="space-y-[13px]">
                    {PACK_SIZES.map((size) => (
                      <label key={size} className="bb-sidebar-checkbox">
                        <input type="checkbox" />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>

                {productTags.length > 0 ? (
                  <div className="rounded-[20px] border border-[#eee] bg-white p-[20px] shadow-sm" data-aos="fade-right" data-aos-delay="200">
                    <h4 className="mb-[18px] font-quicksand text-[18px] font-bold tracking-[0.03rem] text-[#3d4750]">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-[8px]">
                      {productTags.map((tag) => {
                        const selected = selectedTags.includes(tag);
                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => handleTagClick(tag)}
                            className={`rounded-full px-[12px] py-[6px] font-Poppins text-[12px] transition ${
                              selected
                                ? "bg-[#0f766e] text-white"
                                : "bg-[#f8f8fb] text-[#686e7d] hover:bg-[#0f766e] hover:text-white"
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                {hasActiveFilters ? (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="w-full rounded-[10px] bg-[#3d4750] px-[18px] py-[12px] font-Poppins text-[14px] font-medium text-white transition hover:bg-[#0f766e]"
                  >
                    Clear Filters
                  </button>
                ) : null}
              </div>
            </aside>

            <div className="order-1 w-full px-[12px] max-[991px]:order-2 min-[992px]:w-[75%]">
              <div className="mb-[24px] flex flex-wrap items-center justify-between gap-[16px] rounded-[20px] border border-[#eee] bg-white p-[18px] shadow-sm" data-aos="fade-up">
                <p className="font-Poppins text-[14px] text-[#686e7d]">
                  Showing <span className="font-semibold text-[#3d4750]">{filteredAndSortedProducts.length}</span> products
                </p>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-[10px] border border-[#eee] bg-white px-[14px] py-[10px] font-Poppins text-[14px] text-[#686e7d] outline-none focus:border-[#0f766e]"
                >
                  <option value="latest">Sort by latest</option>
                  <option value="name">Sort by name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
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
