INSERT INTO products (id, product_name, product_description, product_category, price, stock, image, badge, tag)
VALUES
  ('pure-spring-water-daily-pack', 'Pure Spring Water Daily Pack', 'Clean and refreshing bottled water for everyday hydration.', 'Natural Drinking Water', 15, 24, '/assets/img/new-product/1.jpg', 'New', 'Hydration'),
  ('roofaza-jeera-refresh-drink', 'Roofaza Jeera Refresh Drink', 'A refreshing cumin-based drink crafted for flavorful hydration.', 'Jeera Drink', 25, 18, '/assets/img/new-product/2.jpg', 'Popular', 'Wellness Drink'),
  ('blueberry-jeera-crunch-mix', 'BlueBerry Jeera Crunch Mix', 'Light, flavorful snack bites for mindful everyday munching.', 'Healthy Snacks', 10, 30, '/assets/img/new-product/3.jpg', 'Best Seller', 'Snack'),
  ('calm-herbal-orange-refill-pack', 'Calm Herbal Orange Refill Pack', 'A soothing infusion blend made for restful, calming moments.', 'Herbal Infusion', 25, 16, '/assets/img/new-product/4.jpg', 'New', 'Herbal'),
  ('avacardo-cumin-wellness-jar', 'Avacardo Cumin Wellness Jar', 'Pantry essential made to elevate wellness drinks and recipes.', 'Wellness Jar', 32, 14, '/assets/img/new-product/5.jpg', 'Trending', 'Wellness'),
  ('cardamom-herbal-tea-blend', 'Cardamom Herbal Tea Blend', 'A warm and aromatic blend perfect for daily tea rituals.', 'Herbal Tea', 41, 20, '/assets/img/new-product/6.jpg', 'Premium', 'Tea'),
  ('spiced-millet-energy-bites', 'Spiced Millet Energy Bites', 'Nutritious crunchy bites made for wholesome snacking.', 'Healthy Snacks', 29, 22, '/assets/img/new-product/7.jpg', 'Hot', 'Energy'),
  ('date-sweetened-wellness-dip', 'Date Sweetened Wellness Dip', 'Naturally sweet dip for healthy snack platters and light bites.', 'Wellness Dip', 9, 12, '/assets/img/new-product/8.jpg', 'Sale', 'Dip'),
  ('daily-hydration-combo-pack', 'Daily Hydration Combo Pack', 'A convenient starter bundle with everyday wellness essentials.', 'Combo Pack', 35, 10, '/assets/img/new-product/10.jpg', 'Combo', 'Hydration'),
  ('lemon-jeera-spark-drink', 'Lemon Jeera Spark Drink', 'Bright citrus flavor paired with a refreshing jeera twist.', 'Jeera Drink', 22, 26, '/assets/img/new-product/11.jpg', 'Fresh', 'Citrus'),
  ('herb-crisp-snack-box', 'Herb Crisp Snack Box', 'Oven-crisp savory snack box with balanced herbal seasoning.', 'Healthy Snacks', 18, 28, '/assets/img/new-product/12.jpg', 'New', 'Snack'),
  ('velvet-herbal-trail-mix', 'Velvet Herbal Trail Mix', 'Crunchy snack blend for smart and satisfying snacking breaks.', 'Trail Mix', 25, 15, '/assets/img/new-product/13.jpg', 'Popular', 'Trail Mix')
ON CONFLICT (id) DO UPDATE SET
  product_name = EXCLUDED.product_name,
  product_description = EXCLUDED.product_description,
  product_category = EXCLUDED.product_category,
  price = EXCLUDED.price,
  stock = EXCLUDED.stock,
  image = EXCLUDED.image,
  badge = EXCLUDED.badge,
  tag = EXCLUDED.tag,
  updated_at = NOW();
