const h1 = document.querySelector('h1')
        const letters = h1.innerText.split('') //To grab all the inner text and turn it into arr and split it.

        let html = ''

        //To scan the innertext
        letters.forEach(letter => {
            if(letter !== ' '){
                classes = 'letter js-letter'
            }
            html = html + ` <span class='${classes}'>${letter}</span>` // concatinate this after every loop
        });

        
        h1.innerHTML = html // To change the h1 innter text and replace it with whatever the loop's concern
        const jsLetters = document.querySelectorAll('.js-letter')


        //To grab all the js-letter and loop through every single one
        jsLetters.forEach(node => {
            
            node.addEventListener('mouseover', function (event){
                
                this.classList.add('active') // Whenever we mouse over this will be activited
            })
            node.addEventListener('mouseout', function (event){
                this.classList.remove('active') // When the mouse is out remove the active
            })
        })