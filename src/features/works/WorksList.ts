const cards = document.querySelectorAll(".work-card");
for (const card of cards) {
	const button: HTMLButtonElement = card.querySelector(".work-card-button")!;
	const modal: HTMLDialogElement = card.querySelector(".work-card-modal")!;

	button.addEventListener("click", () => {
		modal.showModal();
	});

	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			modal.close();
		}
	});
}
