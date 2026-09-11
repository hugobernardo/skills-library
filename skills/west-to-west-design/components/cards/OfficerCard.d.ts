/**
 * Team member card: 80px round photo (or navy-gradient initials fallback), name, company, role, LinkedIn chip.
 */
export interface OfficerCardProps {
  name: string;
  company?: string;
  role?: string;
  /** Photo URL; omit for the initials fallback */
  photo?: string;
  /** LinkedIn profile URL */
  linkedin?: string;
}
export declare function OfficerCard(props: OfficerCardProps): JSX.Element;
