import { Ref } from 'vue'

// [必要な状態]
// - 現在選択されていてる絵文字
type Icon = Ref<string>

// - アイコン選択モーダルの表示状態
type IsShownIconSelectionModal = Ref<boolean>

// [必要な関数]
// - アイコン選択モーダルが表示されていれば非表示に、非表示であれば表示する関数
type ToggleDisplayOfIconSelectionModal = (
  isShownIconSelectionModal: IsShownIconSelectionModal
) => () => void

// - アイコン選択モーダルの中の絵文字がクリックされたら既存の絵文字を変更する関数
type ChangeIcon = (
  icon: Icon,
  toggleDisplayOfIconSelectionModal: ReturnType<ToggleDisplayOfIconSelectionModal>
) => (newIcon: string) => void

// - Vue.jsから利用する為のuseXXX関数
type UseIcon = (
  isShownIconSelectionModal: IsShownIconSelectionModal,
  icon: Icon
) => {
  toggleDisplayOfIconSelectionModal: ReturnType<ToggleDisplayOfIconSelectionModal>
  changeIcon: ReturnType<ChangeIcon>
}
