import { Avatar, Card, Flex, Text } from '@mantine/core'
import { useRouter } from 'src/router'
import { useAuthStore } from 'src/stores/auth-store'

function ProfileCard(props: { onClick?: () => void }) {
  const user = useAuthStore((state) => state.session?.user)
  const router = useRouter()

  return (
    <Card onClick={props.onClick}>
      <Flex
        direction="column"
        justify={'space-between'}
        align="center"
        gap={10}
      >
        <Avatar variant="filled" radius={'xl'} size="lg">
          {user?.username[0]}
        </Avatar>
        <Text>{user?.username}</Text>
      </Flex>
    </Card>
  )
}

export default ProfileCard
