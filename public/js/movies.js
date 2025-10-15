const deleteBtn = document.querySelectorAll('.delete-btn')
const watchBtn = document.querySelectorAll('.watch-btn')
const movieItem = document.querySelectorAll('.movie-card')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteMovie)
})

Array.from(watchBtn).forEach((element)=>{
    element.addEventListener('click', toggleWatched)
})

async function deleteMovie(){
    const movieId = this.closest('.movie-card').dataset.id
    try{
        const response = await fetch('movies/deleteMovie', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'movieIdFromJSFile': movieId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function toggleWatched(){
    const movieCard = this.closest('.movie-card')
    const movieId = movieCard.dataset.id
    const isWatched = movieCard.classList.contains('watched')
    
    try{
        const response = await fetch(`movies/${isWatched ? 'markUnwatched' : 'markWatched'}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'movieIdFromJSFile': movieId
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}