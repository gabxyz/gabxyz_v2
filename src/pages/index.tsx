type Props = {
  title: string
}

export default function Home({ title = 'Hello World!' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
