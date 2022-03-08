const IProps = {
  height: {
    type: String,
    default: '100%'
  },
  loading: {
    type: Boolean,
    default: false
  },
  isEnd: {
    type: Boolean,
    default: false
  },
  isTop: {
    type: Boolean,
    default: false
  }
} as const

export default IProps;