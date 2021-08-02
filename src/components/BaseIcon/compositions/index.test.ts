import { ref } from 'vue'
import { toggleDisplayOfIconSelectionModal, changeIcon } from '.'

describe('toggleDisplayOfIconSelectionModal', () => {
  test('アイコン選択画面が「表示されている」場合は関数の実行によって非表示になること', () => {
    const isShownIconSelectionModal = ref(true)
    const testTarget = toggleDisplayOfIconSelectionModal(
      isShownIconSelectionModal
    )
    testTarget()

    expect(isShownIconSelectionModal.value).toBe(false)
  })
  test('アイコン選択画面が「表示されていない」場合は関数の実行によって表示されること', () => {
    const isShownIconSelectionModal = ref(false)
    const testTarget = toggleDisplayOfIconSelectionModal(
      isShownIconSelectionModal
    )
    testTarget()

    expect(isShownIconSelectionModal.value).toBe(true)
  })
})

describe('changeIcon', () => {
  test.todo('iconが既存のアイコンから新しいアイコンに変更されること')
  test.todo('toggleDisplayOfIconSelectionModalがコールされていること')
})
