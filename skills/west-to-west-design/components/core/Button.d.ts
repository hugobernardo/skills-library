/**
 * West to West button. Primary = Dark Ocean fill (Flag Green on dark tone); outline = 1.5px border.
 * @startingPoint section="Core" subtitle="Primary and outline actions, light and dark grounds" viewport="700x220"
 */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'outline';
  /** 'light' for white/cloud sections, 'dark' for Ink/Ocean sections (hero) */
  tone?: 'light' | 'dark';
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
