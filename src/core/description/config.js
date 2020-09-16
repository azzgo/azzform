import ui from '@/core/contants/ui'

export default {
  name: 'description',
  text: '描述',
  schema: {
    title: '描述',
    type: 'string',
    [ui.widget]: 'description',
    [ui.placeholder]: '这是一段无用的描述'
  }
}