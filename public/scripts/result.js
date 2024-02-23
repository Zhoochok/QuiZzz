const formresult = document.querySelector('.form-result')

if (formresult) {
    formresult.addEventListener('submit', async (e)=>{
        e.preventDefault()
       const { isRight } = e.target.value
       if(isRight){
        const res = await fetch(`/categories/aaa`{
            method: 'POST',
            headers: {
                "Content-type": "application/json",
              },
              body: 
        })
       }
    })
}