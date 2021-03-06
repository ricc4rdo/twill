export function globalError (component = null, error = { message: '', value: null }) {
  let prefix = ''

  if (component && typeof component === 'string') {
    prefix = `${process.env.VUE_APP_NAME} - [${component}]: `
  }

  const errorMessage = prefix + error.message

  console.error(errorMessage)

  if (error.value && error.value.response) {
    console.error(error.value.response.data)
  }

  if ('response' in error.value && 'status' in error.value.response && error.value.response.status === 401) {
    window[process.env.VUE_APP_NAME].vm.notif({
      message: 'Your session has expired, please <a href="' + document.location + '" target="_blank">login in another tab</a>. You can then continue working here.',
      variant: 'warning'
    })
  }
}
