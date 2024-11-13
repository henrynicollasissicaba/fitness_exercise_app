import CategoryItem from './CategoryItem'

const CategoryGroup = ({ heading, headingNumber, items }: {
    heading: string
    headingNumber: number
    items: string[]
}) => {
  return (
    <div className="flex flex-col gap-6 z-10 w-full md:w-max">
        <h2 className="text-2xl font-bold text-blue-800 px-4 py-2 bg-blue-100
        rounded-md w-full mt-10 md:mt-0"
        >
            {headingNumber}: {heading}
        </h2>
        <ul className="flex flex-col gap-1">
            {items.map((item, index) => (
                <CategoryItem key={index} id={index + 1} categoryItem={item}/>
            ))}
        </ul>
    </div>
  )
}

export default CategoryGroup