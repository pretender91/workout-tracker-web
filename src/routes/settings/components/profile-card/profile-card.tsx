import { Avatar, Card, Flex, Text } from '@mantine/core'
import { useAuthStore } from 'src/stores/auth-store'

function ProfileCard(props: { onClick?: () => void }) {
  const user = useAuthStore((state) => state.session?.user)

  return (
    <Card onClick={props.onClick}>
      <Flex
        direction="column"
        justify={'space-between'}
        align="center"
        gap={10}
      >
        <Avatar variant="filled" h={100} w={100} radius={50}>
          <Text size={48}>{user?.username[0]}</Text>
        </Avatar>
        <Text size={24}>{user?.username}</Text>
      </Flex>
    </Card>
  )
}

export default ProfileCard
