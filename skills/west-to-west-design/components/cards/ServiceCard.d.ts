/**
 * Offering card: 48px icon tile, Sora H3, slate body. Hover: −4px lift + green top bar reveal.
 */
export interface ServiceCardProps {
  /** 24px line icon (stroke 1.5), e.g. a Lucide SVG */
  icon?: React.ReactNode;
  title: string;
  /** Body copy */
  children?: React.ReactNode;
}
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
