function change (){
    const content = document.getElementById('content');
    content.classList.add('hidden');
    
    const thankYouDiv = document.createElement('div');
    thankYouDiv.classList.add('thank-you');

    const thankYouText = document.createElement('p');
    thankYouText.textContent = 'Thank you!';

    thankYouDiv.appendChild(thankYouText);
    document.body.appendChild(thankYouDiv);
}