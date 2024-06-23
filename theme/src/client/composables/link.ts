import { isLinkExternal } from '@vuepress/helper/client'
import { resolveRouteFullPath, useRoute } from 'vuepress/client'
import { type MaybeRefOrGetter, computed, toValue } from 'vue'
import { useData } from './data.js'

const SEARCH_RE = /\.md(?:(?:#|\?).*)?$/

export function useLink(
  href: MaybeRefOrGetter<string | undefined>,
  target?: MaybeRefOrGetter<string | undefined>,
) {
  const route = useRoute()
  const { page } = useData()

  const isExternal = computed(
    () => {
      const link = toValue(href)
      const rawTarget = toValue(target)
      return (link && isLinkExternal(link)) || rawTarget === '_blank'
    },
  )

  const link = computed(() => {
    const link = toValue(href)
    if (!link)
      return undefined
    if (isExternal.value)
      return link
    const currentPath = link.startsWith('./') && SEARCH_RE.test(link)
      ? `/${page.value.filePathRelative!}`
      : route.path
    return resolveRouteFullPath(link, currentPath)
  })

  return { isExternal, link }
}
