document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("reviewText").value;
  
    const reviewHTML = `
      <div class="review">
        <strong>${name} — ⭐ ${rating}/5</strong>
        <p>${reviewText}</p>
      </div>
    `;
  
    document.getElementById("reviewsList").innerHTML += reviewHTML;
  
    // Optional: Clear form
    document.getElementById("reviewForm").reset();
  });
  