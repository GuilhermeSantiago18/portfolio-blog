import CategoryLink from './CategoryLink'

const categories = [
  {name: 'Família'},
  {name: 'Esporte'},
  {name: 'Saúde'},
]

export default function BlogNav() {
  return (
    <nav className="flex items-center justify-between py-2">
    <ul className="hidden md:inline-flex items-center">
      {categories.map(({name}) => (
        <CategoryLink content={name} />
      ))}
    </ul>
    </nav>
  )
}