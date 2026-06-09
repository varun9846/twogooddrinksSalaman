import { create } from 'zustand';

interface UiState {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  toggleCart: () => void;
  toggleMobileMenu: () => void;
  closeAll: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isCartOpen: false,
  isMobileMenuOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeAll: () => set({ isCartOpen: false, isMobileMenuOpen: false }),
}));