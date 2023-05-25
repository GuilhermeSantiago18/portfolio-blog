import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  className: string;
}

export default function CustomImage({src, alt, className}: Props){
  return(
  <article className={className}>
    <Image fill alt={alt} src={src}  className="object-cover" />
  </article>
  )
}
