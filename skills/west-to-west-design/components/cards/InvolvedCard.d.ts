/**
 * "Get Involved" CTA card on Cloud with an outline button pinned to the bottom.
 */
export interface InvolvedCardProps {
  title: string;
  /** e.g. "Ask For Help →" */
  ctaLabel: string;
  href?: string;
  children?: React.ReactNode;
}
export declare function InvolvedCard(props: InvolvedCardProps): JSX.Element;
