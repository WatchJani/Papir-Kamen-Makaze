let niz = ["Papir", "Kamen", "Makaze"]
        let poruka = document.getElementById("pobijednik")
        let pc_brojac = document.getElementById("pc_brojac")
        let user_brojac = document.getElementById("user_brojac")
        let userbrojac = 1, pcbrojac = 1
        dodaj = (i) => {
            let random = Math.floor(Math.random() * 3);
            document.getElementById("ispis").innerHTML = `${niz[i]} `
            document.getElementById("pc").innerHTML = `${niz[random]}`
            if (i == random) {
                poruka.innerHTML = "neriješeno"
                poruka.style.color = "blue"
            }
            else if (i == 0 && random == 1) {
                poruka.innerHTML = "korisnik pobijedio"
                user_brojac.innerHTML = `Igrac: ${userbrojac++}`
                poruka.style.color = "green"
            }
            else if (i == 0 && random == 2) {
                poruka.innerHTML = "comp pobijedio"
                pc_brojac.innerHTML = `PC: ${pcbrojac++}`
                poruka.style.color = "red"
            }
            else if (i == 1 && random == 2) {
                poruka.innerHTML = "korisnik pobijedio"
                user_brojac.innerHTML = `Igrac: ${userbrojac++}`
                poruka.style.color = "green"
            }
            else if (i == 1 && random == 0) {
                poruka.innerHTML = "comp pobijedio"
                pc_brojac.innerHTML = `PC: ${pcbrojac++}`
                poruka.style.color = "red"
            }
            else if (i == 2 && random == 0) {
                poruka.innerHTML = "korisnik pobijedio"
                user_brojac.innerHTML = `Igrac: ${userbrojac++}`
                poruka.style.color = "green"
            }
            else {
                poruka.innerHTML = "comp pobijedio"
                pc_brojac.innerHTML = `PC: ${pcbrojac++}` //"PC: "+ pcbrojac++
                poruka.style.color = "red"
            }
        }
