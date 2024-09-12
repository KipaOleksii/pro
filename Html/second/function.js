// const p = 3.14
// function getRadius (radius) {
//     return p * (radius * radius)
// }

// console.log(getRadius(5)) 


const brokenlinks = [ 'vk', 'youtube', 'facebook']
const links = []

brokenlinks.forEach((brokenLink) => {
 links.push(`https://${brokenLink}.com`)
})

console.log(links)