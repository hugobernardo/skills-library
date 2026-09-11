/**
 * Partner logo row: centered, wrapped, logos at 35% opacity brightening to 80% on hover.
 */
export interface SponsorRowProps {
  logos: { src: string; alt: string; /** CSS height, default 48px */ height?: string }[];
}
export declare function SponsorRow(props: SponsorRowProps): JSX.Element;
