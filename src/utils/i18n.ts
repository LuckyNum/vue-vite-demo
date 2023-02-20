import i18n from '@/i18n'
export const generateTitle = (title: string) => {
  return i18n.global.t('msg.route.' + title)
}
