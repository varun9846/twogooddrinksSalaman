CREATE EXTENSION IF NOT EXISTS pgcrypto;

INSERT INTO users (name, email, password, phone_number, address)
VALUES (
  'Test Customer',
  'customer@twogood.test',
  crypt('Password@123', gen_salt('bf')),
  '+96898060405',
  'Muscat, Oman'
)
ON CONFLICT (email) DO UPDATE SET
  name = EXCLUDED.name,
  password = EXCLUDED.password,
  phone_number = EXCLUDED.phone_number,
  address = EXCLUDED.address,
  updated_at = NOW();
