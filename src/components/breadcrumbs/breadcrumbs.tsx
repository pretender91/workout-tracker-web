import { Anchor } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons'

function Breadcrumbs(props: {
  label: string
  href?: string
  onClick?: () => void
}) {
  return (
    <Anchor
      href={props.href}
      onClick={props.onClick}
      style={{ display: 'flex' }}
    >
      <IconChevronLeft />
      {props.label}
    </Anchor>
  )
}

export default Breadcrumbs
