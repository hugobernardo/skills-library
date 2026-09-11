/**
 * Fixed top nav, 72px: transparent over the hero (white links), frosted white + Dark Ocean CTA when scrolled.
 */
export interface NavBarProps {
  /** Logo image URL (white variant over hero, black when scrolled) */
  logo?: string;
  links?: { label: string; href?: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Scrolled (frosted white) state */
  scrolled?: boolean;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
