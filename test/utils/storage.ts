const KEY_NAME = 'my-app-'

function set(key: string, value: string) {
  localStorage.setItem(KEY_NAME + key, value)
}

function get(key: string) {
  return localStorage.getItem(KEY_NAME + key)
}

const storage = {
  get,
  set,
}

export default storage
