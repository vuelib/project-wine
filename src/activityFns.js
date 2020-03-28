export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function auth(locations) {
  return true;
}

export function companies(locations) {
  if (prefix(locations, 'companies')) return true;
}

// export function posts(location) {
//   // Adiciona mais 1 a 'posts' no localStorage
//   if (prefix(location, 'posts')) {
//     window.localStorage.setItem('posts', Number(window.localStorage.getItem('posts')) + 1)
//     // Evento do storage só funciona em window diferente - Isso força o evento
//     window.dispatchEvent(new window.StorageEvent('storage'))
//   }

//   // Manter aberto apos a primeiro execução
//   if (document.querySelector('#posts').childElementCount == 0 && prefix(location, 'posts')) {
//     return true
//   } else if (document.querySelector('#posts').childElementCount >= 1) {
//     return true
//   }
// }
