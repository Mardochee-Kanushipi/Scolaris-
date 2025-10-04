// --- Calendrier dynamique pour la réservation ---
document.addEventListener('DOMContentLoaded', function () {
// --- Validation du formulaire de réservation ---
	const bookingForm = document.getElementById('booking-form');
	const bookingSubmit = document.getElementById('booking-submit');
	const privacyCheckbox = document.getElementById('booking-privacy');
	// On récupère selectedDate et selectedTime de l'autre script
	let selectedDate = null;
	let selectedTime = null;

	// On écoute les événements de sélection de date et d'heure
	document.addEventListener('date-selected', function(e) {
		selectedDate = e.detail;
		checkBookingFormValidity();
	});
	document.addEventListener('time-selected', function(e) {
		selectedTime = e.detail;
		checkBookingFormValidity();
	});
	if (privacyCheckbox) {
		privacyCheckbox.addEventListener('change', checkBookingFormValidity);
	}

	function checkBookingFormValidity() {
		// On vérifie que la date, l'heure et la case sont cochées
		if (selectedDate && selectedTime && privacyCheckbox && privacyCheckbox.checked) {
			bookingSubmit.disabled = false;
		} else {
			bookingSubmit.disabled = true;
		}
	}
});
  
	function renderTimeSlots(date) {
		if (!date) {
			timeSlotsEl.innerHTML = '';
			return;
		}
		// Titre dynamique
		const dateStr = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
		let html = `<h4 class="font-semibold text-gray-900 mb-3">Créneaux disponibles - ${dateStr}</h4>`;
		html += '<div class="grid grid-cols-2 gap-2">';
		defaultTimeSlots.forEach(slot => {
			let btnClass = 'time-slot p-3 text-sm border border-gray-300 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors';
			if (selectedTime === slot.time) btnClass += ' bg-primary text-white';
			html += `<button type="button" class="${btnClass}" data-time="${slot.time}">${slot.label}</button>`;
		});
		html += '</div>';
		timeSlotsEl.innerHTML = html;
		// Dispatch custom event pour la date sélectionnée
		document.dispatchEvent(new CustomEvent('date-selected', { detail: date }));
	}
	// Sélecteurs
	const monthNames = [
		'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
		'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
	];
	const currentMonthEl = document.getElementById('current-month');
	const calendarDaysEl = document.getElementById('calendar-days');
	const prevMonthBtn = document.getElementById('prev-month');
	const nextMonthBtn = document.getElementById('next-month');
		const selectedSlotEl = document.getElementById('selected-slot');
		const timeSlotsEl = document.getElementById('time-slots');

		// Créneaux horaires par défaut (modifiable)
		const defaultTimeSlots = [
			{ time: '09:00', label: '09:00 - 09:45' },
			{ time: '10:00', label: '10:00 - 10:45' },
			{ time: '11:00', label: '11:00 - 11:45' },
			{ time: '14:00', label: '14:00 - 14:45' },
			{ time: '15:00', label: '15:00 - 15:45' },
			{ time: '16:00', label: '16:00 - 16:45' }
		];

		let selectedTime = null;

		function renderTimeSlots(date) {
			if (!date) {
				timeSlotsEl.innerHTML = '';
				return;
			}
			// Titre dynamique
			const dateStr = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
			let html = `<h4 class="font-semibold text-gray-900 mb-3">Créneaux disponibles - ${dateStr}</h4>`;
			html += '<div class="grid grid-cols-2 gap-2">';
			defaultTimeSlots.forEach(slot => {
				let btnClass = 'time-slot p-3 text-sm border border-gray-300 rounded-lg hover:border-primary hover:bg-primary-50 transition-colors';
				if (selectedTime === slot.time) btnClass += ' bg-primary text-white';
				html += `<button type="button" class="${btnClass}" data-time="${slot.time}">${slot.label}</button>`;
			});
			html += '</div>';
			timeSlotsEl.innerHTML = html;
		}

	// Date courante
	let today = new Date();
	let selectedDate = null;
	let currentMonth = today.getMonth();
	let currentYear = today.getFullYear();

	function renderCalendar(month, year) {
		// Affichage du mois/année
		currentMonthEl.textContent = `${monthNames[month]} ${year}`;
		// Premier jour du mois (0=dimanche, 1=lundi...)
		let firstDay = new Date(year, month, 1);
		let startDay = (firstDay.getDay() + 6) % 7; // Lundi=0
		let daysInMonth = new Date(year, month + 1, 0).getDate();
		let daysInPrevMonth = new Date(year, month, 0).getDate();

		let html = '';
		// Jours du mois précédent (gris)
		for (let i = 0; i < startDay; i++) {
			html += `<div class='text-center py-2 text-gray-400'>${daysInPrevMonth - startDay + i + 1}</div>`;
		}
		// Jours du mois courant
		for (let d = 1; d <= daysInMonth; d++) {
			const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
			let classes = 'text-center py-2 cursor-pointer hover:bg-primary-50 rounded calendar-day';
			if (
				selectedDate &&
				selectedDate.getDate() === d &&
				selectedDate.getMonth() === month &&
				selectedDate.getFullYear() === year
			) {
				classes += ' bg-primary text-white';
			}
			html += `<div class='${classes}' data-date='${dateStr}'>${d}</div>`;
		}
		// Jours du mois suivant (gris pour compléter la grille)
		let totalCells = startDay + daysInMonth;
		for (let i = 0; i < (7 - (totalCells % 7)) % 7; i++) {
			html += `<div class='text-center py-2 text-gray-400'>${i + 1}</div>`;
		}
		calendarDaysEl.innerHTML = html;
	}

	// Navigation mois précédent
	prevMonthBtn.addEventListener('click', function () {
		currentMonth--;
		if (currentMonth < 0) {
			currentMonth = 11;
			currentYear--;
		}
		renderCalendar(currentMonth, currentYear);
	});
	// Navigation mois suivant
	nextMonthBtn.addEventListener('click', function () {
		currentMonth++;
		if (currentMonth > 11) {
			currentMonth = 0;
			currentYear++;
		}
		renderCalendar(currentMonth, currentYear);
	});

	// Sélection d'un jour
	calendarDaysEl.addEventListener('click', function (e) {
		if (e.target.classList.contains('calendar-day')) {
			const dateStr = e.target.getAttribute('data-date');
			selectedDate = new Date(dateStr);
					renderCalendar(currentMonth, currentYear);
							renderTimeSlots(selectedDate);
							// Dispatch custom event pour l'heure sélectionnée
							document.dispatchEvent(new CustomEvent('time-selected', { detail: selectedTime }));
						}
					});
		}
	});

		// Sélection d'un créneau horaire
		timeSlotsEl.addEventListener('click', function (e) {
			if (e.target.classList.contains('time-slot')) {
				selectedTime = e.target.getAttribute('data-time');
				renderTimeSlots(selectedDate);
				// Vous pouvez ici ajouter une logique pour afficher la sélection ailleurs si besoin
			}
		});

		// Initialisation
		renderCalendar(currentMonth, currentYear);
		renderTimeSlots(null);
});
