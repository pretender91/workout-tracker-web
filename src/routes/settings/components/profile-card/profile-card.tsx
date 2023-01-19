import { Anchor, Avatar, Card, Flex, Text } from '@mantine/core'
import { IconPencil } from '@tabler/icons'
import { useRouter } from 'src/router'
import { useAuthStore } from 'src/stores/auth-store'

function ProfileCard(props: { onClick?: () => void }) {
  const user = useAuthStore((state) => state.session?.user)
  const router = useRouter()

  return (
    <Card onClick={props.onClick}>
      <Flex justify={'space-between'} align="center">
        <Flex gap={15} align="center">
          <Avatar variant="filled" radius={'xl'} size="lg">
            {user?.username[0]}
          </Avatar>
          <Text>{user?.username}</Text>
        </Flex>

        <Anchor {...router.routes.profile().link}>
          <IconPencil onClick={props.onClick} />
        </Anchor>
      </Flex>
    </Card>
  )
}

export default ProfileCard
