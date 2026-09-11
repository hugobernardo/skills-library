/**
 * Ink footer: brand column with white logo + tagline, uppercase link columns, hairline divider, copyright row.
 */
export interface FooterProps {
  /** White logo URL */
  logo?: string;
  description?: string;
  columns?: { title: string; links: { label: string; href?: string }[] }[];
  bottomNote?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
