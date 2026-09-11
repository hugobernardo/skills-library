/**
 * Dark Ocean newsletter strip: heading + 3-field inline form with success/error states.
 */
export interface NewsletterFormProps {
  heading?: string;
  text?: string;
  /** Called on (fake) submit; component shows the success state itself */
  onSubmit?: () => void;
}
export declare function NewsletterForm(props: NewsletterFormProps): JSX.Element;
