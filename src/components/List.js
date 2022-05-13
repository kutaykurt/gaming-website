export function getList() {
  return fetch('../data.json')
    .then(data => data.json())
}