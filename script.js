// Quote generator (English + Español)
(() => {
	const quotesEn = [
		{text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau"},
		{text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
		{text: "The future depends on what you do today.", author: "Mahatma Gandhi"},
		{text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
		{text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe"}
	];

	const quotesEs = [
		{text: "El éxito suele llegar a quienes están demasiado ocupados para buscarlo.", author: "Henry David Thoreau"},
		{text: "No mires el reloj; haz lo que él hace. Sigue adelante.", author: "Sam Levenson"},
		{text: "El futuro depende de lo que hagas hoy.", author: "Mahatma Gandhi"},
		{text: "Cree que puedes y ya estarás a mitad de camino.", author: "Theodore Roosevelt"},
		{text: "Comienza donde estás. Usa lo que tienes. Haz lo que puedas.", author: "Arthur Ashe"}
	];

	function randomFrom(arr){
		return arr[Math.floor(Math.random()*arr.length)];
	}

	function renderQuote(targetEl, q){
		if(!targetEl) return;
		targetEl.textContent = `"${q.text}" — ${q.author}`;
	}

	// English page
	const quoteBtn = document.getElementById('quote-btn');
	const quoteEl = document.getElementById('quote');
	if(quoteBtn && quoteEl){
		quoteBtn.addEventListener('click', () => renderQuote(quoteEl, randomFrom(quotesEn)));
		// show initial quote
		renderQuote(quoteEl, randomFrom(quotesEn));
	}

	// Spanish page
	const quoteBtnEs = document.getElementById('quote-btn-es');
	const quoteElEs = document.getElementById('quote-es');
	if(quoteBtnEs && quoteElEs){
		quoteBtnEs.addEventListener('click', () => renderQuote(quoteElEs, randomFrom(quotesEs)));
		renderQuote(quoteElEs, randomFrom(quotesEs));
	}

})();
