import { Avatar, Card, Flex, Text } from '@mantine/core'
import { IconPencil } from '@tabler/icons'
import { useAuthStore } from 'src/stores/auth-store'

function ProfileCard(props: { onClick?: () => void }) {
  const user = useAuthStore((state) => state.session?.user)

  return (
    <Card>
      <Flex justify={'space-between'} align="center">
        <Flex gap={15} align="center">
          <Avatar variant="filled" radius={'xl'} size="lg">
            {user?.username[0]}
          </Avatar>
          <Text>{user?.username}</Text>
        </Flex>
        {props.onClick && <IconPencil onClick={props.onClick} />}
      </Flex>
    </Card>
  )
}

export default ProfileCard
