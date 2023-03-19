function harmonic() {
    const acc = document.getElementsByClassName("harmonic__body")
    for(let i = 0; i < acc.length;i++){
        acc[i].addEventListener("click", function() {
            this.classList.toggle('active');
        })
    }
}

harmonic();
