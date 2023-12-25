let path = window.location.pathname

fetch('https://ntfy.sh/Betty_TS13', {
    method: 'POST',
    body: `Someone visited ${path=="/" ? "your portfolio." : path}`
})

let anchors = document.getElementsByTagName("a")

for(a of anchors){
    let bd = `Someone clicked on ${a.href} on ${path=="/" ? "your portfolio." : path}`
    a.addEventListener('click', (e) => {
        fetch('https://ntfy.sh/Betty_TS13', {
            method: 'POST',
            body: bd
        })
        
    })
}