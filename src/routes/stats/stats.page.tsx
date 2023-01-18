import { AppShell } from 'src/components/app-shell/app-shell'
import Breadcrumbs from 'src/components/breadcrumbs/breadcrumbs'
import DataCard from 'src/components/data-card/data-card'
import { useAuthRoute } from 'src/hooks/use-auth-route'
import { useBreadCrumbs } from 'src/hooks/use-breadcrumbs'
import { useRouter } from 'src/router'

export function StatsPage() {
  useAuthRoute()

  const router = useRouter()
  const { showBreadcrumbs, handleHideBreadcrumbs, handleShowBreadcrumbs } =
    useBreadCrumbs()

  return (
    <AppShell
      title={'Stats'}
      leftSlot={
        showBreadcrumbs ? (
          <Breadcrumbs
            {...router.routes.stats().link}
            onClick={() => {
              handleHideBreadcrumbs()
              router.routes.stats().link.onClick()
            }}
            label="Stats"
          />
        ) : null
      }
    >
      <DataCard
        title={'Stat 1'}
        content={<div>Stat: 1</div>}
        fullContent={<div>stats 1</div>}
        onClick={handleShowBreadcrumbs}
        isBreadcrumbShowed={showBreadcrumbs}
      ></DataCard>
      <DataCard
        title={'Stat 2'}
        content={<div>Stat: 2</div>}
        fullContent={<div>stats 2</div>}
        onClick={handleShowBreadcrumbs}
        isBreadcrumbShowed={showBreadcrumbs}
      ></DataCard>
      <DataCard
        title={'Stat 3'}
        content={<div>Stat: 3</div>}
        fullContent={<div>stats 3</div>}
        onClick={handleShowBreadcrumbs}
        isBreadcrumbShowed={showBreadcrumbs}
      ></DataCard>
    </AppShell>
  )
}
