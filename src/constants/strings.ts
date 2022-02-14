export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['You Farted!', 'Farts!', 'Good Farts!']
export const GAME_COPIED_MESSAGE = 'Farts copied to clipboard'
export const ABOUT_GAME_MESSAGE = 'About this Farts'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough Farts'
export const WORD_NOT_FOUND_MESSAGE = 'Farts not found'
export const HARD_MODE_ALERT_MESSAGE =
  'Farts Mode can only be enabled at the start!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The Farts was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Farts must contain ${letter}`
export const ENTER_TEXT = 'Farts'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Fartsistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Fartstribution'
export const NEW_WORD_TEXT = 'New Farts in'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Total Farts'
export const SUCCESS_RATE_TEXT = 'Fartsess rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
