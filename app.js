
const fetchAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    document.getElementById("title").textContent =
      `ADVICE #${data.slip.id}`;

    document.getElementById("text").textContent =
      `"${data.slip.advice}"`;
  } catch (error) {
    console.error("Error fetching advice:", error);
    document.getElementById("text").textContent =
      "Failed to load advice. Please try again.";
  }
};

fetchAdvice();
