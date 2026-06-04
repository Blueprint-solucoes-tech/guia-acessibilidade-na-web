export type ComponentSectionStatus = 'implemented' | 'planned'

export interface ComponentSectionMeta {
  id: string
  label: string
  status: ComponentSectionStatus
}

export const componentSections: ComponentSectionMeta[] = [
  { id: 'accordion', label: 'Accordion', status: 'implemented' },
  { id: 'avatar', label: 'Avatar', status: 'implemented' },
  { id: 'badge', label: 'Badge', status: 'implemented' },
  { id: 'breadcrumbs', label: 'Breadcrumbs', status: 'implemented' },
  { id: 'button', label: 'Button', status: 'implemented' },
  { id: 'card', label: 'Card', status: 'implemented' },
  { id: 'dark-mode-toggle', label: 'Dark mode toggle', status: 'planned' },
  { id: 'form', label: 'Form', status: 'implemented' },
  { id: 'heading', label: 'Heading', status: 'implemented' },
  { id: 'high-contrast-toggle', label: 'High contrast toggle', status: 'planned' },
  { id: 'link', label: 'Link', status: 'implemented' },
  { id: 'media', label: 'Media', status: 'implemented' },
]
