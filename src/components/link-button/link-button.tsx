function LinkButton(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { text: string },
) {
  return (
    <a
      {...props}
      className="bg-blue-500 rounded-xl p-2 text-xl hover:text-white hover:bg-blue-700 max-w-xs w-28"
    >
      {props.text}
    </a>
  )
}

export default LinkButton
