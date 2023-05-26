
type Props = {
  h: string
  w: string
}

export default function Skeleton({h, w}: Props) {
  return (
    <div role="status" className="animate-pulse">
    <div className={`h-${h} w-${w} bg-th-background rounded-full dark:bg-th-primary`}></div>
</div>
  )
}
