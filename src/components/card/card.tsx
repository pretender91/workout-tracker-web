function Card(props: { children: React.ReactNode }) {
  return (
    <div className="p-6 max-w-md w-full bg-white rounded-lg sm:max-w-full">
      {props.children}
    </div>
  )
}

export default Card
