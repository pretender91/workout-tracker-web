import { Button } from '@mantine/core'
import { useLogoutButton } from './use-logout-button'

function LogoutButton() {
  const { logoutUser } = useLogoutButton()

  return (
    <Button color={'red'} variant={'outline'} fullWidth onClick={logoutUser}>
      Log out
    </Button>
  )
}

export default LogoutButton
