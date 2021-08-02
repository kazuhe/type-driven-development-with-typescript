import { Ref } from 'vue'

/**
 * アイコン（絵文字）
 */
type Icon = Ref<string>

/**
 * アイコン選択画面が表示されている状態
 */
type IsShownIconSelectionModal = Ref<boolean>

/**
 * アイコン選択画面を表示/非表示する関数
 *
 * @param isShownIconSelectionModal アイコン選択画面が表示されている状態
 * @returns アイコン選択画面を表示/非表示するカリー化関数
 */
type ToggleDisplayOfIconSelectionModal = (
  isShownIconSelectionModal: IsShownIconSelectionModal
) => () => void

export const toggleDisplayOfIconSelectionModal: ToggleDisplayOfIconSelectionModal =
  (isShownIconSelectionModal) => () =>
    (isShownIconSelectionModal.value = !isShownIconSelectionModal.value)

/**
 * アイコンを設定する関数
 *
 * @param icon アイコン
 * @param toggleDisplayOfIconSelectionModal アイコン選択画面を表示/非表示する関数
 * @returns アイコンを設定するカリー化関数
 */
type ChangeIcon = (
  icon: Icon,
  toggleDisplayOfIconSelectionModal: ReturnType<ToggleDisplayOfIconSelectionModal>
) => (newIcon: string) => void

export const changeIcon: ChangeIcon =
  (icon, toggleDisplayOfIconSelectionModal) => (newIcon) => {
    icon.value = newIcon
    toggleDisplayOfIconSelectionModal()
  }

/**
 * UseIcon
 */
type UseIcon = (
  isShownIconSelectionModal: IsShownIconSelectionModal,
  icon: Icon
) => {
  toggleDisplayOfIconSelectionModal: ReturnType<ToggleDisplayOfIconSelectionModal>
  changeIcon: ReturnType<ChangeIcon>
}

// export const useIcon: UseIcon = (isShownIconSelectionModal, icon) => {}
