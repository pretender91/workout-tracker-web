import { Text, Title } from '@mantine/core'
import { IconCalendar, IconGraph, IconSettings } from '@tabler/icons'
import { ReactNode } from 'react'
import styles from 'src/components/app-shell/app-shell.module.css'
import { AppRoute, AppRouteNames, router, useRoute } from 'src/router'

/**
 * TODO: Add selected colors for nested routes
 */
function getColor(routeName: AppRouteNames, currentRoute: AppRoute) {
  const SELECTED_COLOR = '#007AFF'
  const DEFAULT_COLOR = '#949596'
  return routeName === currentRoute.name ? SELECTED_COLOR : DEFAULT_COLOR
}

export function AppShell(props: {
  children: ReactNode
  title: string
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}) {
  const currentRoute = useRoute()

  const calendarColor = getColor('main', currentRoute)
  const statsColor = getColor('stats', currentRoute)
  const settingsColor = getColor('settings', currentRoute)

  return (
    <div className={styles.appShell}>
      <header className={styles.appHeader}>
        <div className={styles.appHeaderLeftSlot}>{props.leftSlot}</div>
        <Title order={1} size={'h7'} align="center">
          {props.title}
        </Title>
        <div className={styles.appHeaderRightSlot}> right slot</div>
      </header>
      <main className={styles.appContent}>{props.children}</main>
      <nav className={styles.appNavigation}>
        <ul>
          <li>
            <a {...router.routes.main().link}>
              <IconCalendar color={calendarColor} />
              <Text size="xs" c={calendarColor}>
                Calendar
              </Text>
            </a>
          </li>
          <li>
            <a {...router.routes.stats().link}>
              <IconGraph color={statsColor} />
              <Text size="xs" c={statsColor}>
                Stats
              </Text>
            </a>
          </li>
          <li>
            <a {...router.routes.settings().link}>
              <IconSettings color={settingsColor} />
              <Text size="xs" c={settingsColor}>
                Settings
              </Text>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
