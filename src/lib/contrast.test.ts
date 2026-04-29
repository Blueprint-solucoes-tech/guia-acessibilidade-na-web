import { describe, expect, it } from 'vitest'
import { calculateContrastRatio, evaluateContrast, formatContrastRatio, normalizeHexColor } from './contrast'

describe('normalizeHexColor', () => {
  it('expande hex curto', () => {
    expect(normalizeHexColor('#fff')).toBe('#FFFFFF')
  })

  it('preserva hex longo', () => {
    expect(normalizeHexColor('#111827')).toBe('#111827')
  })

  it('rejeita valores inválidos', () => {
    expect(normalizeHexColor('#12')).toBeNull()
    expect(normalizeHexColor('blue')).toBeNull()
    expect(normalizeHexColor('123456')).toBeNull()
  })
})

describe('calculateContrastRatio', () => {
  it('retorna 21:1 para preto em branco', () => {
    expect(formatContrastRatio(calculateContrastRatio('#000000', '#FFFFFF'))).toBe('21.00:1')
  })

  it('retorna 1:1 para cores idênticas', () => {
    expect(formatContrastRatio(calculateContrastRatio('#FFFFFF', '#FFFFFF'))).toBe('1.00:1')
  })

  it('diferencia critérios AA e AAA para cinza médio em branco', () => {
    const ratio = calculateContrastRatio('#777777', '#FFFFFF')
    const evaluation = evaluateContrast(ratio)

    expect(formatContrastRatio(ratio)).toBe('4.48:1')
    expect(evaluation.normalText.aa).toBe(false)
    expect(evaluation.normalText.aaa).toBe(false)
    expect(evaluation.largeText.aa).toBe(true)
    expect(evaluation.largeText.aaa).toBe(false)
  })
})
