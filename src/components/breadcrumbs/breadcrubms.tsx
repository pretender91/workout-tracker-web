import { Anchor } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons'

function Breadcrubms(props: {
  href: string
  onClick?: () => void
  label: string
}) {
  return (
    <Anchor
      href={props.href}
      onClick={props.onClick}
      style={{
        display: 'flex',
      }}
    >
      <IconChevronLeft />
      {props.label}
    </Anchor>
  )
}

export default Breadcrubms
