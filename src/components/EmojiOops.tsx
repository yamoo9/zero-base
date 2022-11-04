interface Props {
  src?: string;
  alt?: string;
  [props: string]: unknown;
}

export const EmojiOops = ({ src, alt, ...restProps }: Props): JSX.Element => {
  return <img src={src} alt={alt} {...restProps} />;
};

EmojiOops.defaultProps = {
  src: '//bit.ly/347GB7Y',
  alt: '',
};
