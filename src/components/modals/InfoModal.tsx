import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to Fartsle" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        Guess Farts in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to Farts.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" status="correct" />
        <Cell value="L" />
        <Cell value="I" />
        <Cell value="N" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        The letter F is in Farts and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="L" />
        <Cell value="O" />
        <Cell value="T" status="present" />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        The letter T is in Farts but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        The letter U is not in Farts in any spot. 
      </p>
  <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        If you enjoy this Fartsle, feel free to buy me a coffee -{' '}
        <a
          href="https://cash.app/$NicolasKatzen" target="_blank" rel="noreferrer"
          className="underline font-bold"
        >
          $NicolasKatzen
        </a>{' '}
      </p>
    </BaseModal>
  )
}
