export const TOGGLE_HAMBURGER = "TOGGLE_HAMBURGER";

export type hamburgerActionTypes = toggleHamburgerAction;

interface toggleHamburgerAction {
  type: typeof TOGGLE_HAMBURGER;
  isOpen?: boolean;
}

/**
 * This toggles the isOpen property of the hamburger menu, triggering the
 * hamburger menu and opening or closing the nav menu
 * @param isOpen Optional parameter to specifically set isOpen as desired. Without this
 * argument the value will simply be toggled.
 */
export function toggleHamburger(isOpen?: boolean): toggleHamburgerAction {
  return {
    type: TOGGLE_HAMBURGER,
    isOpen: isOpen,
  };
}
