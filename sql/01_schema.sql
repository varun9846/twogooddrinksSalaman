--THE ADMIN PLANEL OF 2GOOD DRINKS AND CUSTOMER VIEW PAGE , BOTH ARE SHARING THE SAME DATABASE SCHEMA
-- BELOW IS THE SCRIPTS TO CREATE THE DATABASE SCHEMA FOR THE APPLICATION.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  phone_number VARCHAR(50),
  address TEXT,
  is_active boolean NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(255) PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_description TEXT NOT NULL,
  product_subdescription TEXT NOT NULL,
  product_details TEXT NOT NULL,
  product_category uuid NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  product_packsize INTEGER NOT NULL DEFAULT 1 CHECK (product_packsize > 0),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  image TEXT NOT NULL,
  badge uuid REFERENCES badges(id) ON DELETE SET NULL,
  tag uuid REFERENCES tags(id) ON DELETE SET NULL,
  is_active boolean NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total NUMERIC(10, 2) NOT NULL DEFAULT 0 CHECK (total >= 0),
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('paid', 'pending', 'failed')),
  is_active boolean NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id VARCHAR(255) NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  is_active boolean NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(order_id, product_id)
);


CREATE TABLE IF NOT EXISTS badges
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying(80) COLLATE pg_catalog."default" NOT NULL,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT badges_pkey PRIMARY KEY (id),
    CONSTRAINT badges_name_key UNIQUE (name)
)



CREATE TABLE IF NOT EXISTS categories
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying(150) COLLATE pg_catalog."default" NOT NULL,
    parent_id uuid,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT categories_pkey PRIMARY KEY (id),
    CONSTRAINT categories_name_key UNIQUE (name),
    CONSTRAINT categories_parent_id_fkey FOREIGN KEY (parent_id)
        REFERENCES categories (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)



CREATE TABLE IF NOT EXISTS stocks
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    product_id uuid NOT NULL,
    stock_in integer NOT NULL DEFAULT 0,
    stock_out integer NOT NULL DEFAULT 0,
    price numeric(10,2) NOT NULL DEFAULT 0,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT stocks_pkey PRIMARY KEY (id),
    CONSTRAINT stocks_product_id_unique UNIQUE (product_id),
    CONSTRAINT stocks_product_id_fkey FOREIGN KEY (product_id)
        REFERENCES products (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT stocks_price_check CHECK (price >= 0::numeric),
    CONSTRAINT stocks_stock_in_check CHECK (stock_in >= 0),
    CONSTRAINT stocks_stock_out_check CHECK (stock_out >= 0),
    CONSTRAINT stocks_valid_movement_check CHECK (stock_in > 0 OR stock_out > 0)
)



CREATE TABLE IF NOT EXISTS tags
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT tags_pkey PRIMARY KEY (id),
    CONSTRAINT tags_name_key UNIQUE (name)
)



CREATE INDEX IF NOT EXISTS idx_users_email ON users(LOWER(email));
CREATE INDEX IF NOT EXISTS idx_orders_user_status ON orders(user_id, status);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_stocks_product_id ON stocks(product_id);
CREATE INDEX IF NOT EXISTS idx_badges_name_lower ON badges(LOWER(name));
CREATE INDEX IF NOT EXISTS idx_tags_name_lower ON tags(LOWER(name));

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS users_set_updated_at ON users;
CREATE TRIGGER users_set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS products_set_updated_at ON products;
CREATE TRIGGER products_set_updated_at
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS orders_set_updated_at ON orders;
CREATE TRIGGER orders_set_updated_at
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS order_items_set_updated_at ON order_items;
CREATE TRIGGER order_items_set_updated_at
BEFORE UPDATE ON order_items
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();



DROP TRIGGER IF EXISTS badges_set_updated_at ON badges;
CREATE TRIGGER badges_set_updated_at
    BEFORE UPDATE ON badges
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_at();

-- Trigger for Categories
DROP TRIGGER IF EXISTS categories_set_updated_at ON categories;
CREATE TRIGGER categories_set_updated_at
    BEFORE UPDATE ON categories
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_at();

-- Trigger for Stocks
DROP TRIGGER IF EXISTS stocks_set_updated_at ON stocks;
CREATE TRIGGER stocks_set_updated_at
    BEFORE UPDATE ON stocks
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_at();

-- Trigger for Tags
DROP TRIGGER IF EXISTS tags_set_updated_at ON tags;
CREATE TRIGGER tags_set_updated_at
    BEFORE UPDATE ON tags
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_at();