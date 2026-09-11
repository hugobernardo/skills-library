/**
 * Section header: uppercase eyebrow with green tick, Sora H2, optional subtitle.
 */
export interface SectionHeaderProps {
  /** Uppercase eyebrow label, e.g. "Our Mission" */
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Centered (default) or left-aligned */
  center?: boolean;
  /** True on Ink/dark sections */
  dark?: boolean;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
