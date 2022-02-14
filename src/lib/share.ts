import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { getStoredIsHighContrastMode } from './localStorage'
import { isMobileBrowser } from './browser'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean,
  handleShareToClipboard: () => void
) => {
  const textToShare =
    `Fartsle ${solutionIndex} ${lost ? 'X' : guesses.length}/6${
      isHardMode ? '*' : ''
    }\n\nfartsle.com\n\n` + generateEmojiGrid(guesses)
  
  const shareData = { text: textToShare }

  if (isMobileBrowser() && navigator.canShare(shareData) && navigator.share) {
    navigator.share(shareData)
  } else {
    navigator.clipboard.writeText(textToShare)
    handleShareToClipboard()
  }
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      const isHighContrast = getStoredIsHighContrastMode()
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              if (isHighContrast) {
                return '🟧'
              }
              return '🟩'
            case 'present':
              if (isHighContrast) {
                return '🟦'
              }
              return '🟨'
            default:
              if (localStorage.getItem('theme') === 'dark') {
                return '⬛'
              }
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
